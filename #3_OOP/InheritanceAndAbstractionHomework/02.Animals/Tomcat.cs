using System;

namespace P2_Animals
{
    class Tomcat : Cat
    {
        public Tomcat(string name, int age) : base(name, age, "male")
        {
            
        }
        public override string ToString()
        {
            return base.ToString() + "\nI am also a Tomcat!";
        }
    }
}
