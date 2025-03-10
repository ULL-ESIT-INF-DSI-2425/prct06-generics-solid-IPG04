import { NotificationService } from "./notificationService";

export class ShortMessageService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}