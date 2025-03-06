import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Movies } from "./streamingContent";

export class MoviesCollection extends BasicStreamableCollection<Movies> {

  searchByName(name: string): Movies[] {
    return this._content.filter((movie: Movies) => movie.title === name)
  }

  searchByYear(year: number): Movies[] {
    return this._content.filter((movie: Movies) => movie.year === year)
  }

  searchByDirector(director: string): Movies[] {
    return this._content.filter((movie: Movies) => movie.director === director)
  } 

  searchByDuration(duration: number): Movies[] {
    return this._content.filter((movie: Movies) => movie.duration === duration)
  } 
}