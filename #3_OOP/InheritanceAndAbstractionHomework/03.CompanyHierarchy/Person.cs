using System;

namespace P3_CompanyHierarchy
{
    abstract class Person
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        protected Person(string id, string firstName, string lastName)
        {
            if (string.IsNullOrEmpty(id) || string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("Parameter","Invalid data in constructor!");
            }
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
        }

    }
}
