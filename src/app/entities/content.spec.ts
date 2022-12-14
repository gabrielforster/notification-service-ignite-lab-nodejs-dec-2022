import { Content } from './content';

describe('Notification Content Testes', () => {
  it('should be able to create a notifcation content', () => {
    const content = new Content('Friend request');

    expect(content.value).toBeTruthy();
  });

  it('should not be able to create a notifcation content with less than 5 chars', () => {
    expect(() => new Content('Frie')).toThrow();
  });

  it('should not be able to create a notifcation content with more than 240 chars', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
