using System;

namespace P2_Animals
{
    class Frog : Animal, ISoundProducible
    {
        public Frog(string name, int age, string gender) : base(name, age, gender)
        {
            
        }
        public override string ToString()
        {
            return base.ToString() + "\nI am a Frog!";
        }

        public override void ProduceSound()
        {
            Console.WriteLine("Kwak-kwak!");
        }
    }
}
