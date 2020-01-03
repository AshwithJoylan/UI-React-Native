import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile1 from './profile_1';

// Component
const Profiles = () => {
  return (
    <View style={styles.container}>
      <Profile1 />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Profiles;
