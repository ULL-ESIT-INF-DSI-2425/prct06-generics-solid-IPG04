/**
 * The `Scanner` class implements the `ScanService` interface and provides
 * functionality to perform scanning operations.
 */
export class Scanner implements ScanService {
  scan(): void {
    console.log('Scanning...')
  }
}