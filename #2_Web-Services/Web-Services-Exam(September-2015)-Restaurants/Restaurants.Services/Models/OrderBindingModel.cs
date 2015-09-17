using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Restaurants.Services.Models
{
    
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