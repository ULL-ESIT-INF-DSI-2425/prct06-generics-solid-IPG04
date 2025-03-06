import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Documentary } from "./streamingContent";

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {

  searchByName(name: string): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.title === name)
  }

  searchByYear(year: number): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.year === year)
  }

  searchByTopic(topic: string): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.topic === topic)
  }

  searchByDuration(duration: number): Documentary[] {
    return this._content.filter((doc: Documentary) => doc.duration === duration)
  }
}