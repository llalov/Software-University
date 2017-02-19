using Restaurants.Data;

namespace MoviesGallery.WebServices.Controllers
{
    using System.Web.Http;
    using System.Runtime.InteropServices;
    using Restaurants.Data;

    public abstract class BaseApiController : ApiController
    {
        private IRestaurantsData data;

        public BaseApiController()
            : this(new MoviesGalleryData(new RestaurantsContext()))
        {

        }

        public BaseApiController(IRestaurantsData data)
        {
            this.Data = data;
        }

        protected IRestaurantsData Data
        {
            get;
            private set;
        }
    }
}