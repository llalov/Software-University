using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MoviesGallery.WebServices.Controllers;
using Restaurants.Models;
using Restaurants.Services.Models;

namespace Restaurants.Services.Controllers
{
    public class OrdersController : BaseApiController
    {
        [HttpGet]
        [Authorize]
        [Route("api/orders")]
        public IHttpActionResult ViewPendingOrders([FromUri] PendingOrderBindingModel model)
        {
            var loggedUserId = User.Identity.GetUserId();

            var orders = Data.Orders
                .All()
                .Where(o => o.UserId == loggedUserId && o.OrderStatus == OrderStatus.Pending)
                .OrderByDescending(o => o.CreatedOn)
                .Skip(model.StartPage * model.Limit)
                .Take(model.Limit)
                .Select(o => new
                {
                    id = o.Id,
                    meal = new {id = o.Meal.Id, name = o.Meal.Name, price = o.Meal.Price, type = o.Meal.Type.Name},
                    quantity = o.Quantity,
                    status = o.OrderStatus,
                    createdOn = o.CreatedOn
                });

            return this.Ok(orders);
        }

    }
}