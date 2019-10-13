interface IParticipant {
    sortOrder?: number;
    isKey?: boolean;
    roleType?: string;
    isOnScreen?: boolean;
    participantType?: string;
    name?: string;
    participantId?: number
}

export default IParticipant;