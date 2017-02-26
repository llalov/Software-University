using System;

namespace _2_3_Array_Based_Stack
{
    public class ArrayStack<T>
    {
        private T[] elements;
        private const int InitialCapacity = 16;

        public ArrayStack(int capacity = InitialCapacity)
        {
            this.elements = new T[capacity];
        }

        public int Count { get; private set;}

        public void Push(T element)
        {
            if (this.Count == this.elements.Length)
            {
                this.Grow();
            }

            this.elements[this.Count] = element;
            this.Count ++;
        }
        public T Pop()
        {
            this.Count --;
            return this.elements[this.Count];
        }
        public T[] ToArray()
        {
            T[] result = new T[this.Count];
            Array.Copy(this.elements, 0, result, 0, this.Count);
            return result;
        }
        private void Grow()
        {
            T[] newElements = new T[this.elements.Length * 2];

            Array.Copy(this.elements, newElements, this.elements.Length);

            this.elements = newElements;
        }
    }
}
