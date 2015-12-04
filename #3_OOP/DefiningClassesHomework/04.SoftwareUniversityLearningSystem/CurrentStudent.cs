namespace _04.SoftwareUniversityLearningSystem
{
    public class CurrentStudent : Student
    {
        public CurrentStudent(string firstName, string lastName, int age, string studentNumber, double averageGrade, string currentCourse) : base(firstName, lastName, age, studentNumber, averageGrade)
        {
            this.CurrentCourse = currentCourse;
        }

        public string CurrentCourse { get; set; }

        public override string ToString()
        {
            return $"Name: {this.FirstName} {this.LastName}\n" +
                   $"Age: {this.Age}\n" +
                   $"Student number: {this.StudentNumber}\n" +
                   $"Average grade: {this.AverageGrade}\n" +
                   $"Course: {this.CurrentCourse}";
        }
    }
}