import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-repositories';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notifiactionsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notifiactionsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'recipientId',
      content: 'Friend request',
      category: 'social',
    });

    expect(notifiactionsRepository.notifications).toHaveLength(1);
    expect(notifiactionsRepository.notifications[0]).toEqual(notification);
  });
});
