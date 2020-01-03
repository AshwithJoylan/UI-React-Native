import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {NavProp} from 'src/nav';

interface HomeProps {
  navigation: NavProp;
}

// Component
const Home = ({}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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

export default withNavigation(Home);
