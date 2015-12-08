using System;

namespace P2_Animals
{
    class Cat : Animal, ISoundProducible
    {
        public Cat(string name, int age, string gender) : base(name, age, gender)
        {
            
        }
        public override string ToString()
        {
            return base.ToString() + "\nI am a Cat!";
        }

        public override void ProduceSound()
        {
            Console.WriteLine("Myaauuu!");
        }
    }
}
