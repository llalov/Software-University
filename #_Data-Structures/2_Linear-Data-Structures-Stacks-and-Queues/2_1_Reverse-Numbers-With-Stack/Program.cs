using System;
using System.Collections.Generic;
using System.Linq;

namespace _2_1_Reverse_Numbers_with_Stack
{
    class Program
    {
        static void Main()
        {
            try
            {
                List<int> input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
                Stack<int> output = new Stack<int>();

                for (int i = 0; i < input.Count; i++)
                {
                    output.Push(input[i]);
                }

                for (int i = 0; i < input.Count; i++)
                {
                    Console.WriteLine(output.Pop());
                }
            }
            catch (Exception e)
            {

                Console.WriteLine("");
            }

        }
    }
}
