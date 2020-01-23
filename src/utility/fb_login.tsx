import {LoginManager, AccessToken} from 'react-native-fbsdk';
type Permission = 'public_profile';

interface ResProps {
  isCancelled: boolean;
  accessToken: AccessToken | null;
  error?: string;
}
const loginWithPermission = (permissions: Permission[]) =>
  new Promise<ResProps>((resolve, reject) => {
    LoginManager.logInWithPermissions(permissions)
      .then(result => {
        if (!result.isCancelled && result.grantedPermissions) {
          AccessToken.getCurrentAccessToken().then(accessToken => {
            const res: ResProps = {
              isCancelled: false,
              accessToken,
              error: undefined,
            };
            resolve(res);
          });
        } else if (result.isCancelled) {
          const res: ResProps = {
            isCancelled: true,
            accessToken: null,
            error: 'Permission denied!',
          };
          reject(res);
        }
      })
      .catch(error => reject(error));
  });

const logout = () => {
  return LoginManager.logOut();
};

const FaceBook = {
  loginWithPermission,
  logout,
};

export default FaceBook;
