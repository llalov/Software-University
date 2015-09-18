namespace Restaurants.Services.Models
{
    using System.ComponentModel.DataAnnotations;

    public class OrderBindingModel
    {
        public int Id { get; set; }

        public int Quantity { get; set; }
    }

    public class PendingOrderBindingModel
    {
        public int StartPage { get; set; }

        [Range(2, 10)]
        public int Limit { get; set; }

        public int? MealId { get; set; }
    }
}