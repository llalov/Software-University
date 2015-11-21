--1--
SELECT Name FROM Characters
ORDER BY Name
--2--
SELECT TOP 50 Name [Game], CONVERT(char(10), Start,126)[Start] 
FROM Games
WHERE YEAR(Start) = 2011 OR YEAR(Start) = 2012
ORDER BY Start, Name
--3--
SELECT Username, SUBSTRING(Email,(CHARINDEX('@',Email)+1),100) [Email Provider] FROM Users
ORDER BY SUBSTRING(Email,(CHARINDEX('@',Email)+1),100), Username
--4--
SELECT Username, IpAddress [IP Address]
From Users
WHERE IPAddress LIKE '___.1_%._%.___' 
ORDER BY Username
--5--
SELECT Name [Game], 
	CASE 
		WHEN DATEPART(HOUR, Start) >= 0 AND DATEPART(HOUR, Start) < 12  
			THEN 'Morning'
		WHEN DATEPART(HOUR, Start) >= 12 AND DATEPART(HOUR, Start) < 18  
			THEN 'Afternoon'
		WHEN DATEPART(HOUR, Start) >= 18 AND DATEPART(HOUR, Start) < 24  
			THEN 'Evening'
	END
	as [Part of the Day],

	CASE
		WHEN Duration <= 3 
			THEN 'Extra Short'
		WHEN Duration BETWEEN 4 AND 6 --maybe 7
			THEN 'Short'
		WHEN Duration > 6 
			THEN 'Long'
		ELSE
			'Extra Long'		 	 
	END
	as [Duration]
FROM Games
ORDER BY Name, Duration, Start
--6--
SELECT SUBSTRING(Email,(CHARINDEX('@',Email)+1),100) [Email Provider], COUNT(*) [Number Of Users]
FROM Users
GROUP BY SUBSTRING(Email,(CHARINDEX('@',Email)+1),100)
ORDER BY COUNT(*) DESC, SUBSTRING(Email,(CHARINDEX('@',Email)+1),100)
--7--
SELECT g.Name [Game], gt.Name [Game Type], u.Username, ug.Level [Level], ug.Cash, c.Name [Character] 
FROM Games g 
	JOIN UsersGames ug 
	ON ug.GameId = g.Id
	JOIN GameTypes gt
	ON g.GameTypeId = gt.Id
	JOIN Users u
	ON u.Id = ug.UserId
	JOIN Characters c
	ON c.Id = ug.CharacterId
ORDER BY ug.Level DESC, u.Username, g.Name
--8--
SELECT u.Username, g.Name [Game], COUNT(i.Id) [Items Count], SUM(i.Price) [Items Price]
	FROM Users u
	JOIN UsersGames ug 
	ON ug.UserId = u.Id
	JOIN Games g
	ON g.Id = ug.GameId
	JOIN UserGameItems ugi
	ON ugi.UserGameId = ug.Id
	JOIN Items i
	ON i.Id = ugi.ItemId
GROUP BY u.Username, g.Name
HAVING COUNT(i.Id) >= 10
ORDER BY COUNT(i.Id) DESC, SUM(i.Price) DESC, u.Username ASC
--9--
select 
	u.Username, 
	g.Name as Game, 
	MAX(c.Name) Character,
	SUM(its.Strength) + MAX(gts.Strength) + MAX(cs.Strength) as Strength,
	SUM(its.Defence) + MAX(gts.Defence) + MAX(cs.Defence) as Defence,
	SUM(its.Speed) + MAX(gts.Speed) + MAX(cs.Speed) as Speed,
	SUM(its.Mind) + MAX(gts.Mind) + MAX(cs.Mind) as Mind,
	SUM(its.Luck) + MAX(gts.Luck) + MAX(cs.Luck) as Luck
