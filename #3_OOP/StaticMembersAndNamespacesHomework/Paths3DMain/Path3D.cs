using System.Collections.Generic;
using _01.Point3DApplication;

namespace Paths3DMain
{
    public class Path3D
    {
        private ICollection<Point3D> points;

        public Path3D(ICollection<Point3D> points = null)
        {
            this.points = new List<Point3D>();
        }

        public ICollection<Point3D> Points
        {
            get { return this.points; }
            set { this.points = value; }
        }
    }
}