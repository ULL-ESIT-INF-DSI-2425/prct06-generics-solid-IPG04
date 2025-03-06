import { Streamable } from "./streamable";

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected _content: T[];

  constructor(items: T[]) {
    this._content = items;
  }

  addItem(item: T): void {
    this._content.push(item);
  }

  removeItem(item: T): void {
    this._content = this._content.filter((it: T) => it !== item)
  }

  getAllItems(): T[] {
    return this._content;
  }

  abstract searchByName(name: string): T[];
  abstract searchByYear(year: number): T[];
}