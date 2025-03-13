import { PrintableCollection } from "./printableCollection";

export class StringPrintableCollection extends PrintableCollection<string> {
  
  /**
   * constructor of the class
   * @param list list of strings for initialize
   */
  constructor(list?: string[]) {
    super(list);
  }

  /**
   * Print the data
   * @returns the string of all the values concatenated
   */
  print(): string {
    return this._data.join(",")
  }
}