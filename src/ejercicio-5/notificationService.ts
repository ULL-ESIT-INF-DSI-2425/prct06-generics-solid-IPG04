/**
 * Interface representing a notification service.
 * 
 * @interface NotificationService
 */
export interface NotificationService {
  sendNotification(message: string): void;
}
