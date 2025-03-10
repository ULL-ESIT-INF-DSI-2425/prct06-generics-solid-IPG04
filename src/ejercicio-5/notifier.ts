import { NotificationService } from "./notificationService";

/**
 * The Notifier class is responsible for sending notifications using a provided notification service.
 */
export class Notifier {
  /**
   * Constructs a new Notifier instance.
   * @param notificationService - The service used to send notifications.
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * Sends a notification with the given message.
   * @param message - The message to be sent as a notification.
   */
  notify(message: string): void {
    this.notificationService.sendNotification(message);
  }
}