using System;

namespace _01.Point3DApplication
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine(Point3D.StartingPoint3D);
            var point = new Point3D(3, 4, 2);
            Console.WriteLine(point);
        }
    }
}
