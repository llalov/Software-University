namespace _02.LaptopShop
{
    public class Battery
    {
        public Battery(string description, double? batteryLife)
        {
            this.Description = description;
            this.BatteryLife = batteryLife;
        }

        public string Description { get; set; }

        public double? BatteryLife { get; set; }
    }
}