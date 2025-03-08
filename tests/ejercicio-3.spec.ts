import { describe, it, expect } from 'vitest';
import { FileManager } from '../src/ejercicio-3/fileManager';
import { LocalFileSystem } from '../src/ejercicio-3/fileSystem';
import { ConsoleLogger } from '../src/ejercicio-3/consoleLogger';

const mockFileSystem = new LocalFileSystem();
const mockLogger = new ConsoleLogger();
const filePath = './tests/test_file_3.txt';
const fileManager = new FileManager(mockFileSystem, mockLogger, filePath);

describe('LocalFileSystem', () => {
  const localFileSystem: LocalFileSystem = new LocalFileSystem();

  it ('a local file system should read from a file', () => {
    expect(localFileSystem.read(filePath)).toBe('test_file_for_ejercicio_3');
  });

  it ('a local file system should write a file', () => {
    localFileSystem.write(filePath, 'HolaMundo');
    expect(localFileSystem.read(filePath)).toBe('HolaMundo');
    localFileSystem.write(filePath, 'test_file_for_ejercicio_3')
  });
});

describe('FileManager', () => {
  it('should read a file successfully', () => {
    mockFileSystem.read = () => 'file content';
    expect(fileManager.readFile()).toBe('file content');
  });

  it('should write to a file successfully', () => {
    mockFileSystem.write = () => {};
    expect(() => fileManager.writeFile('new content')).not.toThrow();
  });

  it('should handle read file errors', () => {
    mockFileSystem.read = () => { throw new Error('Read error'); };
    expect(fileManager.readFile()).toBe('');
  });

  it('should handle write file errors', () => {
    mockFileSystem.write = () => { throw new Error('Write error'); };
    expect(() => fileManager.writeFile('content')).not.toThrow();
  });
});
