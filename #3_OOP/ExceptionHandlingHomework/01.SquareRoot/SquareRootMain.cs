using System;

namespace _01.SquareRoot
{
    class SquareRootMain
    {
        static void Main()
        {
            var inputData = Console.ReadLine();

            try
            {
                int n = int.Parse(inputData);
                Console.WriteLine(Math.Sqrt(n));
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid number!");
            }
            catch (OverflowException)
            {
                Console.WriteLine("Invalid number!");
            }
            finally
            {
                Console.WriteLine("Good bye");
            }
        }
    }
}
