/**
 * Class representing a device that can both print and scan.
 * Implements the PrintService and ScanService interfaces.
 */
export class PrinterScanner implements PrintService, ScanService {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}