from Users u
join UsersGames ug on ug.UserId = u.Id
join Games g on ug.GameId = g.Id
join GameTypes gt on gt.Id = g.GameTypeId
join [Statistics] gts on gts.Id = gt.BonusStatsId
join Characters c on ug.CharacterId = c.Id
join [Statistics] cs on cs.Id = c.StatisticId
join UserGameItems ugi on ugi.UserGameId = ug.Id
join Items i on i.Id = ugi.ItemId
join [Statistics] its on its.Id = i.StatisticId
group by u.Username, g.Name
order by Strength desc, Defence desc, Speed desc, Mind desc, Luck desc
--10--
SELECT i.Name, i.Price, i.MinLevel, s.Strength, s.Defence, s.Speed,s.Luck, s.Mind
	FROM Items i
	JOIN [Statistics] s 
	ON I.StatisticId = s.Id
WHERE s.Mind > (SELECT AVG(s.Mind) FROM Items i JOIN [Statistics] s ON s.Id = i.StatisticId) 
AND s.Luck > (SELECT AVG(s.Luck) FROM Items i JOIN [Statistics] s ON i.StatisticId = s.Id)
AND s.Speed > (SELECT AVG(s.Speed) FROM Items i JOIN [Statistics] s ON s.Id = i.StatisticId )
ORDER BY i.Name
--11--
SELECT i.Name [Item], i.Price, i.MinLevel, gt.Name [Forbidden Game Type]
	FROM Items i
	LEFT OUTER JOIN GameTypeForbiddenItems gtfi 
	ON gtfi.ItemId = i.Id
	LEFT OUTER JOIN GameTypes gt
	ON gt.Id = gtfi.GameTypeId
