import { Artist } from "./artist";
import { IMusicItem } from "./musicItems";
import { Song } from "./songs";

interface SearchStrategy {
  search(artists: Artist[], query: string): void;
}

class ArtistSearch implements SearchStrategy {
  search(artists: Artist[], artistName: string): void {
    artists.forEach((artist: Artist) => {
      if (artist.name === artistName) {
        console.table({ artistName: artist.name, listenerNumber: artist.listenersNumber });
        return;
      }
    })
  }
}

class DiscSearch implements SearchStrategy {
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

class SongSearch implements SearchStrategy {
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

class MusicLibrary {
  private _artists: Artist[];

  constructor(artists: Artist[]) {
    this._artists = artists;
  }

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

  executeSearch(strategy: SearchStrategy, query: string): void {
    strategy.search(this._artists, query);
  }

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

export { MusicLibrary, ArtistSearch, DiscSearch, SongSearch };
