import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface UnreadNoficationRequest {
  notificationId: string;
}

type UnreadNoficationResponse = void;

@Injectable()
export class UnreadNofication {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNoficationRequest,
  ): Promise<UnreadNoficationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unRead();

    await this.notificationRepository.save(notification);
  }
}
