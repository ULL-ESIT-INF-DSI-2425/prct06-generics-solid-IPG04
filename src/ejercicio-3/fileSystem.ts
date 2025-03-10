/**
 * Interface for a file system.
 */
export interface IFileSystem {
  read(filePath: string): string;
  write(filePath: string, data: string): void;
}

/**
 * Class representing a local file system.
 * Implements the IFileSystem interface.
 */
export class LocalFileSystem implements IFileSystem {
  /**
   * Reads the content of a file at the given file path.
   * @param filePath - The path to the file to be read.
   * @returns The content of the file as a string.
   */
  read(filePath: string): string {
    const fs = require("fs");
    return fs.readFileSync(filePath, "utf-8");
  }

  /**
   * Writes data to a file at the given file path.
   * @param filePath - The path to the file where data will be written.
   * @param data - The data to be written to the file.
   */
  write(filePath: string, data: string): void {
    const fs = require("fs");
    fs.writeFileSync(filePath, data, "utf-8");
  }
}