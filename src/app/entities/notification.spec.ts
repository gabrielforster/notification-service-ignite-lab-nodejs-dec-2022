import { Content } from './content';
import { Notification } from './notification';

describe('Notification Tests', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Friend request'),
      category: 'social',
      recipientId: 'recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
