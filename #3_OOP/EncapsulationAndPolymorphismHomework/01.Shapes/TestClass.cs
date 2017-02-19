using System;

namespace P1_Shapes
{
    class TestClass
    {
        static void Main()
        {
            var rect = new Rectangle(10,12);
            var tria = new Triangle(22,10);
            var circ = new Circle(12.4);
            //Console.WriteLine(rect);
            //Console.WriteLine(tria);
            //Console.WriteLine(circ);

            IShape[] arrayOfShapes = 
            {
                rect,
                tria,
                circ,
                new Circle(45.23),
                new Triangle(34,12),
                new Rectangle(22,13), 
            };

            foreach (var shape in arrayOfShapes)
            {
                Console.WriteLine("Area of {0}: {1:F2}", 
                    shape.GetType().Name, shape.CalculateArea());
                Console.WriteLine("Perimeter of {0}: {1:F2}", 
                    shape.GetType().Name, shape.CalculatePerimeter());
                //Console.WriteLine();
            }
        }
    }
}
