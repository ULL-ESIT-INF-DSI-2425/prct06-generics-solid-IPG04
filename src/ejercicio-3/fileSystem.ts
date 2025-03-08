export interface IFileSystem {
  read(filePath: string): string;
  write(filePath: string, data: string): void;
}

export class LocalFileSystem implements IFileSystem {
  read(filePath: string): string {
    const fs = require("fs");
    return fs.readFileSync(filePath, "utf-8");
  }

  write(filePath: string, data: string): void {
    const fs = require("fs");
    fs.writeFileSync(filePath, data, "utf-8");
  }
}