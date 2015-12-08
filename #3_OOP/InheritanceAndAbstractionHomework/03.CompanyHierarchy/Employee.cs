using System;
using System.Collections.Generic;

namespace P3_CompanyHierarchy
{
    abstract class Employee : Person
    {
        private decimal salary;
        private string department;

        private readonly List<string> validDepartments = new List<string>()
        {
            "Marketing",
            "Sales",
            "Production",
            "Accounting"
        };

        public decimal Salary
        {
            get { return this.salary; }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("value", "Salary must be positive number");
                }
                this.Salary = value;
            }
        }

        public string Department
        {
            get { return this.department; }
            set
            {
                if (!validDepartments.Contains(value) || string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Invalid department!");
                }
                this.Department = department;
            }
        }

        protected Employee
            (string id, string firstName, string lastName, decimal salary, string department)
            : base(id, firstName, lastName)
        {
            if (salary < 0 || string.IsNullOrEmpty(department) || !validDepartments.Contains(department))
            {
                throw new ArgumentOutOfRangeException("parameter", 
                    "Invalid data in Employee constructor!");
            }
            this.salary = salary;
            this.department = department;
        }
    }
}
