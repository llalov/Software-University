using System;
using System.Collections.Generic;
using System.Linq;

namespace _1_2_Sort_Words
{
    class Program
    {
        static void Main()
        {
            List<string> input = Console.ReadLine().Split(' ').ToList();

            input.Sort();
            string output = "";
            foreach(string word in input)
            {
                output += word + " ";
            }
            output = output.TrimEnd();
            Console.WriteLine(output);
        }
    }
}