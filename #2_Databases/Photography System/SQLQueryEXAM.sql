USE PhotographySystem
--1--
SELECT a.Name, ISNULL(a.[Description], 'No description') as Description FROM Albums a
ORDER BY a.Name
--2--
SELECT p.Title, a.Name FROM Photographs p 
	JOIN AlbumsPhotographs ap 
	ON p.Id = ap.PhotographId
	JOIN Albums a 
	ON a.Id = ap.AlbumId
ORDER BY a.Name ASC, p.Title DESC  
--3--
SELECT p.Title, p.Link, p.[Description] as Description, c.Name as CategoryName, u.FullName as Author 
	FROM Photographs p 
	JOIN Categories c 
	ON p.CategoryId = c.Id
	JOIN Users u 
	ON u.Id = p.UserId
ORDER BY p.Title ASC 
--4--
SELECT u.Username, u.FullName, u.BirthDate, ISNULL(p.Title, 'No photos') as Photo 
	FROM Users u 
	LEFT OUTER JOIN Photographs p 
	ON p.UserId = u.Id 
WHERE MONTH(u.BirthDate) = '01'
ORDER BY u.FullName ASC
--5--
SELECT p.Title, c.Model [CameraModel], l.Model [LensModel] 
	FROM Photographs p 
	JOIN Equipments e 
	ON p.EquipmentId = e.Id
	JOIN Cameras c 
	ON c.Id = e.CameraId
	JOIN Lenses l 
	ON l.Id = e.LensId
ORDER BY p.Title ASC
--6--

--7--
SELECT m.Name, c.Model, c.Price 
	FROM Cameras c 
	JOIN Manufacturers m 
	ON c.ManufacturerId = m.Id
WHERE c.Price > (SELECT AVG(Price) FROM Cameras)
ORDER BY c.Price DESC, c.Model ASC
--8--
SELECT m.Name, SUM(l.Price) [Total Price]
	FROM Lenses l 
	JOIN Manufacturers m 
	ON l.ManufacturerId = m.Id
GROUP BY m.Name
ORDER BY m.Name
--9--
SELECT u.FullName, m.Name [Manufacturer], c.Model [Camera Model], c.Megapixels
	FROM Users u 
	JOIN Equipments e 
	ON u.EquipmentId = e.Id
	JOIN Cameras c 
	ON c.Id = e.CameraId
	JOIN Manufacturers m 
	ON m.Id = c.ManufacturerId
WHERE c.[Year] < 2015
ORDER BY u.FullName
--10--
SELECT l.[Type], COUNT(l.[Type]) as Count  
	FROM Lenses l
GROUP BY l.[Type]
ORDER BY COUNT(l.[Type]) DESC, l.[Type]
--11--
SELECT u.Username, u.FullName FROM Users u
ORDER BY LEN(u.Username) + LEN(u.FullName) ASC, u.BirthDate DESC
--12--
SELECT Name FROM Manufacturers
ORDER BY Name
--13--
--UPDATE Cameras
	--SET Price = Price + (SELECT AVG(c.Price) * LEN(m.Name)*0.01
		--					FROM Cameras c 
			--				JOIN Manufacturers m 
				--			ON c.ManufacturerId = m.Id			
					--		WHERE c.ManufacturerId = cam.ManufacturerId)					
--	FROM Cameras cam
--	JOIN Manufacturers man 
--	ON cam.ManufacturerId = man.Id
--6--

--15--