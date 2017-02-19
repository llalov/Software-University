using System;

namespace P1_GalacticGPS
{
    public struct Location
    {
        private double latitude;
        private double longitude;
        //private Planet planet;

        public enum Planet
        {
            Mercury,
            Venus,
            Earth,
            Mars,
            Jupiter,
            Saturn,
            Uranus,
            Neptune
        };

        public double Latitude
        {
            get { return this.latitude; }
            set
            {
                if (value < -90 || value > 90)
                {
                    throw new ArgumentOutOfRangeException("latitude", "Number must be between -90 and 90");
                }
                this.latitude = value;
            }
        }

        public double Longitude
        {
            get { return this.longitude; }
            set
            {
                if (value < -180 || value > 180)
                {
                    throw new ArgumentOutOfRangeException("longitude", "Number must be between -180 and 180");
                }
                this.longitude = value;
            }
        }

        public Planet Planeta { get; set; }

        public Location(double latitude, double longitude, Planet planet) : this()
        {
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.Planeta = planet;
        }

        public override string ToString()
        {
            return string.Format
                ("{0}, {1} - {2}", this.Latitude, this.Longitude, this.Planeta);
        }
    }
}
