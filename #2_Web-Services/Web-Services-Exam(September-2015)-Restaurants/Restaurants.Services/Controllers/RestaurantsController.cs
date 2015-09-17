using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.Identity;
using MoviesGallery.WebServices.Controllers;
using Restaurants.Data;
using Restaurants.Models;
using Restaurants.Services.Models;

namespace Restaurants.Services.Controllers
{
    public class RestaurantsController : BaseApiController
    {
        public RestaurantsController(IRestaurantsData data)
            : base(data)
        {
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("api/restaurants")]
        public IHttpActionResult GetRestaurantsByTown([FromUri]RestaurantByTownBindingModel model)
        {
            var restaurants = this.Data.Restaurants.All().Where(r => r.TownId == model.TownId)
                .OrderByDescending(r => r.Ratings.Average(rat => rat.Stars))
                .ThenBy(r => r.Name);

           
            var data = restaurants.Select(r => new
            {
                id = r.Id,
                name = r.Name,
                rating = r.Ratings.Average(rat => rat.Stars).ToString(),
                town = new {id = r.TownId, name = r.Town.Name}
                
            });

            return this.Ok(data);

        }

        [HttpPost]
        [Authorize]
        [Route("api/restaurants")]
        public IHttpActionResult CreateRestaurant(RestaurantBindingModel model)
        {
            var loggeduserId = this.User.Identity.GetUserId();
            if (loggeduserId == null)
            {
                return this.Unauthorized();
            }


            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }
            if (model.Name == null)
            {
                return this.BadRequest();
            }

            var restaurant = new Restaurant
            {
                Name = model.Name,
                TownId = model.TownId,
                OwnerId = loggeduserId
            };

            this.Data.Restaurants.Add(restaurant);
            this.Data.SaveChanges();

            return this.CreatedAtRoute("DefaultApi",
                 new { controller = "restaurants", id = restaurant.Id },
                new { id = restaurant.Id, name = restaurant.Name, rating = restaurant.Ratings , town = 
                Data.Restaurants
                .All()
                .Where( r => r.Id == restaurant.Id)
                .Select(r => new
                {
                    id = r.TownId,
                    name = r.Town.Name
                })
                .FirstOrDefault()   }
                );
        }

        [HttpPost]
        [Authorize]
        [Route("api/restaurants/{id}/rate")]
        public IHttpActionResult RateRestaurant(int id, RestaurantsRateBindingModel model)
        {

            var restaurant = this.Data.Restaurants.Find(id);

            if (restaurant == null)
            {
                return this.NotFound();
            }

            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var loggedUserId = User.Identity.GetUserId();

            
            if (restaurant.OwnerId == loggedUserId)
            {
                return this.BadRequest();
            }

           
            var usersRestRating = Data.Ratings
                .All()
                .FirstOrDefault(r => r.UserId == loggedUserId && r.RestaurantId == restaurant.Id);

            if (usersRestRating != null)
            {
                usersRestRating.Stars = model.Stars;
                Data.SaveChanges();
            }

            else
            {
                var rating = new Rating
                {
                    Stars = model.Stars,
                    UserId = loggedUserId,                   
                    RestaurantId = id
                };

                this.Data.Ratings.Add(rating);
                this.Data.SaveChanges();
            }

           
            return this.Ok();

        }

        [HttpGet]
        [Route("api/restaurants/{id}/meals")]
        public IHttpActionResult GetRestaurantMeals(int id)
        {
            var restaurant = Data.Restaurants.Find(id);
            if (restaurant == null)
            {
                return this.NotFound();
            }

            var meals = Data.Meals
                .All()
                .Where(m => m.RestaurantId == restaurant.Id)
                .OrderBy(m => m.Type.Order)
                .ThenBy(m => m.Name)
                .Select(m => new
                {
                    id = m.Id,
                    name = m.Name,
                    price = m.Price,
                    type = m.Type.Name
                });

            return this.Ok(meals);
        }

    }
}