/* eslint-disable no-undef */
export const pressBack = async () => {
  if (device.getPlatform() === 'android') {
    await device.pressBack(); // Android only
  } else {
    await element(by.traits(['button']))
      .atIndex(0)
      .tap();
  }
};
