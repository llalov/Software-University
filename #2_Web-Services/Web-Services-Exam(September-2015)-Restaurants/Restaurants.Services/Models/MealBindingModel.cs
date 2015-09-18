namespace Restaurants.Services.Models
{
    using System.ComponentModel.DataAnnotations;

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