import { PrintableCollection } from "./printableCollection";

export class NumericPrintableCollection extends PrintableCollection<Number> {
  
  /**
   * constructor of the class
   * @param list list of numbers for initialize
   */
  constructor(list?: number[]) {
    super(list);
  }
  /**
   * Print the data
   * @returns the string of all the values concatenated
   */
  print(): string {
    return this._data.join(", ")
  }
}