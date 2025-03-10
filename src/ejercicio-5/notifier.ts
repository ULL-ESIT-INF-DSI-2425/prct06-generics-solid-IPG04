import { NotificationService } from "./notificationService";

export class Notifier {
  constructor(private notificationService: NotificationService) {}

  notify(message: string): void {
    this.notificationService.sendNotification(message);
  }
}