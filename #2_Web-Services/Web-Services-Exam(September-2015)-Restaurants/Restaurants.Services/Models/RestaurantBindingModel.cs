namespace Restaurants.Services.Models
{
    using System.ComponentModel.DataAnnotations;

    public class RestaurantBindingModel
    {
        public string Name { get; set; }

        public int TownId { get; set; }

    }

    public class RestaurantByTownBindingModel
    {
        public int TownId { get; set; }

    }

    public class RestaurantsRateBindingModel
    {
        [Range(0, 10)]
        public int Stars { get; set; }
    }
}