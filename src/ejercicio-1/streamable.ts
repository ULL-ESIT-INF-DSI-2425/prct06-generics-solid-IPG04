/**
 * Interface representing a collection of streamable items.
 * 
 * @template T - The type of items in the collection.
 */
export interface Streamable<T> {
  /**
   * Adds an item to the collection.
   * 
   * @param item - The item to add.
   */
  addItem(item: T): void;

  /**
   * Removes an item from the collection.
   * 
   * @param item - The item to remove.
   */
  removeItem(item: T): void;

  /**
   * Searches for items in the collection by name.
   * 
   * @param name - The name to search for.
   * @returns An array of items that match the search criteria.
   */
  searchByName(name: string): T[];

  /**
   * Searches for items in the collection by year.
   * 
   * @param year - The year to search for.
   * @returns An array of items that match the search criteria.
   */
  searchByYear(year: number): T[];

  /**
   * Retrieves all items in the collection.
   * 
   * @returns An array of all items in the collection.
   */
  getAllItems(): T[];
}