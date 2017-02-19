using System;
using System.Collections.Generic;

namespace P1_CustomLINQExtensionMethods
{
    class TestClass
    {
        static void Main()
        {
            var nums = new List<int> {1,2,3,4,5,6,7,8,9,10};
            var filteredNums = nums.WhereNot(x => x%2 == 0);
            Console.WriteLine("Filtered numbers: {0}", 
                string.Join(", ", filteredNums));

            var words = new List<string>{"Pesho", "Maria", "Gosho", "Michelle"};
            var filteredWords = words.WhereNot(x => x.StartsWith("M"));
            Console.WriteLine("Filtered strings: {0}",
                string.Join(", ",filteredWords));

            var students = new List<Student>
            {
                new Student("Pesho", 3),
                new Student("Gosho", 2),
                new Student("Mariika", 7),
                new Student("Stamat", 5)
            };

            Console.WriteLine("Filtered students: {0}" ,
                string.Join(", ", students.WhereNot(x => x.Grade <= 3)));
           
            Console.WriteLine(students.Max(x => x.Grade));
            Console.WriteLine(students.Max(x => x.Name));
        }
    }
}