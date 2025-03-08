import { Discography } from "./discography";
import { AllowedMusicItems } from "./musicItems";

/**
 * Represents an artist with a name, number of listeners, and a discography.
 */
export interface Artist {
  name: string;
  listenersNumber: number;
  discography: Discography<AllowedMusicItems>;
}