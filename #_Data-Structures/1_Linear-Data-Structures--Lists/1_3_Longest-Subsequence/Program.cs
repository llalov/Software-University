using System;
using System.Collections.Generic;
using System.Linq;

namespace _1_3_Longest_Subsequence
{
    class Program
    {
        static void Main()
        {
            List <int> input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            short maxLength = 1;
            short current = 1;
            int startIndex = 0;
            List<int> output = new List<int>();

            for (int i = 1; i < input.Count; i++)
            {
                if (input[i] == input[i-1])
                {
                    current++;
                }
                else
                {
                    current = 1;
                }

                if (current > maxLength)
                {
                    maxLength = current;
                    startIndex = (i - maxLength)+1;
                }
            }

            for (int i = 0; i < maxLength; i++)
            {
                output.Add(input[startIndex]);
                startIndex++;
            }

            foreach (int num in output)
            {
                Console.WriteLine(num);
            }
        }
    }
}
