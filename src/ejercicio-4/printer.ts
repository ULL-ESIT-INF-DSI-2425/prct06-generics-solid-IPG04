/**
 * The Printer class implements the PrintService interface and provides
 * a method to print a message to the console.
 */
export class Printer implements PrintService {
  print(): void {
    console.log('Printing...')
  }
}