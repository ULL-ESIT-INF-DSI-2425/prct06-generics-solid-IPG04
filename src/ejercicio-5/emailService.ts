import { NotificationService } from "./notificationService";

/**
 * Service for sending email notifications.
 * Implements the NotificationService interface.
 */
export class EmailService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}