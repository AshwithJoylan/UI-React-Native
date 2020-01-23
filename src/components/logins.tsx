/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FaceBook from '../utility/fb_login';
import Google, {Status} from '../utility/google_signin';

const Logins = () => {
  useEffect(() => {
    Google.logout();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#F5F6F7"
        style={styles.facebook}
        onPress={() => {
          FaceBook.loginWithPermission(['public_profile'])
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }}>
        <View style={styles.facebook}>
          <Text style={styles.text}>Facebook Login</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#F5F6F7"
        style={[styles.google, {marginTop: 20}]}
        onPress={() => {
          Google.logIn()
            .then(user => console.log(user))
            .catch(error => console.log(error, error.code === Status.CANCELED));
        }}>
        <View style={styles.google}>
          <Text style={styles.text}>Google Login</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  facebook: {
    width: 200,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#4267B2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  google: {
    width: 200,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#DE5448',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white'},
});

export default Logins;
