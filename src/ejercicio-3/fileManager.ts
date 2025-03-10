import { IFileSystem } from "./fileSystem";
import { ConsoleLogger } from "./consoleLogger";

/**
 * Class representing a FileManager.
 */
export class FileManager {
  /**
   * Create a FileManager.
   * @param fileSystem - The file system interface to interact with the file system.
   * @param logger - The logger to log messages and errors.
   * @param filePath - The path of the file to manage.
   */
  constructor(
    private fileSystem: IFileSystem,
    private logger: ConsoleLogger,
    private filePath: string
  ) {}

  /**
   * Reads the content of the file.
   * @returns The content of the file as a string. Returns an empty string if an error occurs.
   */
  readFile(): string {
    try {
      return this.fileSystem.read(this.filePath);
    } catch (error) {
      this.logger.error("Error al leer el archivo");
      return "";
    }
  }

  /**
   * Writes data to the file.
   * @param data - The data to write to the file.
   */
  writeFile(data: string): void {
    try {
      this.fileSystem.write(this.filePath, data);
      this.logger.log("Archivo escrito exitosamente.");
    } catch (error) {
      this.logger.error("Error al escribir en el archivo");
    }
  }
}
