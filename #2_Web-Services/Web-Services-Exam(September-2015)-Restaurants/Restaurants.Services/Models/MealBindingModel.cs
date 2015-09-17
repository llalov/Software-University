using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Restauranteur.Models;
using Restaurants.Models;

namespace Restaurants.Services.Models
{
    public class MealBindingModel
    {
        [Required]
        public string Name { get; set; }

        public decimal Price { get; set; }

        public int RestaurantId { get; set; }

        public int TypeId { get; set; }

    }

    public class EditMealBindingModel
    {
        [Required]
        public string Name { get; set; }

        public decimal Price { get; set; }

        public int TypeId { get; set; }

    }

    
}