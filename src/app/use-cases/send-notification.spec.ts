import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-repositories';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notifiactionsReposotory = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notifiactionsReposotory);

    const { notification } = await sendNotification.execute({
      recipientId: 'recipientId',
      content: 'Friend request',
      category: 'social',
    });

    expect(notifiactionsReposotory.notifications).toHaveLength(1);
    expect(notifiactionsReposotory.notifications[0]).toEqual(notification);
  });
});
