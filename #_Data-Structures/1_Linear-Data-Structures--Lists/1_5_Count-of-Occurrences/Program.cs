using System;
using System.Collections.Generic;
using System.Linq;

namespace _1_5_Count_of_Occurrences
{
    class Program
    {
        static void Main()
        {
            List<int> input = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            Dictionary<int, int> result = new Dictionary<int, int>();

            foreach  (int item in input)
            {
                if (result.ContainsKey(item))
                {
                    result[item] += 1;
                }
                else
                {
                    result.Add(item, 1);
                }
            }
            foreach(KeyValuePair<int, int> kvp in result)
            {
                Console.WriteLine("{0} -> {1} times",kvp.Key,kvp.Value);
            }
        }
    }
}
