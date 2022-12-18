import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-repositories';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('Should return the count of notification from a recipientId', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'testRecipientId' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'testRecipientId' }),
    );

    await notificationRepository.create(makeNotification());

    const { count } = await countRecipientNotification.execute({
      recipientId: 'testRecipientId',
    });

    expect(count).toBe(2);
  });
});
