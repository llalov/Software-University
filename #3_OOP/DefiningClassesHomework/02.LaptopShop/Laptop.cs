using System;

namespace _02.LaptopShop
{
    public class Laptop
    {
        private readonly bool isFullDiscription;
        private string model;
        private decimal price;

        public Laptop(string model, decimal price)
            : this(model, price, null, null, null, null, null, null, null)
        {
            isFullDiscription = false;
        }

        public Laptop(string model, decimal price, string manufacturer, string processor, string ram, string graphicsCard, string hdd, string screen, Battery battery)
        {
            this.Model = model;
            this.Price = price;
            this.Manufacturer = manufacturer;
            this.Processor = processor;
            this.Ram = ram;
            this.GraphicsCard = graphicsCard;
            this.Hdd = hdd;
            this.Screen = screen;
            this.Battery = battery;
            isFullDiscription = true;
        }

        public string Model
        {
            get { return this.model; }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The model name is mandatory");
                }

                this.model = value;
            }
        }

        public string Manufacturer { get; set; }

        public string Processor { get; set; }

        public string Ram { get; set; }

        public string GraphicsCard { get; set; }

        public string Hdd { get; set; }

        public string Screen { get; set; }

        public Battery Battery { get; set; }

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
            if (isFullDiscription)
            {
                return "Sample laptop description (full):\n" +
                       $"model - {this.Model}\n" +
                       $"manufacturer - {this.Manufacturer}\n" +
                       $"processor - {this.Processor}\n" +
                       $"RAM - {this.Ram}\n" +
                       $"graphics card - {this.GraphicsCard}\n" +
                       $"HDD - {this.Hdd}\n" +
                       $"screen - {this.Screen}\n" +
                       $"battery - {this.Battery.Description}\n" +
                       $"battery life - {this.Battery.BatteryLife ?? 0.0} hours\n" +
                       $"price - {this.Price} lv.\n";
            }

            return "Sample laptop description (mandatory properties only):\n" +
                       $"model - {this.Model}\n" +
                       $"price - {this.Price} lv.\n";
        }
    }
}