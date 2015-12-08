using System;

namespace P2_Animals
{
    class Dog : Animal, ISoundProducible
    {
        public Dog(string name, int age, string gender ) : base(name, age, gender)
        {
            
        }

        public override string ToString()
        {
            return base.ToString() + "\nI am a Dog!";
        }

        public override void ProduceSound()
        {
            Console.WriteLine("Bau-bau!");
        }
    }
}
