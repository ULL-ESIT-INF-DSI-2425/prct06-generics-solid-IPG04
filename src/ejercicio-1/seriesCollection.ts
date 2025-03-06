import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Series } from "./streamingContent";

export class SeriesCollection extends BasicStreamableCollection<Series> {

  searchByName(name: string): Series[] {
    return this._content.filter((serie: Series) => serie.title === name)
  }

  searchByYear(year: number): Series[] {
    return this._content.filter((serie: Series) => serie.year === year)
  }

  searchBySeasson(seasson: number): Series[] {
    return this._content.filter((serie: Series) => serie.seasson === seasson)
  }

  searchByChapters(chapters: number): Series[] {
    return this._content.filter((serie: Series) => serie.chapters === chapters)
  }
}