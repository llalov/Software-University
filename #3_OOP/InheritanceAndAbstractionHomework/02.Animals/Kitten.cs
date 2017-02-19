using System;

namespace P2_Animals
{
    class Kitten : Cat
    {
        public Kitten(string name, int age) : base(name, age, "female")
        {
            
        }

        public override string ToString()
        {
            return base.ToString() + "\nI am also a Kitten!";
        }
    }
}
