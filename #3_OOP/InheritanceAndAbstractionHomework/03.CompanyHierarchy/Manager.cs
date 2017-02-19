using System;
using System.Collections.Generic;
using System.Threading;

namespace P3_CompanyHierarchy
{
    class Manager : Person
    {
        private List<Employee> employees = new List<Employee>();

        public List<Employee> Employees { get; set; }

        public Manager(string id, string firstName, string lastName) : base(id,firstName,lastName)
        {
            
        }
    }
}
