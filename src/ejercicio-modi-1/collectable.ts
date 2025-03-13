/**
 * Interface for implement collectables
 */
export interface Collectable<T> {
  /**
   * 
   * @param item add item to the collectable
   */
  addItem(item: T): void;

  /**
   * 
   * @param item get item from the collectable
   */
  getItem(item: T): T | undefined;

  /**
   * 
   * @param item remove item from the collectable
   */
  removeItem(item: T): void;

  /**
   * return the number of items from the collectable
   */
  getNumberOfItems(): number;
}