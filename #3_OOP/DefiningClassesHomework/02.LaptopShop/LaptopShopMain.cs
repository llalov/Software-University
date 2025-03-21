﻿using System;

namespace _02.LaptopShop
{
    class LaptopShopMain
    {
        static void Main()
        {
            var laptop = new Laptop("HP 250 G2", 699.00m);

            var battery = new Battery("Li-Ion, 4-cells, 2550 mAh", 4.5);

            var fullLaptop = new Laptop("Lenovo Yoga 2 Pro", 2259.00m, "Lenovo", "Intel Core i5-4210U (2-core, 1.70 - 2.70 GHz, 3MB cache)", "8 GB", "Intel HD Graphics 4400", "128GB SSD", "13.3\"(33.78 cm) – 3200 x 1800(QHD +), IPS sensor display", battery);

            Console.WriteLine(fullLaptop);
            Console.WriteLine(laptop);
        }
    }
}
