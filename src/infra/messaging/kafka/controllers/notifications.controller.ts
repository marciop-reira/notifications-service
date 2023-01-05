import { SendNotification } from '@app/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  recipientId: string;
  content: string;
  category: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { recipientId, content, category }: SendNotificationPayload,
  ) {
    console.log({
      recipientId,
      content,
      category,
    });
    await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
  }
}
