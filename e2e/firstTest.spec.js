/* eslint-disable no-undef */
const data = [
  'Logins',
  'Chrome Tabs',
  'Card Selection',
  'Payments',
  'Chat',
  'Profile Page',
  'Charts',
];

describe('Home Navigation Test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('Should Load Main List', async () => {
    await expect(element(by.id('main-list'))).toBeVisible();
  });
  data.forEach(title => {
    it(`should press Item: ${title}`, async () => {
      await element(by.text(title)).tap();
    });
    it('should press Back', async () => {
      await element(by.text('Screens')).tap();
      await expect(element(by.id('main-list'))).toBeVisible();
    });
  });
});
