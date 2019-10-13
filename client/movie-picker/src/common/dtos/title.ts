import IAward from "./award";
import IOtherName from "./other-name";
import IParticipant from "./participant";
import IStoryline from "./storyline";

interface ITitle {
    titleId?: number;
    titleName?: string;
    titleSortableName?: string;
    releaseYear?: number;
    keyGenres?: string[];
    keywords?: string[];
    genres?: string[];
    awards?: IAward[];
    otherNames?: IOtherName[];
    participants?: IParticipant[];
    storylines?: IStoryline[];
}

export default ITitle;