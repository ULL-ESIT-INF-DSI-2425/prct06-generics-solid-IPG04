import { Collectable } from "./collectable";
import { Printable } from "./printable";

export abstract class PrintableCollection<T> implements Collectable<T>, Printable {

  protected _data: T[];

  /**
   * constructor of the class
   * @param list list of values for initialize
   */
  constructor(list: T[] = []) {
    this._data = list;
  }
  /**
   * Add items to the colection
   * 
   * @param item item to add to the colection
   */
  addItem(item: T): void {
    this._data.push(item)
  }

  /**
   * get a item from the collection
   * 
   * @param item item to search
   * @returns item searched
   */
  getItem(item: T): T | undefined {
    return this._data.find((it: T) => it === item);
  }
  
  /**
   * Remove an item from de collection
   * 
   * @param item item to remove
   */
  removeItem(item: T): void {
    this._data = this._data.filter((it: T) => it !== item);
  }

  /**
   * Get the number of items
   * 
   * @returns the number of items
   */
  getNumberOfItems(): number {
    return this._data.length;
  }

  /**
   * Function for print values of the colection
   */
  abstract print(): string;
}