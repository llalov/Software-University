using System;

namespace P1_GalacticGPS
{
    class TestClass
    {
        static void Main()
        {
            Location home = new Location(18.037986, 28.870097, Location.Planet.Earth);
            Console.WriteLine(home);
        }
    }
}
