using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_3_Array_Based_Stack
{
    class Program
    {
        static void Main()
        {
            var test = new ArrayStack<int>();

            test.Push(12);
            test.Push(20);
            test.Push(33);
            test.Push(23);
            Console.WriteLine(test.Count);
            Console.WriteLine(test.Pop());
            Console.WriteLine(test.Count);

            int[] output = test.ToArray();

            for (int i = 0; i < output.Length; i++)
            {
                Console.WriteLine(output[i]);
            }

        }
    }
}
