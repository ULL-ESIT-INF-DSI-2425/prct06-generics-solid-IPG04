import { Song } from "./songs";

export interface IMusicItem {
  name: string;
  publishDate: Date;
  songs: Song[];
  addSong(song: Song): void;
}

abstract class MusicItem implements IMusicItem {
  constructor(
    public name: string,
    public publishDate: Date,
    public songs: Song[] = []
  ) {}

  abstract addSong(song: Song): void;
}

export class Disc extends MusicItem {
  addSong(song: Song): void {
    if (!song.single) {
      this.songs.push(song);
    } else {
      throw Error('No se puede insertar un single en un disco');
    }
  }
}

/**
 * Represents a single music item.
 * @extends MusicItem
 */
export class Single extends MusicItem {
  /**
   * Adds a song to the single if it is marked as a single.
   * @param song - The song to be added.
   * @throws Will throw an error if the song is not marked as a single.
   */
  addSong(song: Song): void {
    if (song.single) {
      this.songs.push(song);
    } else {
      throw new Error('No se puede insertar una canción que no sea single');
    }
  }
}


export type AllowedMusicItems = IMusicItem;