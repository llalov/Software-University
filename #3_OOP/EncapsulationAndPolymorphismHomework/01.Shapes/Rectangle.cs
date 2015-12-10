using System;

namespace P1_Shapes
{
    class Rectangle : BasicShape
    {
        public Rectangle(double width, double height) : base(width, height)
        {
            base.Width = width;
            base.Height = height;
        }
        public override double CalculateArea()
        {
            return this.Width*this.Height;
        }

        public override double CalculatePerimeter()
        {
            return 2*(this.Width + this.Height);
        }
    }
}
