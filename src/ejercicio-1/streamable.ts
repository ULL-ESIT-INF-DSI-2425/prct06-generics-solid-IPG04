export interface Streamable<T> {
  addItem(item: T): void;
  removeItem(item: T): void;
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  getAllItems(): T[];
}