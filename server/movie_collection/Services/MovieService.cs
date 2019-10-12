using System.Collections.Generic;
using MongoDB.Driver;
using MongoDB.Bson;
using movie_collection.Models;

namespace movie_collection.Services
{
    public class MovieService
    {
        private readonly IMongoCollection<Title> _titles;

        public MovieService(IMovieDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _titles = database.GetCollection<Title>(settings.MovieCollectionName);
        }

        public List<Title> Get() =>
            _titles.Find(f => true).ToList();

        public Title Get(int titleId) =>
            _titles.Find<Title>(t => t.TitleId == titleId).FirstOrDefault();

        public List<Title> Get(string titleName)
        {
            var filter = Builders<Title>.Filter.Regex("TitleName", new BsonRegularExpression(titleName, "i"));
            return _titles.Find(filter).ToList();
        }
    }
}