using System;

namespace P1_HumanStudentWorker
{
    abstract class Human
    {
        //private string firstName;
        //private string lastName;
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }

        protected Human(string firstName, string lastName)
        {
            if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("Parameter", "First and Last names must not be empty");
            }
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public override string ToString()
        {
            return String.Format("\nFirst name: {0}\nLast name: {1}", this.FirstName, this.LastName);
        }

    }
}
