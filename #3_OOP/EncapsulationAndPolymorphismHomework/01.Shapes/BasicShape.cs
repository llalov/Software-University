using System;

namespace P1_Shapes
{
    abstract class BasicShape : IShape
    {
        private double width;
        private double height;

        public double Width { get; set; }
        public double Height { get; set; }

        protected BasicShape(double width, double height)
        {
            this.Width = width;
            this.Height = height;
        }

        public abstract double CalculateArea();

        public abstract double CalculatePerimeter();

        public override string ToString()
        {
            return string.Format("I am {0}\nMy area is: {1}\nMy perimeter is: {2}\n",
                this.GetType().Name, this.CalculateArea(), this.CalculatePerimeter());
        }
    }
}
