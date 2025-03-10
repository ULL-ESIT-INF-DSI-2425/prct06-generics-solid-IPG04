import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Series } from "./streamingContent";

/**
 * Represents a collection of series that extends the BasicStreamableCollection.
 * Provides methods to search series by different attributes.
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {

  /**
   * Searches for series by their title.
   * @param name - The title of the series to search for.
   * @returns An array of series that match the given title.
   */
  searchByName(name: string): Series[] {
    return this._content.filter((serie: Series) => serie.title === name)
  }

  /**
   * Searches for series by their release year.
   * @param year - The release year of the series to search for.
   * @returns An array of series that match the given release year.
   */
  searchByYear(year: number): Series[] {
    return this._content.filter((serie: Series) => serie.year === year)
  }

  /**
   * Searches for series by their season number.
   * @param seasson - The season number of the series to search for.
   * @returns An array of series that match the given season number.
   */
  searchBySeasson(seasson: number): Series[] {
    return this._content.filter((serie: Series) => serie.seasson === seasson)
  }

  /**
   * Searches for series by their number of chapters.
   * @param chapters - The number of chapters of the series to search for.
   * @returns An array of series that match the given number of chapters.
   */
  searchByChapters(chapters: number): Series[] {
    return this._content.filter((serie: Series) => serie.chapters === chapters)
  }
}