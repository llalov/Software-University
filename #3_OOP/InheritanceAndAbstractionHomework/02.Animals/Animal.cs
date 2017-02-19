using System;

namespace P2_Animals
{
    abstract class Animal : ISoundProducible
    {
        public virtual string Name { get; set; }
        public virtual int Age { get; set; }
        public virtual string Gender { get; set; }

        protected Animal(string name, int age, string gender)
        {
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(gender) || age < 0 || age > 100)
            {
                throw new ArgumentOutOfRangeException
                    ("Parameter", "Invalid data passed to constructor");
            }
            this.Name = name;
            this.Age = age;
            this.Gender = gender;
        }

        public override string ToString()
        {
            return string.Format("Name: {0}\nAge: {1}\nGender: {2}", 
                                    this.Name, this.Age, this.Gender);
        }

        public virtual void ProduceSound()
        {
            
        }
    }
}
