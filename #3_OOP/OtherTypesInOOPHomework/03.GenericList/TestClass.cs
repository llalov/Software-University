using System;
using System.Collections.Generic;

namespace P3_GenericList
{
    class TestClass
    {
        static void Main()
        {
            var test = new GenericList<int>(5); //capacity is set manually to 5
            test.Add(344);
            test.Add(544);
            test.Add(12345);
            test.Add(-12);
            test.Add(9843222);
            Console.WriteLine(test);
            Console.WriteLine("Finding if the list contains the item {0}: {1}", 
                544, test.Contains(544));
            Console.WriteLine("Number of elements: {0}", test.Count);
            Console.WriteLine("Finding the index of the item {0}: {1}", 48, test.IndexOf(48));
            test[2] = -8888;
            Console.WriteLine("Changing the item at index[{0}]: {1}", 2, test);
            Console.WriteLine("Accessing index[{0}] of the list: {1}", 4, test[4]);
            //Console.WriteLine("Accessing index[{0}] of the list: {1}", 5, test[5]); //throws exception
            //test.RemoveAt(18); //throws exception
            test.RemoveAt(2);
            Console.WriteLine("Removing item at index[{0}]: {1}", 2, test);
            Console.WriteLine("Number of elements: {0}", test.Count);
            Console.WriteLine("Min: {0}", GenericList<int>.Min(test));
            Console.WriteLine("Max: {0}", GenericList<int>.Max(test));
            test.Clear();
            Console.WriteLine("Cleared list: {0}", test);

            System.Reflection.MemberInfo info = typeof(GenericList<>);
            foreach (object attribute in info.GetCustomAttributes(false))
            {
                Console.WriteLine(attribute);
            }
        }
    }
}
