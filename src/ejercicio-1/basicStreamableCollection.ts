import { Streamable } from "./streamable";

/**
 * Abstract class representing a basic streamable collection.
 * This class implements the Streamable interface and provides
 * basic functionalities for managing a collection of items.
 *
 * @typeParam T - The type of items in the collection.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * The content of the collection.
   */
  protected _content: T[];

  /**
   * Creates an instance of BasicStreamableCollection.
   * 
   * @param items - An array of items to initialize the collection.
   */
  constructor(items: T[]) {
    this._content = items;
  }

  /**
   * Adds an item to the collection.
   * 
   * @param item - The item to be added.
   */
  addItem(item: T): void {
    this._content.push(item);
  }

  /**
   * Removes an item from the collection.
   * 
   * @param item - The item to be removed.
   */
  removeItem(item: T): void {
    this._content = this._content.filter((it: T) => it !== item)
  }

  /**
   * Retrieves all items in the collection.
   * 
   * @returns An array of all items in the collection.
   */
  getAllItems(): T[] {
    return this._content;
  }

  /**
   * Searches for items in the collection by name.
   * 
   * @param name - The name to search for.
   * @returns An array of items that match the given name.
   */
  abstract searchByName(name: string): T[];

  /**
   * Searches for items in the collection by year.
   * 
   * @param year - The year to search for.
   * @returns An array of items that match the given year.
   */
  abstract searchByYear(year: number): T[];
}