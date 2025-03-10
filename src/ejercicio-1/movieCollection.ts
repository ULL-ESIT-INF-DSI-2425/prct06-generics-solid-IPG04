import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Movies } from "./streamingContent";

/**
 * Represents a collection of movies that extends the BasicStreamableCollection.
 * Provides methods to search movies by different attributes.
 */
export class MoviesCollection extends BasicStreamableCollection<Movies> {

  /**
   * Searches for movies by their title.
   * @param name - The title of the movie to search for.
   * @returns An array of movies that match the given title.
   */
  searchByName(name: string): Movies[] {
    return this._content.filter((movie: Movies) => movie.title === name)
  }

  /**
   * Searches for movies by their release year.
   * @param year - The release year of the movie to search for.
   * @returns An array of movies that match the given release year.
   */
  searchByYear(year: number): Movies[] {
    return this._content.filter((movie: Movies) => movie.year === year)
  }

  /**
   * Searches for movies by their director.
   * @param director - The director of the movie to search for.
   * @returns An array of movies that match the given director.
   */
  searchByDirector(director: string): Movies[] {
    return this._content.filter((movie: Movies) => movie.director === director)
  } 

  /**
   * Searches for movies by their duration.
   * @param duration - The duration of the movie to search for.
   * @returns An array of movies that match the given duration.
   */
  searchByDuration(duration: number): Movies[] {
    return this._content.filter((movie: Movies) => movie.duration === duration)
  } 
}