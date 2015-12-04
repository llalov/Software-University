namespace _04.SoftwareUniversityLearningSystem
{
    public class OnsiteStudent : CurrentStudent
    {
        public OnsiteStudent(string firstName, string lastName, int age, string studentNumber, double averageGrade, string currentCourse) : base(firstName, lastName, age, studentNumber, averageGrade, currentCourse)
        {
        }

        public int VisitsCount { get; set; }
    }
}