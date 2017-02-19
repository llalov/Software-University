using System;

namespace P1_Shapes
{
    class Circle : IShape
    {
        private double radius;

        public double Radius { get; set; }

        public Circle(double radius)
        {
            this.Radius = radius;
        }
        public double CalculateArea()
        {
            return Math.PI*this.Radius*this.Radius;
        }

        public double CalculatePerimeter()
        {
            return 2*Math.PI*this.Radius;
        }

        public override string ToString()
        {
            return string.Format("I am Circle\nMy area is: {0}\nMy perimeter is {1}\n",
                this.CalculateArea(), this.CalculatePerimeter());
        }
    }
}
