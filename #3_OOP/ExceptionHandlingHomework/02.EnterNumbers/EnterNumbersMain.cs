using System;
using System.Text.RegularExpressions;

namespace _02.EnterNumbers
{
    class EnterNumbersMain
    {
        static void Main()
        {
            Console.Write("start = ");
            var start = int.Parse(Console.ReadLine());
            Console.Write("end = ");
            var end = int.Parse(Console.ReadLine());

            int counter = 0;
            while (counter < 10)
            {
                try
                {
                    var number = ReadNumber(start, end);
                    Console.WriteLine("Number {0}: {1}", counter + 1, number);
                    start = number;
                    counter++;
                }
                catch (ArgumentNullException)
                {
                    Console.WriteLine("The input data cannot be null or empty");
                }
                catch (ArgumentOutOfRangeException)
                {
                    Console.WriteLine($"The number should be larger than {start} and smaller than {end}");
                }
                catch (ArgumentException)
                {
                    Console.WriteLine("The input data is not a number");
                }
                catch (OverflowException)
                {
                    Console.WriteLine("The value was too big to fit in Int32");
                }
            }
        }

        static int ReadNumber(int start, int end)
        {
            var inputData = Console.ReadLine();

            if (string.IsNullOrEmpty(inputData))
            {
                throw new ArgumentNullException("The input data cannot be null or empty");
            }

            if (!Regex.IsMatch(inputData, @"\d"))
            {
                throw new ArgumentException("The input data is not a number");
            }

            int n = int.Parse(inputData);

            if (n <= start || n >= end)
            {
                throw new ArgumentOutOfRangeException($"The number should be larger than {start} and smaller than {end}");
            }

            return n;
        }
    }
}
