using System;

namespace _01.Persons
{
    class PersonsMain
    {
        static void Main()
        {
            // I've create only valid objects

            var ivo = new Person("Ivelin Petkov", 100, "an7raks@email.bg");
            var ani = new Person("Ani Petkova", 23);

            Console.WriteLine(ivo);
            Console.WriteLine(ani);

            // You can try with invalid data - for example create a person with empty name or null,
                                                        // create a person with negative age or a very large one(142) or even try with zero
                                                        // create a person with email that has no '@' 
        }
    }
}
