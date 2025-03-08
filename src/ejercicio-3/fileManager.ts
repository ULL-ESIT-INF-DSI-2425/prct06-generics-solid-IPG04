import { IFileSystem } from "./fileSystem";
import { ConsoleLogger } from "./consoleLogger";

export class FileManager {
  constructor(
    private fileSystem: IFileSystem,
    private logger: ConsoleLogger,
    private filePath: string
  ) {}

  readFile(): string {
    try {
      return this.fileSystem.read(this.filePath);
    } catch (error) {
      this.logger.error("Error al leer el archivo");
      return "";
    }
  }

  writeFile(data: string): void {
    try {
      this.fileSystem.write(this.filePath, data);
      this.logger.log("Archivo escrito exitosamente.");
    } catch (error) {
      this.logger.error("Error al escribir en el archivo");
    }
  }
}
