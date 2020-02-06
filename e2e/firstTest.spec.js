/* eslint-disable no-undef */
const detox = require('detox');
// const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
// const specReporter = require('detox/runners/jest/specReporter');

// Set the default timeout
jest.setTimeout(25000);
jasmine.getEnv().addReporter(adapter);

// // This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// // This is strictly optional.
// jasmine.getEnv().addReporter(specReporter);

// beforeEach(async () => {
//   await adapter.beforeEach();
// });

// afterAll(async () => {
//   await adapter.afterAll();
//   await detox.cleanup();
// });

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
  beforeAll(async () => {
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
      await element(by.traits(['button']))
        .atIndex(0)
        .tap();
    });
  });
});
