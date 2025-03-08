export class PrinterScanner implements PrintService, ScanService {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}