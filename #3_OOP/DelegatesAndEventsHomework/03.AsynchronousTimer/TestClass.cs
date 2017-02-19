using System;

namespace P3_AsynchronousTimer
{
    class TestClass
    {
        static void Main()
        {
            AsyncTimer printText = new AsyncTimer(PrintNumber, 10, 500);
            printText.ExecuteAction();
        }

        public static void PrintNumber(int number)
        {
            Console.WriteLine("Printing number: {0}", number);
        }
    }
}
