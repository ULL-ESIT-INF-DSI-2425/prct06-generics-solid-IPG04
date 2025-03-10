import { describe, it, expect, vi } from "vitest";
import { EmailService } from '../src/ejercicio-5/emailService'
import { ShortMessageService } from '../src/ejercicio-5/smsService'
import { Notifier } from '../src/ejercicio-5/notifier'

describe('emailService', () => {
  const emailService: EmailService = new EmailService();

  it ('a email service should send a message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    emailService.sendNotification('Mensaje Email')
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by email: Mensaje Email');
  })
});

describe('smsService', () => {
  const smsService: ShortMessageService = new ShortMessageService();

  it ('a sms service should send a message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    smsService.sendNotification('Mensaje SMS')
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by SMS: Mensaje SMS');
  })
});

describe('notifier', () => {
  const emailService: EmailService = new EmailService();
  const nofitier: Notifier = new Notifier(emailService);

  it ('a notifier should send a message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    nofitier.notify('Mensaje Email')
    expect(consoleSpy).toHaveBeenCalledWith('Sending notification by email: Mensaje Email');
  })
});