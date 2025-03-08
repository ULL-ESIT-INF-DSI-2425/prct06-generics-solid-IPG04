import { describe, it, expect, vi } from 'vitest';
import { MusicLibrary, ArtistSearch, DiscSearch, SongSearch } from '../src/ejercicio-2/musicLibrary';
import { Artist } from '../src/ejercicio-2/artist';
import { Disc, Single } from '../src/ejercicio-2/musicItems';
import { Song } from '../src/ejercicio-2/songs';
import { Discography } from '../src/ejercicio-2/discography';

describe ('MusicItems', () => {

  const song1: Song = { name: 'Song One', durationSeconds: 180, genders: 'Rock', single: false, reproductionNumber: 1000 };
  const song2: Song = { name: 'Song Two', durationSeconds: 240, genders: 'Pop', single: true, reproductionNumber: 1500 };

  const disc1: Disc = new Disc('Disc One', new Date('2020-01-01'));
  const single1: Single = new Single('Single One', new Date('2021-06-01'));

  it('A disc should add songs that arent singles', () => {
    disc1.addSong(song1)
    expect(disc1.songs.length).toEqual(1);
  })

  it('A disc shouldnt add songs that arent singles', () => {
    expect(() => disc1.addSong(song2)).toThrowError('No se puede insertar un single en un disco')
  })

  it('A single should add songs that are singles', () => {
    single1.addSong(song2)
    expect(single1.songs.length).toEqual(1);
  })

  it('A single shouldnt add songs that are singles', () => {
    expect(() => single1.addSong(song1)).toThrowError('No se puede insertar una canción que no sea single');
  })
});

describe ('Discography', () => {

  const song1: Song = { name: 'Song One', durationSeconds: 180, genders: 'Rock', single: false, reproductionNumber: 1000 };
  const song2: Song = { name: 'Song Two', durationSeconds: 240, genders: 'Pop', single: true, reproductionNumber: 1500 };

  const disc1: Disc = new Disc('Disc One', new Date('2020-01-01'));
  const single1: Single = new Single('Single One', new Date('2021-06-01'));

  disc1.addSong(song1);
  single1.addSong(song2);

  let discography1: Discography<Disc | Single> = new Discography<Disc>([]);

  it('A Discography should add a disc', () => {
    discography1.addItem(disc1);
    expect(discography1.getAllItems()).contain(disc1);
  });

  it('A Discography should add a single', () => {
    discography1.addItem(single1);
    expect(discography1.getAllItems()).contain(single1);
  });

  it('A Discography should add a disc and a single', () => {
    expect(discography1.getAllItems()).contain(single1);
    expect(discography1.getAllItems()).contain(disc1);
  });
});


describe('MusicLibrary', () => {
  const song1: Song = { name: 'Song One', durationSeconds: 180, genders: 'Rock', single: false, reproductionNumber: 1000 };
  const song2: Song = { name: 'Song Two', durationSeconds: 240, genders: 'Pop', single: true, reproductionNumber: 1500 };
  const song3: Song = { name: 'Song Three', durationSeconds: 190, genders: 'Funk', single: false, reproductionNumber: 2000 };
  const song4: Song = { name: 'Song Four', durationSeconds: 230, genders: 'Classic', single: true, reproductionNumber: 3000 };
  const song5: Song = { name: 'Song Five', durationSeconds: 130, genders: 'Pop', single: true, reproductionNumber: 4000 };

  const disc1: Disc = new Disc('Disc One', new Date('2020-01-01'), [song1, song3]);
  const single1: Single = new Single('Single One', new Date('2021-06-01'), [song2]);
  const single2: Single = new Single('Single Two', new Date('2021-06-01'), [song4, song5]);

  const discography1: Discography<Disc | Single> = new Discography<Disc>([disc1, single1]);
  const discography2: Discography<Disc | Single> = new Discography<Disc>([single2]);

  const artist1: Artist = {name: 'Artist One', listenersNumber: 20000, discography: discography1};
  const artist2: Artist = {name: 'Artist Two', listenersNumber: 50000, discography: discography2};

  const musicLibrary: MusicLibrary = new MusicLibrary([artist1, artist2]);

  it ('A music library should search an artist', () => {
    const artistSearch: ArtistSearch = new ArtistSearch();
    const consoleSpy = vi.spyOn(console, 'table');
    musicLibrary.executeSearch(artistSearch, 'Artist Two');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it ('A music library should search a disc', () => {
    const discSearch: DiscSearch = new DiscSearch();
    const consoleSpy = vi.spyOn(console, 'table');
    musicLibrary.executeSearch(discSearch, 'Single One');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it ('A music library should search a song', () => {
    const songSearch: SongSearch = new SongSearch();
    const consoleSpy = vi.spyOn(console, 'table');
    musicLibrary.executeSearch(songSearch, 'Song Four');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it ('A music library should have a method for print it', () => {
    const consoleSpy = vi.spyOn(console, 'table');
    musicLibrary.printMusicLibrary();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it ('A music library should have a method for get the number of song from a disc', () => {
    const result: number = musicLibrary.getSongsCountByDisc('Disc One');
    expect(result).toEqual(2);
  });

  it ('A music library should have a method for get the duration of a disc', () => {
    const result: number = musicLibrary.getDiscDuration('Single Two');
    expect(result).toEqual(360)
  });

  it ('A music library should have a method for get the reproductions of a disc', () => {
    const result: number = musicLibrary.getDiscReproductions('Single Two');
    expect(result).toEqual(7000)
  });
})