import { AllowedMusicItems } from './musicItems'

export class Discography<T extends AllowedMusicItems> {
  protected _content: T[] = [];

  constructor(items: T[]) {
    this._content = items;
  }

  getAllItems(): T[] {
    return this._content;
  }

  addItem(item: T): void {
    this._content.push(item);
  }
}