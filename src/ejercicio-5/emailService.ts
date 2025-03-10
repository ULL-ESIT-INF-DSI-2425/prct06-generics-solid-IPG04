import { NotificationService } from "./notificationService";

export class EmailService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}