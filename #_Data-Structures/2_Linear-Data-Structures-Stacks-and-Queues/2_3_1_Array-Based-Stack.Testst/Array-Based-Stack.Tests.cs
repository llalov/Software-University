using _2_3_Array_Based_Stack;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _2_3_1_Array_Based_Stack.Testst
{
	[TestClass]
    public class Array_Based_Stack
    {
		[TestMethod]
		public void Push_Pop_Element()
        {
            var testArrayStack = new ArrayStack<int>();

            Assert.AreEqual(0, testArrayStack.Count, "Initial count of ArrayStack is not 0.");
            testArrayStack.Push(12);
            testArrayStack.Push(20);
            testArrayStack.Push(33);
            testArrayStack.Push(23);
            Assert.AreEqual(4, testArrayStack.Count, "Count is not equal to the elemnts in the stack.");
            testArrayStack.Pop();
            Assert.AreEqual(3, testArrayStack.Count, "Count is not decreasing after popping element.");
        }

		[TestMethod]
		public void Push_Pop_1000_Elements()
        {
            var testArrayStack = new ArrayStack<string>();
            Assert.AreEqual(0, testArrayStack.Count, "Initial count of ArrayStack is not 0.");

            for (int iter = 1; iter <= 1000; iter++)
            {
                testArrayStack.Push(iter+"");
                Assert.AreEqual(iter, testArrayStack.Count, "Count is not equal at iteration: " + iter);
            }

            string lastElement = testArrayStack.Pop();
            Assert.AreEqual("1000", lastElement, "Last popped element is not correct.");
        }

		[TestMethod]
		[ExpectedException(typeof(System.IndexOutOfRangeException))]
		public void Pop_From_Empty_stack()
        {
            var testArrayStack = new ArrayStack<int>();
            testArrayStack.Pop();
        }
    }
}
