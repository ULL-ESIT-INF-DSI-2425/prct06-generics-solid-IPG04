import { NotificationService } from "./notificationService";

/**
 * Class representing a Short Message Service (SMS) for sending notifications.
 * Implements the NotificationService interface.
 */
export class ShortMessageService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}