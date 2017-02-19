using System;

namespace P1_Shapes
{
    class Triangle : BasicShape
    {
        public Triangle(double width, double height) : base(width, height)
        {
            base.Width = width;
            base.Height = height;
        }
        public override double CalculateArea()
        {
            return (this.Width*this.Height)/2;
        }

        public override double CalculatePerimeter()
        {
            return this.Width + this.Height + 
                (Math.Sqrt(this.Width*this.Width + this.Height*this.Height));
        }
    }
}
