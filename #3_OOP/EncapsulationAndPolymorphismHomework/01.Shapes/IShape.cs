using System;
using System.Security.Cryptography.X509Certificates;

namespace P1_Shapes
{
    interface IShape
    {
        double CalculateArea();
        double CalculatePerimeter();
    }
}
