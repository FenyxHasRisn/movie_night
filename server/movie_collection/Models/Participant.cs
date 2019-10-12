namespace movie_collection.Models
{
    public class Participant
    {
        public int SortOrder { get; set; }
        public bool IsKey { get; set; }
        public string RoleType { get; set; }
        public bool IsOnScreen { get; set; }
        public string ParticipantType { get; set; }
        public string Name { get; set; }
        public int ParticipantId { get; set; }
    }
}