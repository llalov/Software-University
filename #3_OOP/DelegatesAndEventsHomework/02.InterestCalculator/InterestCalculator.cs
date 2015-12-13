using System;

namespace P2_InterestCalculator
{
    public class InterestCalculator
    {
        public delegate decimal CalculateInterest(decimal sum, decimal interest, int years);

        public decimal Sum { get; set; }
        public decimal Interest { get; set; }
        public int Years { get; set; }
        public CalculateInterest CalculateInterestMethod { get; set; }

        public InterestCalculator
            (decimal sum, decimal interest, int years, CalculateInterest calcMethod)
        {
            this.Sum = sum;
            this.Interest = interest;
            this.Years = years;
            this.CalculateInterestMethod = calcMethod;
        }

        public override string ToString()
        {
            return 
                string.Format("{0:F4}", 
                this.CalculateInterestMethod(this.Sum, this.Interest, this.Years));
        }
    }
}
