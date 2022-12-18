import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-repositories';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('Should return notifications from a recipientId', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'testRecipientId' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'testRecipientId' }),
    );

    await notificationRepository.create(makeNotification());

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'testRecipientId',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'testRecipientId' }),
        expect.objectContaining({ recipientId: 'testRecipientId' }),
      ]),
    );
  });
});
