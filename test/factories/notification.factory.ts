import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

export function makeNotification(override?: Partial<NotificationProps>) {
  return new Notification({
    recipientId: 'recipientId',
    content: new Content('New friend request'),
    category: 'social',
    ...override,
  });
}
