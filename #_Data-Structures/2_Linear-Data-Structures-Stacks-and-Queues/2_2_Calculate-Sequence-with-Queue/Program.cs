using System;
using System.Collections.Generic;
using System.Linq;

namespace _2_2_Calculate_Sequence_with_Queue
{
    class Program
    {
        static void Main()
        {
            string input = Console.ReadLine();
            int n = Convert.ToInt32(input);
            Queue<int> output = new Queue<int>();

            output.Enqueue(n);

            for (int i = 0; i < 50; i++)
            {
                int num = output.ElementAt(i);

                output.Enqueue(num + 1);
                output.Enqueue(2 * num + 1);
                output.Enqueue(num + 2);
            }

            for (int i = 0; i < 50; i++)
            {
                Console.WriteLine(output.Dequeue());
            }
        }
    }
}
