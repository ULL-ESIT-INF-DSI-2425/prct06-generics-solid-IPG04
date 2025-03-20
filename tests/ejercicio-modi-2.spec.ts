import { describe, it, expect } from 'vitest'
import Logger from '../src/ejercicio-modi-2/logger.js'
import Logs, { Actions } from '../src/ejercicio-modi-2/logs.js';

describe ('Logger', () => {
  const logger1: Logger = Logger.getLogger();
  const logger2: Logger = Logger.getLogger();

  it ('All loggers refers the same object', () => {
    logger1.registerAction('user1', Actions.REGISTER, new Date('01-01-2025'))
    logger2.registerAction('user2', Actions.LOGIN, new Date('02-01-2025'))
    expect(logger1.searchByActions(Actions.REGISTER)).toEqual(logger2.searchByActions(Actions.REGISTER));
  })

  it ('A logger should search by username', () => {
    const result: Logs = {user: 'user1', actions: Actions.REGISTER, date: new Date('01-01-2025')};
    expect(logger1.searchByUser('user1')).toEqual([result])
  })

  it ('A logger should search by actions', () => {
    const result: Logs = {user: 'user2', actions: Actions.LOGIN, date: new Date('02-01-2025')};
    expect(logger2.searchByActions(Actions.LOGIN)).toEqual([result])
  })

  it ('A logger should search by date', () => {
    const result: Logs = {user: 'user1', actions: Actions.REGISTER, date: new Date('01-01-2025')};
    expect(logger1.searchByDate(new Date('01-01-2025'))).toEqual([result])
  })

  it ('A logger should search between dates', () => {
    const result: Logs = {user: 'user2', actions: Actions.LOGIN, date: new Date('02-01-2025')};
    const result2: Logs = {user: 'user1', actions: Actions.MODIFY, date: new Date('03-01-2025')};
    logger1.registerAction('user1', Actions.MODIFY, new Date('03-01-2025'))
    logger1.registerAction('user2', Actions.MODIFY, new Date('04-01-2025'))
    expect(logger1.actionsBetweenDates(new Date('02-01-2025'), new Date('03-01-2025'))).toEqual([result, result2])
  })
})
