using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.PC_Catalog
{
    public class Computer
    {
        private string name;
        
        public Computer(string name)
        {
            this.Name = name;
            this.Components = new List<Component>();
        }

        public string Name
        {
            get { return this.name; }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The model name is mandatory");
                }

                this.name = value;
            }
        }
        
        public decimal Price
        {
            get { return this.Components.Sum(x => x.Price); }
        }

        public ICollection<Component> Components { get; set; }

        public override string ToString()
        {
            return $"Name: {this.Name}\n" +
                   "Components:\n" +
                   string.Join("\n", this.Components) + "\n" + 
                   $"Total computer price: {this.Price} BGN\n";
        }
    }
}