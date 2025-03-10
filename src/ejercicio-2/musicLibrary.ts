import { Artist } from "./artist";
import { IMusicItem } from "./musicItems";
import { Song } from "./songs";

/**
 * Interface representing a search strategy for finding artists.
 */
interface SearchStrategy {
  search(artists: Artist[], query: string): void;
}

/**
 * Class representing a search strategy for artists.
 * Implements the SearchStrategy interface.
 */
export class ArtistSearch implements SearchStrategy {
  /**
   * Searches for an artist by name within a list of artists.
   * If the artist is found, their name and listener number are logged in a table format.
   * 
   * @param artists - The list of artists to search through.
   * @param artistName - The name of the artist to search for.
   */
  search(artists: Artist[], artistName: string): void {
    artists.forEach((artist: Artist) => {
      if (artist.name === artistName) {
        console.table({ artistName: artist.name, listenerNumber: artist.listenersNumber });
        return;
      }
    })
  }
}

/**
 * The `DiscSearch` class implements the `SearchStrategy` interface and provides
 * a method to search for a disc by its name within a list of artists.
 */
export class DiscSearch implements SearchStrategy {
  /**
   * Searches for a disc by name within a list of artists' discographies and logs the disc details if found.
   *
   * @param artists - An array of Artist objects to search through.
   * @param discName - The name of the disc to search for.
   * @returns void
   */
  search(artists: Artist[], discName: string): void {
    artists.forEach(artist => {
      artist.discography.getAllItems().forEach((d: IMusicItem) => {
        if (d.name === discName) {
          console.table({ discName: d.name, publishDate: d.publishDate });
          return;
        }
      })
    });
  }
}

/**
 * Class implementing the SearchStrategy interface to search for songs by name.
 */
export class SongSearch implements SearchStrategy {
  /**
   * Searches for a song by its name within a list of artists.
   * If a song with the specified name is found, its details are logged to the console in a table format.
   * 
   * @param artists - An array of Artist objects to search within.
   * @param songName - The name of the song to search for.
   */
  search(artists: Artist[], songName: string): void {
    artists.forEach(artist => {
      artist.discography.getAllItems().forEach(disc => {
        disc.songs.forEach(s => {
          if (s.name === songName) {
            console.table({
              songName: s.name,
              durationSeconds: s.durationSeconds,
              genders: s.genders,
              single: s.single,
              reproductionNumber: s.reproductionNumber
            });
          }
        })
      });
    });
  }
}

/**
 * Class representing a music library.
 */
export class MusicLibrary {
  private _artists: Artist[];

  /**
   * Creates an instance of the MusicLibrary class.
   * 
   * @param artists - The list of artists in the music library.
   */
  constructor(artists: Artist[]) {
    this._artists = artists;
  }

  /**
   * Prints the music library to the console.
   */
  printMusicLibrary(): void {
    const table = this._artists.forEach(artist => 
      artist.discography.getAllItems().forEach(disc =>
        disc.songs.map(song => ({
          artistName: artist.name,
          listenersNumber: artist.listenersNumber,
          discName: disc.name,
          publishDate: disc.publishDate,
          songName: song.name,
          durationSeconds: song.durationSeconds,
          genders: song.genders,
          single: song.single,
          reproductionNumber: song.reproductionNumber
        }))
      )
    );
    console.table(table);
  }

  /**
   * Searches for an artist, disc, or song by name using the specified search strategy.
   * 
   * @param strategy - The search strategy to use.
   * @param query - The name of the artist, disc, or song to search for.
  */
  executeSearch(strategy: SearchStrategy, query: string): void {
    strategy.search(this._artists, query);
  }

  /**
   * Returns the total number of songs in the music library.
   * 
   * @param discName - The name of the disc to get the songs count from.
   * @returns The total number of songs in the music library.
   */
  getSongsCountByDisc(discName: string): number {
    let res: number = 0;
    this._artists.forEach((artist: Artist) => {
      artist.discography.getAllItems().forEach((dis: IMusicItem) => {
        if (dis.name === discName) {
          res = dis.songs.length;
          return;
        }
      })
    })
    return res;
  }

  /**
   * Returns the total duration of a disc in the music library.
   * 
   * @param discName - The name of the disc to get the duration from.
   * @returns The total duration of the disc in seconds.
   */
  getDiscDuration(discName: string): number {
    let res: number = 0;
    this._artists.forEach((artist: Artist) => {
      (artist.discography.getAllItems().filter((dis: IMusicItem) =>  dis.name === discName)).forEach((d: IMusicItem) => {
        d.songs.forEach((song: Song) => {
          res += song.durationSeconds;
        })
      })
    })
    return res;
  }

  /**
   * Returns the total number of reproductions of a disc in the music library.
   * 
   * @param discName - The name of the disc to get the reproductions from.
   * @returns The total number of reproductions of the disc.
   */
  getDiscReproductions(discName: string): number {
    let res: number = 0;
    this._artists.forEach((artist: Artist) => {
      (artist.discography.getAllItems().filter((dis: IMusicItem) =>  dis.name === discName)).forEach((d: IMusicItem) => {
        d.songs.forEach((song: Song) => {
          res += song.reproductionNumber;
        })
      })
    })
    return res;
  }
}
