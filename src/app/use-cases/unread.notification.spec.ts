import { Notification } from '@app/entities/notification';
import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-repositories';
import { NotificationNotFound } from './errors/notification-not-found-error';
import { UnreadNotification } from './unread-notification';

describe('Unread notification', () => {
  it('Should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNofitication = new UnreadNotification(notificationRepository);
    const notification = new Notification(
      makeNotification({ readAt: new Date() }),
    );
    await notificationRepository.save(notification);

    await notificationRepository.create(notification);

    await unreadNofitication.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a notification when it does not exist', () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNofitication = new UnreadNotification(notificationRepository);

    expect(() => {
      return unreadNofitication.execute({
        notificationId: 'non-existing-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
