export interface JournalEntryData {
    id: number | null;
    date: string;           // was title; now is date for date picker
    mood: string;
    triggers: string[];
    content: string;
    userId: number;
}