/**
 * Possible actions on logs
 */
export enum Actions { LOGIN, REGISTER, MODIFY }

export default interface Logs {
  /**
   * user name of log
   */
  user: string,
  /**
   * action done by user
   */
  actions: Actions,
  /**
   * date of the action
   */
  date: Date;
}
