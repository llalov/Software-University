using System;

namespace _01.Persons
{
    public class Person
    {
        private string name;
        private int age;
        private string email;

        public Person(string name, int age)
            : this (name, age, null)
        {
        }

        public Person(string name, int age, string email)
        {
            this.Name = name;
            this.Age = age;
            this.Email = email;
        }

        public string Name
        {
            get { return this.name; }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The name is mandatory");
                }

                this.name = value;
            }
        }

        public int Age
        {
            get { return this.age; }
            set
            {
                if (!(value > 0 && value < 101)) 
                {
                    throw new ArgumentException("The age must be positive");
                }

                this.age = value;
            }
        }

        public string Email
        {
            get { return this.email; }
            set
            {
                if (!string.IsNullOrEmpty(value))
                {
                    if (!value.Contains("@"))
                    {
                        throw new ArgumentException("The email should contain @");
                    }
                }

                this.email = value;
            }
        }

        public override string ToString()
        {
            return $"Name: {this.Name}, Age: {this.Age}, Email: {this.Email ?? "no email"}";
        }
    }
}