import { describe, it, expect } from 'vitest';
import { Movies, Series, Documentary } from '../src/ejercicio-1/streamingContent';
import { SeriesCollection } from '../src/ejercicio-1/seriesCollection'
import { DocumentaryCollection } from '../src/ejercicio-1/documentaryCollection'
import { MoviesCollection } from '../src/ejercicio-1/movieCollection'


describe('MovieCollection', () => {

  const movie1: Movies = {
    title: 'Gladiator',
    year: 2000,
    director: 'Ridley Scott',
    duration: 155
  }
  const movie2: Movies = {
    title: 'Interestellar',
    year: 2014,
    director: 'Christopher Nolan',
    duration: 169
  }
  const movie3: Movies = {
    title: 'Dunkerke',
    year: 2017,
    director: 'Christopher Nolan',
    duration: 106
  }
  let movieCollection: MoviesCollection = new MoviesCollection([]);

  it('Add a some films to the colection', () => {
    movieCollection.addItem(movie1);
    movieCollection.addItem(movie2);
    movieCollection.addItem(movie3);
    expect(movieCollection.getAllItems()).toEqual([movie1, movie2, movie3]);
  });

  it('Delete some films to the colection', () => {
    movieCollection.removeItem(movie1);
    movieCollection.removeItem(movie2)
    expect(movieCollection.getAllItems()).toEqual([movie3]);
    movieCollection.addItem(movie1);
    movieCollection.addItem(movie2);
  })

  it('Search films by name', () => {
    expect(movieCollection.searchByName('Interestellar')).toEqual([movie2])
  });

  it('Search films by year', () => {
    expect(movieCollection.searchByYear(2000)).toEqual([movie1])
  });

  it('Search films by director', () => {
    expect(movieCollection.searchByDirector('Christopher Nolan')).toContain(movie2);
    expect(movieCollection.searchByDirector('Christopher Nolan')).toContain(movie3);
  });

  it('Search films by duration', () => {
    expect(movieCollection.searchByDuration(106)).toEqual([movie3])
  });

});

describe('SeriesCollection', () => {

  const serie1: Series = {
    title: 'Juego de Tronos',
    year: 2011,
    seasson: 1,
    chapters: 10
  }
  const serie2: Series = {
    title: 'Breaking Bad',
    year: 2008,
    seasson: 1,
    chapters: 7
  }
  const serie3: Series = {
    title: 'Stranger Things',
    year: 2017,
    seasson: 2,
    chapters: 9
  }
  let seriesCollection: SeriesCollection = new SeriesCollection([]);

  it('Add a some series to the colection', () => {
    seriesCollection.addItem(serie1);
    seriesCollection.addItem(serie2);
    seriesCollection.addItem(serie3);
    expect(seriesCollection.getAllItems()).toEqual([serie1, serie2, serie3]);
  });

  it('Delete some series to the colection', () => {
    seriesCollection.removeItem(serie1);
    seriesCollection.removeItem(serie2)
    expect(seriesCollection.getAllItems()).toEqual([serie3]);
    seriesCollection.addItem(serie1);
    seriesCollection.addItem(serie2);
  })

  it('Search series by name', () => {
    expect(seriesCollection.searchByName('Breaking Bad')).toEqual([serie2])
  });

  it('Search series by year', () => {
    expect(seriesCollection.searchByYear(2008)).toEqual([serie2])
  });

  it('Search series by seasson', () => {
    expect(seriesCollection.searchBySeasson(1)).toContain(serie1);
    expect(seriesCollection.searchBySeasson(1)).toContain(serie2);
  });

  it('Search series by chapter', () => {
    expect(seriesCollection.searchByChapters(9)).toEqual([serie3])
  });

});

describe('DocumentaryCollection', () => {

  const doc1: Documentary = {
    title: 'Shoah',
    year: 1985,
    topic: 'WW2',
    duration: 566
  }
  const doc2: Documentary = {
    title: 'Cosmos',
    year: 2014,
    topic: 'Space',
    duration: 520
  }
  const doc3: Documentary = {
    title: 'Cosmos',
    year: 1980,
    topic: 'Space',
    duration: 490
  }
  let documentaryCollection: DocumentaryCollection = new DocumentaryCollection([]);

  it('Add a some Documentary to the colection', () => {
    documentaryCollection.addItem(doc1);
    documentaryCollection.addItem(doc2);
    documentaryCollection.addItem(doc3);
    expect(documentaryCollection.getAllItems()).toEqual([doc1, doc2, doc3]);
  });

  it('Delete some Documentary to the colection', () => {
    documentaryCollection.removeItem(doc1);
    documentaryCollection.removeItem(doc2)
    expect(documentaryCollection.getAllItems()).toEqual([doc3]);
    documentaryCollection.addItem(doc1);
    documentaryCollection.addItem(doc2);
  })

  it('Search Documentary by name', () => {
    expect(documentaryCollection.searchByName('Cosmos')).toContain(doc2);
    expect(documentaryCollection.searchByName('Cosmos')).toContain(doc3);
  });

  it('Search documentary by year', () => {
    expect(documentaryCollection.searchByYear(2014)).toEqual([doc2])
  });

  it('Search documentary by topic', () => {
    expect(documentaryCollection.searchByTopic('Space')).toContain(doc2);
    expect(documentaryCollection.searchByTopic('Space')).toContain(doc3);
  });

  it('Search documentary by duration', () => {
    expect(documentaryCollection.searchByDuration(566)).toEqual([doc1])
  });
});
