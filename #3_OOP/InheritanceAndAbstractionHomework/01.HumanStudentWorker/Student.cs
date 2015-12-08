using System;
using System.Text.RegularExpressions;

namespace P1_HumanStudentWorker
{
    class Student : Human, IComparable<Student>
    {
        private string facultyNumber;
        private const string facultyNumberValidator = "[a-zA-Z0-9]";

        public string FacultyNumber
        {
            get { return this.facultyNumber; }
            set
            {
                if (value.Length < 5 || value.Length > 10)
                {
                    throw new ArgumentOutOfRangeException
                        ("value", "Faculty number must be between 5 and 10 characters");
                }
                this.facultyNumber = value;
            }
        }

        public Student(string firstName, string lastName, string facultyNumber) : base(firstName,lastName)
        {
            if (facultyNumber.Length < 5 || facultyNumber.Length > 10)
            {
                throw new ArgumentOutOfRangeException
                    ("Parameter", "Faculty number must be between 5 and 10 characters");
            }
            if (!Regex.IsMatch(facultyNumber, facultyNumberValidator))
            {
                throw new ArgumentException("Invalid faculty number!");
            }
            this.facultyNumber = facultyNumber;
        }

        public int CompareTo(Student other)
        {
            return this.facultyNumber.CompareTo(other.facultyNumber);
        }

        public override string ToString()
        {
            return base.ToString() + string.Format("\nFaculty number: {0}", this.FacultyNumber);
        }
    }
}
