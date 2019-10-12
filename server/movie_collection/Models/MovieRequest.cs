namespace movie_collection.Models
{
    public class MovieRequest
    {
        public string MovieTitle { get; set; }
        public int YearReleased { get; set; }
        public bool AwardWinner { get; set; }
    }
}