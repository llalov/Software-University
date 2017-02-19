using System;
using _01.Point3DApplication;

namespace _02.DistanceCalculatorApp
{
    class DistanceCalculatorAppMain
    {
        static void Main()
        {
            var pointA = new Point3D(-7, -4, 3);
            var pointB = new Point3D(17, 6, 2.5);
            Console.WriteLine(DistanceCalculator.CalculateDistance(pointA, pointB));
        }
    }
}
