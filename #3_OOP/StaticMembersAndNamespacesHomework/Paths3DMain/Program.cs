using System;

namespace Paths3DMain
{
    class Program
    {
        static void Main()
        {
            var paths = Storage.LoadPathsFromFile("../../pathsRead.txt");
            foreach (var path3D in paths)
            {
                Console.Write("Path: ");
                foreach (var point3D in path3D.Points)
                {
                    Console.Write(point3D);
                }
                Console.WriteLine();
            }

            Storage.SavePathsToFile("../../pathsWrite.txt", paths);
        }
    }
}
