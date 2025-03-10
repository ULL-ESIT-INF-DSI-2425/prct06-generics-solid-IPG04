import { Discography } from "./discography";
import { AllowedMusicItems } from "./musicItems";

/**
 * Represents an artist with a name, number of listeners, and a discography.
 * 
 * @template AllowedMusicItems - The type of music items allowed in the discography.
 */
export interface Artist {
  /**
   * The name of the artist.
   */
  name: string;

  /**
   * The number of listeners the artist has.
   */
  listenersNumber: number;

  /**
   * The discography of the artist, containing allowed music items.
   */
  discography: Discography<AllowedMusicItems>;
}