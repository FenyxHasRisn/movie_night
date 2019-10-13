using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using movie_collection.Models;
using movie_collection.Services;

namespace movie_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly MovieService _movieService;

        public MoviesController(MovieService movieService)
        {
            _movieService = movieService;
        }

        // [HttpGet]
        // public ActionResult<List<Title>> Get() =>
        //     _movieService.Get();

        // [HttpGet("{id}")]
        // public ActionResult<Title> Get(int id)
        // {
        //     var movie = _movieService.Get(id);

        //     if (movie == null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(movie);
        // }

        [HttpPost]
        public ActionResult<List<Title>> Post([FromBody] string title)
        {
            var movies = _movieService.Get(title);

            if (movies == null)
            {
                return NotFound();
            }
            return Ok(movies);
        }
    }
}