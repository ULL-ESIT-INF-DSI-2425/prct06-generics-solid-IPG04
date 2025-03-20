import Logs from './logs.js'
import { Actions } from './logs.js';

/**
 * Class for register logger
 */
export default class Logger {
  private _logs: Logs[];

  private static logger: Logger;

  /**
   * Constructor for the class
   */
  private constructor () {
    this._logs = [];
  }

  /**
   * Function for get the loger
   * @returns The loger for use
   */
  public static getLogger(): Logger {
    if (!Logger.logger) {
      Logger.logger = new Logger();
    }
    return Logger.logger;
  }

  /**
   * Function for register action
   * @param user User to register
   * @param action Action of the user
   * @param date Date of the action
   */
  registerAction(user: string, action: Actions, date: Date): void {
    const log: Logs = {user: user, actions: action, date: date};
    this._logs.push(log);
  }

  /**
   * Search actions done by user
   * @param user user to search
   * @returns actions done by the user
   */
  searchByUser(user: string): Logs[] {
    return this._logs.filter((log: Logs) => log.user === user);
  }

  /**
   * Search logs by actions
   * @param action Action of filter
   * @returns Logs with the action selected
   */
  searchByActions(action: Actions): Logs[] {
    return this._logs.filter((log: Logs) => log.actions === action);
  }

  /**
   * Search logs by date
   * @param date Date to search
   * @returns Users with logs in a date
   */
  searchByDate(date: Date): Logs[] {
    return this._logs.filter((log: Logs) => String(log.date) === String(date));
  }
  
  /**
   * Return logs between dates
   * @param date1 Date start
   * @param date2 Date end
   */
  actionsBetweenDates(date1: Date, date2: Date): Logs[] {
    let result = this._logs.filter((log: Logs) => date1.getTime() <= log.date.getTime());
    return result.filter((log: Logs) => date2.getTime() >= log.date.getTime());
  }
}
