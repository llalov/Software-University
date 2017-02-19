using System;

namespace _03.PC_Catalog
{
    public class Component
    {
        private string name;
        private decimal price;

        public Component(string name, decimal price)
            : this(name, null, price)
        {
        }

        public Component(string name, string details, decimal price)
        {
            this.Name = name;
            this.Details = details;
            this.Price = price;
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

        public string Details { get; set; }

        public decimal Price
        {
            get { return this.price; }
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("The price should be a positive number");
                }

                this.price = value;
            }
        }

        public override string ToString()
        {
            return $"\tname - {this.Details}; price - {this.Price} BGN";
        }
    }
}