using System;

namespace _04.SoftwareUniversityLearningSystem
{
    public class DropoutStudent : Student
    {
        public DropoutStudent(string firstName, string lastName, int age, string studentNumber, double averageGrade, string dropoutReason) : base(firstName, lastName, age, studentNumber, averageGrade)
        {
            this.DropoutReason = dropoutReason;
        }

        public string DropoutReason { get; set; }

        public void Reapply()
        {
            Console.WriteLine($"Student: {this.FirstName} {this.LastName}\n" +
                              $"Age: {this.Age}\n" +
                              $"Average grade: {this.AverageGrade}\n" +
                              $"Student number: {this.StudentNumber}\n" +
                              $"Dropout reason: {this.DropoutReason}");
        }
    }
}