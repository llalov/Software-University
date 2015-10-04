namespace Restaurants.Data
{
    using Restaurants.Data.Repositories;
    using Restaurants.Models;

    public interface IRestaurantsData
    {
        IRepository<ApplicationUser> Users { get; }

        IRepository<Meal> Meals { get; }

        IRepository<Order> Orders { get; }

        IRepository<Rating> Ratings { get; }

        IRepository<Restaurant> Restaurants { get; }

        IRepository<Town> Towns { get; }

        int SaveChanges();
    }
}