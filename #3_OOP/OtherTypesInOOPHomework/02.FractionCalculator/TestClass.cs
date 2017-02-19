using System;

namespace P2_FractionCalculator
{
    class TestClass
    {
        static void Main()
        {
            Fraction fraction1 = new Fraction(22, 7);
            Fraction fraction2 = new Fraction(40, 4);
            
            Fraction resultAddition = fraction1 + fraction2;
            Console.WriteLine(resultAddition.Numerator);
            Console.WriteLine(resultAddition.Denominator);
            Console.WriteLine(resultAddition);
            
            Fraction resultSubtraction = fraction1 - fraction2;
            Console.WriteLine(resultSubtraction.Numerator);
            Console.WriteLine(resultSubtraction.Denominator);
            Console.WriteLine(resultSubtraction);
        }
    }
}
