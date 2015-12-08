using System;

namespace P1_HumanStudentWorker
{
    class Worker : Human
    {
        private decimal weekSalary;
        private decimal workHoursPerDay;
        private const int WorkingDays = 5;

        public decimal WeekSalary
        {
            get { return this.weekSalary; }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException
                        ("value", "Week salary must be 0 or more");
                }
                this.weekSalary = value;
            }
        }

        public decimal WorkHoursPerDay
        {
            get { return this.workHoursPerDay; }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException
                        ("value", "Work hours per day must be 0 or more");
                }
                this.workHoursPerDay = value;
            }
        }

        public Worker(string firstName, string lastName, decimal weekSalary, decimal workHoursPerDay) 
            : base(firstName,lastName)
        {
            if (weekSalary < 0 || workHoursPerDay < 0)
            {
                throw new ArgumentOutOfRangeException
                    ("Parameter", "Work hours and week salary must be 0 or more");
            }
            this.weekSalary = weekSalary;
            this.workHoursPerDay = workHoursPerDay;
        }

        public decimal MoneyPerHour()
        {
            return (weekSalary / WorkingDays) / this.workHoursPerDay;
        }

        public override string ToString()
        {
            return base.ToString() + string.Format
                ("\nWeek salary: {0:C2}\nWork hours per day: {1}\nMoney per hour: {2:C2}",
                this.weekSalary, this.workHoursPerDay, this.MoneyPerHour());
        }
    }
}
