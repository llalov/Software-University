namespace _04.SoftwareUniversityLearningSystem
{
    public class Student : Person
    {
        public Student(string firstName, string lastName, int age, string studentNumber, double averageGrade) : base(firstName, lastName, age)
        {
            this.StudentNumber = studentNumber;
            this.AverageGrade = averageGrade;
        }

        public string StudentNumber { get; set; }

        public double AverageGrade { get; set; }
    }
}