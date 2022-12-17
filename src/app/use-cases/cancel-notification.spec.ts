import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-repositories';
import { CancelNotification } from './cancel-notification';

describe('Cancel notification', () => {
  it('Should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);
    const notification = new Notification({
      content: new Content('Friend request'),
      category: 'social',
      recipientId: 'recipientId',
    });
    await notificationRepository.save(notification);

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
