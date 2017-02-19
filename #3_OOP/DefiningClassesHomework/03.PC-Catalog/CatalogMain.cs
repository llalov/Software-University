using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.PC_Catalog
{
    class CatalogMain
    {
        static void Main()
        {
            var processor = new Component("Intel Core i5-4210U (2-core, 1.70 - 2.70 GHz, 3MB cache)", "Intel Core i5-4210U (2-core, 1.70 - 2.70 GHz, 3MB cache)", 225.00m);

            var processorI7 = new Component("Intel Core i7-3510U (4-core, 1.70 - 1.90 GHz, 3MB cache)", "Intel Core i7-3510U (4-core, 1.70 - 1.90 GHz, 3MB cache)", 225.00m);

            var ram = new Component("Kingston 8GB DDR3 RAM", "Kingston 8GB DDR3 RAM", 225.00m);
            var ram4Gb = new Component("Corsair 4GB DDR3 RAM", "Corsair 4GB DDR3 RAM", 225.00m);

            var graphicsCard = new Component("Nvidia 740m", "Nvidia 740m", 325.00m);
            var graphicsCardIntel = new Component("Intel HD Graphics 4400", "Intel HD Graphics 4400", 185.00m);

            var hdd = new Component("Samsung EVO 850 128GB SSD", "Samsung EVO 850 128GB SSD", 169.00m);
            var hddToshiba = new Component("Toshiba 5400rpm 1TB", "Toshiba 5400rpm 1TB", 139.00m);

            var battery = new Component("Chiconi Battery Li-Ion, 4-cells, 2550 mAh", "Chiconi Battery Li-Ion, 4-cells, 2550 mAh", 59.00m);

            var batteryExprensive = new Component("Chiconi Battery Li-Ion, 6-cells, 4150 mAh", "Chiconi Battery Li-Ion, 6-cells, 4150 mAh", 119.00m);

            var components = new []
            {
                processor,
                processorI7,
                ram,
                ram4Gb,
                graphicsCard,
                graphicsCardIntel,
                hdd,
                hddToshiba,
                battery,
                batteryExprensive
            };

            var lenovo = new Computer("Lenovo M5400");
            var acer = new Computer("Acer Aspire 5541G");

            for (int i = 0; i < components.Length; i++)
            {
                if (i%2 == 0)
                {
                    lenovo.Components.Add(components[i]);
                }
                else
                {
                    acer.Components.Add(components[i]);
                }
            }

            var laptops = new List<Computer>()
            {
                lenovo,
                acer
            };

            var sortedLaptopsByPrice = laptops
                .OrderBy(l => l.Price)
                .ToArray();

            foreach (var computer in sortedLaptopsByPrice)
            {
                Console.WriteLine(computer);
            }
        }
    }
}
