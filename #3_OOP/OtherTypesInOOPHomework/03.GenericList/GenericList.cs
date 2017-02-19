using System;
using System.Linq;

namespace P3_GenericList
{
    [Version(0, 1)]
    class GenericList<T>
    {
        private const int DefaultCapacity = 16;
        private T[] elements;
        private int currentIndex;

        //returns the current capacity of the list
        private int Capacity
        {
            get { return elements.Length; }
        }

        //returns number of elements in the list
        public int Count
        {
            get { return elements.Take(currentIndex).Count(); }
        }

        //default constructor
        public GenericList(int capacity = DefaultCapacity)
        {
            elements = new T[capacity];
            currentIndex = 0;
        }

        //using indexers
        public T this[int index]
        {
            get
            {
                if (index >= currentIndex)
                {
                    throw new ArgumentOutOfRangeException("index", "The index is out of range!");
                }
                return elements[index];
            }
            set { elements[index] = value; }
        }

        //private method which doubles the capacity of the list
        private void AutoGrow()
        {
            T[] newElements = new T[elements.Length*2];
            for (int i = 0; i < currentIndex; i++)
            {
                newElements[i] = elements[i];
            }
            elements = newElements;
        }

        //adds an element at the end of the list
        public void Add(T element)
        {
            if (currentIndex == elements.Length - 1)
            {
                AutoGrow();
            }
            elements[currentIndex] = element;
            currentIndex++;
        }

        //sets all the elements in the list at their default value, capacity is kept, current index is back at 0
        public void Clear()
        {
            elements = new T[this.Capacity];
            currentIndex = 0;
        }

        //checks if the list contains a given element
        public bool Contains(T element)
        {
            return elements.Take(currentIndex).Contains(element);
        }

        //returns the index of the element, if it does not exist in the list the method returns -1
        public int IndexOf(T element)
        {
            for (int i = 0; i < currentIndex; i++)
            {
                if (elements[i].Equals(element))
                {
                    return i;
                }
            }
            return -1;
        }

        //inserts an element at a given position. if the position is outside the bounds of the current capacity - exception is thrown
        public void Insert(int position, T element)
        {
            
        }

        public void RemoveAt(int index)
        {
            if (index < 0 || elements.Length <= index)
            {
                throw new IndexOutOfRangeException("Index is outside the boundaries of the GenericList.");
            }

            T[] newArray = new T[elements.Length];
            Array.Copy(elements, 0, newArray, 0, index);
            Array.Copy(elements, index + 1, newArray, index, this.Count - index - 1);

            elements = newArray;
            currentIndex--;
        }


        public static T Min<T>(GenericList<T> list)
            where T : IComparable
        {
            T min = default(T);
            for (int index = 0; index < list.Count; index++)
            {
                if (min.CompareTo(default(T)) == 0 || min.CompareTo(list[index]) == 1)
                {
                    min = list[index];
                }
            }

            return min;
        }

        public static T Max<T>(GenericList<T> list)
            where T : IComparable
        {
            T max = default(T);
            for (int index = 0; index < list.Count; index++)
            {
                if (max.CompareTo(default(T)) == 0 || max.CompareTo(list[index]) == -1)
                {
                    max = list[index];
                }
            }

            return max;
        }


        //if currentIndex is at 0 - the list is printed as "Empty", else - all elements from index 0 to currentIndex are printed
        public override string ToString()
        {
            string result = "[ " + 
                (currentIndex == 0 ? "Empty" : string.Join(", ", elements.Take(currentIndex))) 
                + " ]";
            return result;
        }
    }
}
