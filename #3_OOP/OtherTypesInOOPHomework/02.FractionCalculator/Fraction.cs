using System;
using System.Globalization;

namespace P2_FractionCalculator
{
    public struct Fraction
    {
        private double numerator;
        private double denominator;

        public double Numerator
        {
            get { return this.numerator; }
            set
            {
                if (value == 0)
                {
                    throw new ArgumentException("Numerator cannot be 0 (zero)", "value");
                }
                this.numerator = value;
            }
        }

        public double Denominator
        {
            get { return this.denominator; }
            set
            {
                if (value == 0)
                {
                    throw new ArgumentException("Denominator cannot be 0 (zero)", "value");
                }
                this.denominator = value;
            }
        }

        public Fraction(double numerator, double denominator) : this()
        {
            this.Numerator = numerator;
            this.Denominator = denominator;
        }

        public static Fraction operator +(Fraction first, Fraction second)
        {
            return new Fraction(first.Numerator * second.Denominator +
                second.Numerator * first.Denominator, first.Denominator * second.Denominator);
        }

        public static Fraction operator -(Fraction first, Fraction second)
        {
            return new Fraction(first.Numerator * second.Denominator -
                second.Numerator * first.Denominator, first.Denominator * second.Denominator);
        }

        public override string ToString()
        {
            return string.Format("{0}", this.Numerator/this.Denominator);
        }
    }
}
