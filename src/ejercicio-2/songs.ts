/**
 * Represents a song with its details.
 */
export interface Song {
  name: string;
  durationSeconds: number;
  genders: string;
  single: boolean
  reproductionNumber: number
}