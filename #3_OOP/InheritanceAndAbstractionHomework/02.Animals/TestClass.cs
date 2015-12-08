using System;
using System.Collections.Generic;
using System.Linq;

namespace P2_Animals
{
    class TestClass
    {
        static void Main()
        {
            var penka = new Kitten("Penka", 10);
                       
            var gosho = new Tomcat("Goshko", 12);
                        
            var haralampi = new Frog("Haralampi", 4, "male");

            var maria = new Dog("Mariika", 2, "female");

            var animalList = new Animal[]
            {
                penka,
                gosho,
                haralampi,
                maria,
                new Dog("Atanaska", 6, "female"),
                new Kitten("Kircho", 2),
                new Frog("Jack", 4, "male"),
                new Dog("Pehlivanka", 1, "female"),
                new Tomcat("Steve Jobs", 3),
                new Cat("Zoe", 7, "female"),
                new Frog("Bimbo",8, "male"), 
            };

            foreach (var animal in animalList)
            {
                Console.WriteLine(animal);
                animal.ProduceSound();
                Console.WriteLine();
            }

            Console.WriteLine("Average age of all animals in the array is: {0:F2}",
                animalList.Average(x => x.Age));
            
            foreach (var kind in animalList.OrderBy(x => x.GetType().Name).GroupBy(x => x.GetType().Name))
            {
                double averageAge = kind.Select(x => x.Age).Average();
                Console.WriteLine("Average age of {0}: {1:F2}", kind.Key, averageAge);
            }
            
        }
    }
}
