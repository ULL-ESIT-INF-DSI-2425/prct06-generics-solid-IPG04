/**
 * The `ConsoleLogger` class provides methods to log messages to the console.
 */
export class ConsoleLogger {
  /**
   * Logs a message to the console.
   * 
   * @param message - The message to log.
   */
  log(message: string): void {
    console.log(message);
  }

  /**
   * Logs an error message to the console.
   * 
   * @param message - The error message to log.
   */
  error(message: string): void {
    console.error(message);
  }
}