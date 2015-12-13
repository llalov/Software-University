using System;

namespace P2_InterestCalculator
{
    class TestClass
    {
        private const int Months = 12;

        static void Main()
        {
            Console.WriteLine(new InterestCalculator(2500, 0.072m, 15, GetSimpleInterest));
            Console.WriteLine(new InterestCalculator(500, 0.056m, 10, GetCompoundInterest));
        }

        public static decimal GetSimpleInterest(decimal sum, decimal interest, int years)
        {
            return decimal.Round(sum * (1 + interest * years), 4);
        }

        public static decimal GetCompoundInterest(decimal sum, decimal interest, int years)
        {
            decimal interestMultiplierBase = 1 + (interest / Months);
            int interestMultiplierPower = years * Months;

            decimal interestMultiplier = 1;
            for (int i = 0; i < interestMultiplierPower; i++)
            {
                interestMultiplier *= interestMultiplierBase;
            }

            decimal balanceWithInterest = sum * interestMultiplier;

            return decimal.Round(balanceWithInterest, 4);
        }
    }
}