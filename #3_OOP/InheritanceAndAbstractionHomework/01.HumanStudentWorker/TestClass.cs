using System;
using System.Collections.Generic;
using System.Linq;

namespace P1_HumanStudentWorker
{
    class TestClass
    {
        static void Main()
        {
            Worker pesho = new Worker("Pesho", "Gradski",100, 8);
            Student gosho = new Student("Georgi", "Selski", "2124521466");
            
            var studentList = new List<Student>
            {
                gosho,
                new Student("Tyrion", "Lannister", "AB112FG"),
                new Student("Robb", "Stark", "ROBBISDEAD"),
                new Student("Jaime", "Lannister", "JAIM7689"),
                new Student("Doran", "Martell", "DORAN8434"),
                new Student("Daenerys", "Stormborn", "TARGARYEN"),
                new Student("Jorah", "Mormont", "JORAH567"),
                new Student("Aegon", "Targaryen", "CONQUEROR"),
                new Student("Aerys", "Targaryen", "MAD7353"),
                new Student("Peter", "Baelish", "IRULE8754")
            };
            studentList = studentList.OrderBy(x => x.FacultyNumber).ToList();
            //Console.WriteLine("Student List ordered ascending by faculty number:\n------");
            //Console.WriteLine(string.Join("\n", studentList));

            var workersList = new List<Worker>
            {
                pesho,
                new Worker("Tyrion", "Lannister", 100, 8),
                new Worker("Robb", "Stark", 50.45m, 10),
                new Worker("Jaime", "Lannister", 50, 20),
                new Worker("Doran", "Martell", 89, 5),
                new Worker("Daenerys", "Stormborn", 200, 24),
                new Worker("Jorah", "Mormont", 45, 2),
                new Worker("Aegon", "Targaryen", 88.12m, 12),
                new Worker("Aerys", "Targaryen", 93.46m, 44),
                new Worker("Peter", "Baelish", 56, 10)
            };

            workersList = workersList.OrderByDescending(x => x.MoneyPerHour()).ToList();
            //Console.WriteLine("\n\nWorkers List ordered descending by money per hour:\n------");
            //Console.WriteLine(string.Join("\n", workersList));

            var merged = new List<Human>();
            merged.AddRange(workersList);
            merged.AddRange(studentList);
            merged.Sort((x, y) => string.Compare(x.FirstName, y.FirstName));    // sorted by first name
            //merged.Sort((x, y) => string.Compare(x.LastName, y.LastName));    //sorted by last name
            Console.WriteLine("\n\n\nMerged list sorted below:\n----------");
            Console.WriteLine(string.Join("\n", merged));
        }
    }
}
