using System.Collections.Generic;
using System.IO;
using System.Linq;
using _01.Point3DApplication;

namespace Paths3DMain
{
    public static class Storage
    {
        public static void SavePathsToFile(string path, ICollection<Path3D> paths)
        {
            using (var writer = new StreamWriter(path))
            {
                foreach (var currentPath in paths)
                {
                    writer.WriteLine(string.Join(";", currentPath.Points));
                }
            }
        }

        public static ICollection<Path3D> LoadPathsFromFile(string path)
        {
            using (var reader = new StreamReader(path))
            {
                var collection = new List<Path3D>();

                var line = reader.ReadLine();
                while (line != null)
                {
                    var allPoints = line
                        .Split(';')
                        .Select(x => x.Replace("(", ""))
                        .Select(x => x.Replace(")", ""))
                        .Select(x => x.Trim())
                        .ToArray();
                    var currentPath = new Path3D();
                    foreach (var point in allPoints)
                    {
                        var coordinates = point
                            .Split(' ')
                            .Select(x => x.Trim())
                            .Select(double.Parse)
                            .ToArray();

                        var newPoint = new Point3D(coordinates[0], coordinates[1], coordinates[2]);
                        currentPath.Points.Add(newPoint);
                    }

                    collection.Add(currentPath);
                    line = reader.ReadLine();
                }

                return collection;
            }
        }
    }
}