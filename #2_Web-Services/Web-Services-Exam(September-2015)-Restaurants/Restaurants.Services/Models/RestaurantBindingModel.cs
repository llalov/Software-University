using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Restaurants.Services.Models
{
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