import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface ReadNotiticationRequest {
  notificationId: string;
}

type ReadNotiticationResponse = void;

@Injectable()
export class ReadNotitication {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotiticationRequest,
  ): Promise<ReadNotiticationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
