import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-community/google-signin';

export enum Status {
  'SUCCESS',
  'CANCELED',
  'ALREADY_SIGNED_IN',
  'PLAY_SERVICES_NOT_AVAILABLE',
}

GoogleSignin.configure();

const logIn = () =>
  new Promise<User>(async (resolve, reject) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      resolve(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        reject({code: Status.CANCELED, error: 'Sign in Canceled'});
      } else if (error.code === statusCodes.IN_PROGRESS) {
        reject({code: Status.ALREADY_SIGNED_IN, error: 'Already singed in'});
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        reject({
          code: Status.PLAY_SERVICES_NOT_AVAILABLE,
          error: 'Play service not available',
        });
      } else {
        reject(error);
      }
    }
  });

const logout = () => GoogleSignin.signOut();

const Google = {...{logIn, logout}};

export default Google;
