using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.SoftwareUniversityLearningSystem
{
    class SULSTest
    {
        static void Main()
        {
            var persons = new List<Person>()
            {
                new Person("Todor", "Kacarski", 24),
                new Person("Ivelin", "Petkov", 23),
                new Person("Pavlin", "Kolev", 24),
                new Person("Jordan", "Petrov", 21),
                new Person("Stanislav", "Panayotov", 24)
            };

            var trainers = new List<Person>()
            {
                new Trainer("Yordan", "Darakchiev", 22),
                new Trainer("Ivan", "Yonkov", 24),
                new Trainer("Atanas", "Rusenov", 20),
                new Trainer("Svetlin", "Nakov", 40),
            };

            var students = new List<Student>()
            {
                new Student("Lachezar", "Lalov", 24, "3121231", 4.5d),
                new Student("Mariyan", "Todorov", 25, "1234567", 5.5d),
                new Student("Lubomir", "Lozev", 26, "9871526", 6.0d),
                new Student("Zhelyazko", "Stoyanov", 24, "6457981", 5.25d)
            };

            var juniorTrainer = new List<JuniorTrainer>()
            {
                new JuniorTrainer("Mincho", "Praznikov", 23),
                new JuniorTrainer("Toncho", "Todorov", 22),
            };

            var seniorTrainer = new List<SeniorTrainer>()
            {
                new SeniorTrainer("Dobri", "Dobrev", 31),
                new SeniorTrainer("Ivan", "Ivanov", 33),
            };

            var graduateStudent = new List<GraduateStudent>()
            {
                new GraduateStudent("Hristina", "Dimitrova", 26, "4564752", 5.50),
                new GraduateStudent("Valentina", "Petrova", 27, "4125687", 5.10)
            };

            var dropoutStudents = new List<DropoutStudent>()
            {
                new DropoutStudent("Emil", "Petkov", 22, "1452638", 4.10, "Cheating"),
                new DropoutStudent("Anastas", "Valentinov", 24, "1452638", 3.60, "Cheating")
            };

            var onlineStudents = new List<OnlineStudent>()
            {
                new OnlineStudent("Lachezar", "Mitrev", 24, "2233112", 4.68d, "OOP"),
                new OnlineStudent("Ivo", "Spasov", 22, "1133224", 4.92d, "Advanced C#"),
                new OnlineStudent("Geno", "Meleshkov", 23, "3121231", 4.14d, "JavaScript Basics"),
            };

            var onsiteStudents = new List<OnsiteStudent>()
            {
                new OnsiteStudent("Atanas", "Mitrev", 24, "1231231", 4.12d, "OOP"),
                new OnsiteStudent("Atanaska", "Spasova", 22, "1234312", 5.25d, "Advanced C#"),
                new OnsiteStudent("Genka", "Shikerova", 26, "3232454", 6.00d, "JavaScript Basics"),
            };

            var people = new List<Person>();
            people.AddRange(persons);
            people.AddRange(trainers);
            people.AddRange(students);
            people.AddRange(juniorTrainer);
            people.AddRange(seniorTrainer);
            people.AddRange(graduateStudent);
            people.AddRange(onlineStudents);
            people.AddRange(onsiteStudents);
            people.AddRange(dropoutStudents);

            var allCurrentStudents = people
                .OfType<CurrentStudent>();

            var allCurrentStudentsSorted = allCurrentStudents
                .OrderBy(x => x.AverageGrade)
                .ToList();

            foreach (var student in allCurrentStudentsSorted)
            {
                Console.WriteLine(student);
                Console.WriteLine();
            }
        }
    }
}
