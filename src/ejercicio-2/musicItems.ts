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

export class Single extends MusicItem {
  addSong(song: Song): void {
    if (song.single) {
      this.songs.push(song);
    } else {
      throw new Error('No se puede insertar una canción que no sea single');
    }
  }
}


export type AllowedMusicItems = IMusicItem;