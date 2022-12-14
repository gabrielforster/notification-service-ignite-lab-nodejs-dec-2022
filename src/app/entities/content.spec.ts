import { Content } from './content';

test('should be able to create a notifcation content', () => {
  const content = new Content('Friend request');

  expect(content.value).toBeTruthy();
});

test('should not be able to create a notifcation content with less than 5 chars', () => {
  expect(() => new Content('Frie')).toThrow();
});

test('should not be able to create a notifcation content with more than 240 chars', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
