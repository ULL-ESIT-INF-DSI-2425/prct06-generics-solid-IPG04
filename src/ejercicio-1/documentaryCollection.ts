import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Documentary } from "./streamingContent";

/**
 * Represents a collection of documentaries.
 * Extends the BasicStreamableCollection class with Documentary type.
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {

  /**
   * Searches for documentaries by their name.
   * @param name - The name of the documentary to search for.
   * @returns An array of documentaries that match the given name.
   */
  searchByName(name: string): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.title === name)
  }

  /**
   * Searches for documentaries by their release year.
   * @param year - The release year of the documentary to search for.
   * @returns An array of documentaries that match the given year.
   */
  searchByYear(year: number): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.year === year)
  }

  /**
   * Searches for documentaries by their topic.
   * @param topic - The topic of the documentary to search for.
   * @returns An array of documentaries that match the given topic.
   */
  searchByTopic(topic: string): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.topic === topic)
  }

  /**
   * Searches for documentaries by their duration.
   * @param duration - The duration of the documentary to search for.
   * @returns An array of documentaries that match the given duration.
   */
  searchByDuration(duration: number): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.duration === duration)
  }
}