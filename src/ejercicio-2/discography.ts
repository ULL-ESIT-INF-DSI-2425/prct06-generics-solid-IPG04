import { AllowedMusicItems } from './musicItems'

/**
 * A class representing a discography that holds a collection of music items.
 * The type of items is restricted to those that extend the `AllowedMusicItems` type.
 * 
 * @template T - The type of items in the discography, extending `AllowedMusicItems`.
 */
export class Discography<T extends AllowedMusicItems> {
  /**
   * The collection of music items in the discography.
   * 
   * @protected
   * @type {T[]}
   */
  protected _content: T[] = [];

  /**
   * Creates an instance of Discography.
   * 
   * @param {T[]} items - The initial collection of music items.
   */
  constructor(items: T[]) {
    this._content = items;
  }

  /**
   * Retrieves all items in the discography.
   * 
   * @returns {T[]} An array of all music items.
   */
  getAllItems(): T[] {
    return this._content;
  }

  /**
   * Adds a new item to the discography.
   * 
   * @param {T} item - The music item to add.
   */
  addItem(item: T): void {
    this._content.push(item);
  }
}