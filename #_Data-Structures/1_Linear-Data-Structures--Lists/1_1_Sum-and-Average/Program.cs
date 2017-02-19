using System;
using System.Collections.Generic;
using System.Linq;

namespace _1_1_Sum_and_Average
{
    class Program
    {
        static void Main()
        {
            try
            {
                List<int> input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();

                decimal sum = 0m;
                decimal average = 0m;
                for (int i = 0; i < input.Count; i++)
                {
                    sum += input[i];
                }
                average = sum / input.Count;
                Console.WriteLine("Sum={0};\nAverage={1};", sum, average);
            }
            catch (Exception)
            {
                Console.WriteLine("Sum=0;\nAverage=0;");
            }
        }
    }
}