ORDER BY gt.Name DESC, i.Name ASC
--12--
INSERT INTO UserGameItems(ItemId, UserGameId) 
VALUES
	 (
		(SELECT i.Id FROM Items i WHERE i.Name = 'Blackguard'),
		(SELECT ug.Id From UsersGames ug 
			JOIN Users u ON u.Id = ug.UserId
			JOIN Games g ON g.Id = ug.GameId
		 WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')
	 ) 
UPDATE UsersGames 
	SET Cash = Cash - (SELECT i.Price FROM Items i WHERE i.Name = 'Blackguard')
 	WHERE Id = (SELECT ug.Id From UsersGames ug 
				   JOIN Users u ON u.Id = ug.UserId
			       JOIN Games g ON g.Id = ug.GameId
		        WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')

INSERT INTO UserGameItems(ItemId, UserGameId) 
VALUES
	 (
		(SELECT i.Id FROM Items i WHERE i.Name = 'Bottomless Potion of Amplification'),
		(SELECT ug.Id From UsersGames ug 
			JOIN Users u ON u.Id = ug.UserId
			JOIN Games g ON g.Id = ug.GameId
		 WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')
	 ) 
UPDATE UsersGames 
	SET Cash = Cash - (SELECT i.Price FROM Items i WHERE i.Name = 'Bottomless Potion of Amplification')
 	WHERE Id = (SELECT ug.Id From UsersGames ug 
				   JOIN Users u ON u.Id = ug.UserId
			       JOIN Games g ON g.Id = ug.GameId
		        WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')

INSERT INTO UserGameItems(ItemId, UserGameId) 
VALUES
	 (
		(SELECT i.Id FROM Items i WHERE i.Name = 'Eye of Etlich (Diablo III)'),
		(SELECT ug.Id From UsersGames ug 
			JOIN Users u ON u.Id = ug.UserId
			JOIN Games g ON g.Id = ug.GameId
		 WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')
	 ) 
UPDATE UsersGames 
	SET Cash = Cash - (SELECT i.Price FROM Items i WHERE i.Name = 'Eye of Etlich (Diablo III)')
 	WHERE Id = (SELECT ug.Id From UsersGames ug 
				   JOIN Users u ON u.Id = ug.UserId
			       JOIN Games g ON g.Id = ug.GameId
		        WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')

INSERT INTO UserGameItems(ItemId, UserGameId) 
VALUES
	 (
		(SELECT i.Id FROM Items i WHERE i.Name = 'Gem of Efficacious Toxin'),
		(SELECT ug.Id From UsersGames ug 
			JOIN Users u ON u.Id = ug.UserId
			JOIN Games g ON g.Id = ug.GameId
		 WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')
	 ) 
UPDATE UsersGames 
	SET Cash = Cash - (SELECT i.Price FROM Items i WHERE i.Name = 'Gem of Efficacious Toxin')
 	WHERE Id = (SELECT ug.Id From UsersGames ug 
				   JOIN Users u ON u.Id = ug.UserId
			       JOIN Games g ON g.Id = ug.GameId
		        WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')

INSERT INTO UserGameItems(ItemId, UserGameId) 
VALUES
	 (
		(SELECT i.Id FROM Items i WHERE i.Name = 'Golden Gorget of Leoric'),
		(SELECT ug.Id From UsersGames ug 
			JOIN Users u ON u.Id = ug.UserId
			JOIN Games g ON g.Id = ug.GameId
		 WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')
	 ) 
UPDATE UsersGames 
	SET Cash = Cash - (SELECT i.Price FROM Items i WHERE i.Name = 'Golden Gorget of Leoric')
 	WHERE Id = (SELECT ug.Id From UsersGames ug 
				   JOIN Users u ON u.Id = ug.UserId
			       JOIN Games g ON g.Id = ug.GameId
		        WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')

INSERT INTO UserGameItems(ItemId, UserGameId) 
VALUES
	 (
		(SELECT i.Id FROM Items i WHERE i.Name = 'Hellfire Amulet'),
		(SELECT ug.Id From UsersGames ug 
			JOIN Users u ON u.Id = ug.UserId
			JOIN Games g ON g.Id = ug.GameId
		 WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')
	 ) 
UPDATE UsersGames 
	SET Cash = Cash - (SELECT i.Price FROM Items i WHERE i.Name = 'Hellfire Amulet')
 	WHERE Id = (SELECT ug.Id From UsersGames ug 
				   JOIN Users u ON u.Id = ug.UserId
			       JOIN Games g ON g.Id = ug.GameId
		        WHERE g.Name = 'Edinburgh' AND u.Username = 'Alex')

SELECT u.Username, g.Name, ug.Cash, i.Name [Item Name]
	FROM Users u
	JOIN UsersGames ug
	ON ug.UserId = u.Id
	JOIN Games g
	ON g.Id = ug.GameId
	JOIN UserGameItems ugi
	ON ugi.UserGameId = ug.Id
	JOIN Items i
	ON i.Id = ugi.ItemId
WHERE g.Name = 'Edinburgh'
ORDER BY i.Name

--13--
SET XACT_ABORT ON 
BEGIN TRANSACTION [Massive Shopping 11-12]

BEGIN TRY
	UPDATE UsersGames 
	SET Cash = Cash - (SELECT SUM(i.Price) FROM Items i WHERE i.MinLevel BETWEEN 11 AND 12)
	WHERE GameId = (SELECT Id FROM Games g WHERE g.Name = 'Safflower') AND UserId = (SELECT Id FROM Users WHERE Username = 'Stamat')

	INSERT INTO UserGameItems (UserGameId, ItemId)
	SELECT 110, Id FROM Items WHERE MinLevel BETWEEN 11 AND 12


COMMIT TRANSACTION [Massive Shopping 11-12]
END TRY
BEGIN CATCH 
	ROLLBACK TRANSACTION [Massive Shopping 11-12]
END CATCH

GO

BEGIN TRANSACTION [Massive Shopping 19-21]

BEGIN TRY
	UPDATE UsersGames
	SET Cash = Cash - (SELECT SUM(i.Price) FROM Items i WHERE i.MinLevel BETWEEN 19 AND 21)
	WHERE GameId = (SELECT Id FROM Games g WHERE g.Name = 'Safflower') AND UserId = (SELECT Id FROM Users WHERE Username = 'Stamat')

	INSERT INTO UserGameItems (UserGameId, ItemId)
	SELECT 110, Id FROM Items WHERE MinLevel BETWEEN 19 AND 21


COMMIT TRANSACTION [Massive Shopping 19-21]
END TRY
BEGIN CATCH 
	ROLLBACK TRANSACTION [Massive Shopping 19-21]
END CATCH

GO

SELECT i.Name [Item Name] FROM Items i 
	JOIN UserGameItems ugi ON i.Id = ugi.ItemId
	JOIN UsersGames ug ON ug.Id = ugi.UserGameId
	JOIN Users u ON u.Id = ug.UserId
	JOIN Games g ON g.Id = ug.GameId
WHERE ug.Id = (SELECT ug.Id FROM UsersGames ug 
	JOIN Users u ON u.Id = ug.UserId
	JOIN Games g ON g.Id = ug.GameId
	WHERE g.Name = 'Safflower' AND u.Username = 'Stamat' )
--14--
create function ufn_CashInUsersGames(@gameName nvarchar(max))
returns table
as return
with prices as (
	select Cash, (ROW_NUMBER() OVER(ORDER BY ug.Cash desc)) as RowNum from UsersGames ug
	join Games g on ug.GameId = g.Id
	where g.Name = @gameName
) 
select SUM(Cash) [SumCash] FROM prices WHERE RowNum % 2 = 1
GO

select * from ufn_CashInUsersGames('Bali')
union
select * from ufn_CashInUsersGames('Lily Stargazer')
union
select * from ufn_CashInUsersGames('Love in a mist')
union
select * from ufn_CashInUsersGames('Mimosa')
union
select * from ufn_CashInUsersGames('Ming fern')
--15--
create trigger tr_UserGameItems on UserGameItems
instead of insert
as
	insert into UserGameItems
	select ItemId, UserGameId from inserted
	where 
		ItemId in (
			select Id 
			from Items 
			where MinLevel <= (
				select [Level]
				from UsersGames 
				where Id = UserGameId
			)
		)
go

-- Add bonus cash for users

update UsersGames
set Cash = Cash + 50000 + (SELECT SUM(i.Price) FROM Items i JOIN UserGameItems ugi ON ugi.ItemId = i.Id WHERE ugi.UserGameId = UsersGames.Id)
where UserId in (
	select Id 
	from Users 
	where Username in ('loosenoise', 'baleremuda', 'inguinalself', 'buildingdeltoid', 'monoxidecos')
)
and GameId = (select Id from Games where Name = 'Bali')

-- Buy items for users

insert into UserGameItems (UserGameId, ItemId)
select  UsersGames.Id, i.Id 
from UsersGames, Items i
where UserId in (
	select Id 
	from Users 
	where Username in ('loosenoise', 'baleremuda', 'inguinalself', 'buildingdeltoid', 'monoxidecos')
) and GameId = (select Id from Games where Name = 'Bali' ) and ((i.Id > 250 and i.Id < 300) or (i.Id > 500 and i.Id < 540))


-- Get cash from users
update UsersGames
set Cash = Cash - (SELECT SUM(i.Price) FROM Items i JOIN UserGameItems ugi ON ugi.ItemId = i.Id WHERE ugi.UserGameId = UsersGames.Id)
where UserId in (
	select Id 
	from Users 
	where Username in ('loosenoise', 'baleremuda', 'inguinalself', 'buildingdeltoid', 'monoxidecos')
)
and GameId = (select Id from Games where Name = 'Bali')


select u.Username, g.Name, ug.Cash, i.Name [Item Name] from UsersGames ug
join Games g on ug.GameId = g.Id
join Users u on ug.UserId = u.Id
join UserGameItems ugi on ugi.UserGameId = ug.Id
join Items i on i.Id = ugi.ItemId
where g.Name = 'Bali'
order by Username, [Item Name]
--16--
DROP TABLE IF EXISTS `job_ad_applications`;
CREATE TABLE `job_ad_applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_ad_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_ad_id` (`job_ad_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `job_ad_applications_ibfk_1` FOREIGN KEY (`job_ad_id`) REFERENCES `job_ads` (`id`),
  CONSTRAINT `job_ad_applications_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `job_ads`;
CREATE TABLE `job_ads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `salary_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  KEY `salary_id` (`salary_id`),
  CONSTRAINT `job_ads_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  CONSTRAINT `job_ads_ibfk_2` FOREIGN KEY (`salary_id`) REFERENCES `salaries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `salaries`;
CREATE TABLE `salaries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_value` decimal(10,2) NOT NULL,
  `to_value` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

insert into users (username, fullname)
values ('pesho', 'Peter Pan'),
('gosho', 'Georgi Manchev'),
('minka', 'Minka Dryzdeva'),
('jivka', 'Jivka Goranova'),
('gago', 'Georgi Georgiev'),
('dokata', 'Yordan Malov'),
('glavata', 'Galin Glavomanov'),
('petrohana', 'Peter Petromanov'),
('jubata', 'Jivko Jurandov'),
('dodo', 'Donko Drozev'),
('bobo', 'Bay Boris');

insert into salaries (from_value, to_value)
values (300, 500),
(400, 600),
(550, 700),
(600, 800),
(1000, 1200),
(1300, 1500),
(1500, 2000),
(2000, 3000);

insert into job_ads (title, description, author_id, salary_id)
values ('PHP Developer', NULL, (select id from users where username = 'gosho'), (select id from salaries where from_value = 300)),
('Java Developer', 'looking to hire Junior Java Developer to join a team responsible for the development and maintenance of the payment infrastructure systems', (select id from users where username = 'jivka'), (select id from salaries where from_value = 1000)),
('.NET Developer', 'net developers who are eager to develop highly innovative web and mobile products with latest versions of Microsoft .NET, ASP.NET, Web services, SQL Server and related applications.', (select id from users where username = 'dokata'), (select id from salaries where from_value = 1300)),
('JavaScript Developer', 'Excellent knowledge in JavaScript', (select id from users where username = 'minka'), (select id from salaries where from_value = 1500)),
('C++ Developer', NULL, (select id from users where username = 'bobo'), (select id from salaries where from_value = 2000)),
('Game Developer', NULL, (select id from users where username = 'jubata'), (select id from salaries where from_value = 600)),
('Unity Developer', NULL, (select id from users where username = 'petrohana'), (select id from salaries where from_value = 550));

insert into job_ad_applications(job_ad_id, user_id)
values 
	((select id from job_ads where title = 'C++ Developer'), (select id from users where username = 'gosho')),
	((select id from job_ads where title = 'Game Developer'), (select id from users where username = 'gosho')),
	((select id from job_ads where title = 'Java Developer'), (select id from users where username = 'gosho')),
	((select id from job_ads where title = '.NET Developer'), (select id from users where username = 'minka')),
	((select id from job_ads where title = 'JavaScript Developer'), (select id from users where username = 'minka')),
	((select id from job_ads where title = 'Unity Developer'), (select id from users where username = 'petrohana')),
	((select id from job_ads where title = '.NET Developer'), (select id from users where username = 'jivka')),
	((select id from job_ads where title = 'Java Developer'), (select id from users where username = 'jivka'));
    
-- SELECT 

select username, fullname, ja.title as Job, s.from_value as 'From Value', s.to_value as 'To Value' from job_ad_applications jaa
join job_ads ja on ja.id = jaa.job_ad_id
join users u on u.id = jaa.user_id
join salaries s on s.id = ja.salary_id
order by username, ja.title