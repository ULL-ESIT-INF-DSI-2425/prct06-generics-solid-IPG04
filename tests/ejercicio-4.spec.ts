import { describe, it, expect, vi } from 'vitest';
import { Printer } from '../src/ejercicio-4/printer';
import { Scanner } from '../src/ejercicio-4/scanner';
import { PrinterScanner } from '../src/ejercicio-4/printerScanner';


describe ('Printer', () => {
  const printer: Printer = new Printer();
  it ('a printer should print', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    printer.print()
    expect(consoleSpy).toHaveBeenCalledWith('Printing...')
  });
});

describe ('Scanner', () => {
  const scanner: Scanner = new Scanner();
  it ('a scanner should scan', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    scanner.scan()
    expect(consoleSpy).toHaveBeenCalledWith('Scanning...')
  });
});

describe ('PrinterScanner', () => {
  const printerscanner: PrinterScanner = new PrinterScanner();
 
  it ('a printerscanner should print', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    printerscanner.print()
    expect(consoleSpy).toHaveBeenCalledWith('Printing...')
  });
  
  it ('a printerscanner should scan', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    printerscanner.scan()
    expect(consoleSpy).toHaveBeenCalledWith('Scanning...')
  });
});