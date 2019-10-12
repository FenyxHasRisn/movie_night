using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace movie_collection.Models
{
    public class Award
    {
        public bool AwardWon { get; set; }
        public int AwardYear { get; set; }
        public List<string> Participants { get; set; }
        [BsonElement("Award")]
        public string AwardTitle { get; set; }
        public string AwardCompany { get; set; }
    }
}