using System;
using _01.Point3DApplication;

namespace _02.DistanceCalculatorApp
{
    public static class DistanceCalculator
    {
        public static double CalculateDistance(Point3D pointA, Point3D pointB)
        {
            var formula = Math.Sqrt((pointB.X - pointA.X) * (pointB.X - pointA.X) + (pointB.Y - pointA.Y) * (pointB.Y - pointA.Y) + (pointB.Z - pointA.Z) * (pointB.Z - pointA.Z));

            return formula;
        }
    }
}