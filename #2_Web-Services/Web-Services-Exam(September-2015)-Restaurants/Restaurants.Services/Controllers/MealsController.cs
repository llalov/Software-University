namespace Restaurants.Services.Controllers
{
    using System;
    using System.Linq;
    using System.Web.Http;
    using Microsoft.AspNet.Identity;
    using MoviesGallery.WebServices.Controllers;
    using Restaurants.Models;
    using Restaurants.Services.Models;

    public class MealsController : BaseApiController
    {
        [HttpPost]
        [Authorize]
        [Route("api/meals")]
        public IHttpActionResult CreateMeal(MealBindingModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }
            var loggedUserId = User.Identity.GetUserId();
            var restaurant = Data.Restaurants.Find(model.RestaurantId);

            if (restaurant.OwnerId != loggedUserId)
            {
                return this.Unauthorized();
            }
            var meal = new Meal
            {
                Name = model.Name,
                RestaurantId = model.RestaurantId,
                TypeId = model.TypeId,
                Price = model.Price,

            };

            this.Data.Meals.Add(meal);
            this.Data.SaveChanges();

            return this.CreatedAtRoute("DefaultApi",
                new { controller = "meals", id = meal.Id },
                new
                {
                    id = meal.Id,
                    name = meal.Name,
                    price = meal.Price,
                    type = Data.Meals
                        .All()
                        .Where(m => m.TypeId == model.TypeId)
                        .Select(m => m.Type.Name)
                        .FirstOrDefault()
                });
        }

        [HttpPut]
        [Route("api/meals/{id}")]
        public IHttpActionResult EditMeal(int id, EditMealBindingModel model)
        {
            var meal = this.Data.Meals.Find(id);

            if (meal == null)
            {
                return this.NotFound();
            }

            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var loggedUserId = User.Identity.GetUserId();

            var restaurant = Data.Restaurants.Find(meal.RestaurantId);

            if (restaurant.OwnerId != loggedUserId)
            {
                return this.Unauthorized();
            }

            meal.Name = model.Name;
            meal.Price = model.Price;
            meal.TypeId = model.TypeId;

            this.Data.SaveChanges();

            return this.CreatedAtRoute("DefaultApi",
                new { controller = "meals", id = meal.Id },
                new
                {
                    id = meal.Id,
                    name = meal.Name,
                    price = meal.Price,
                    type = Data.Meals
                        .All()
                        .Where(m => m.TypeId == model.TypeId)
                        .Select(m => m.Type.Name)
                        .FirstOrDefault()
                });

        }

        [HttpDelete]
        [Authorize]
        [Route("api/meals/{id}")]
        public IHttpActionResult DeleteMeal(int id)
        {
            var meal = this.Data.Meals.Find(id);

            if (meal == null)
            {
                return this.NotFound();
            }

            var loggedUserId = User.Identity.GetUserId();

            var restaurant = Data.Restaurants.Find(meal.RestaurantId);

            if (restaurant.OwnerId != loggedUserId)
            {
                return this.Unauthorized();
            }

            Data.Meals.Delete(meal);
            Data.SaveChanges();

            return this.Ok(new
            {
                message = string.Format("Meal #{0} deleted.", id)
            });
        }

        [HttpPost]
        [Authorize]
        [Route("api/meals/{id}/order")]
        public IHttpActionResult CreateOrder(int id, OrderBindingModel model)
        {
            var meal = Data.Meals.Find(id);

            if (meal == null)
            {
                return this.NotFound();
            }

            if (model == null)
            {
                return this.BadRequest();
            }

            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var loggedUserId = User.Identity.GetUserId();

            var order = new Order()
            {
                MealId = meal.Id,
                Quantity = model.Quantity,
                UserId = loggedUserId,
                OrderStatus = OrderStatus.Pending,
                CreatedOn = DateTime.Now
            };

            Data.Orders.Add(order);
            Data.SaveChanges();

            return this.Ok();

        }

    }
}