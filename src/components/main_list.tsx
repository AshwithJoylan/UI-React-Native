import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
  StatusBar,
} from 'react-native';
import {SafeAreaView, withNavigation} from 'react-navigation';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {NavProp} from 'src/nav';
import Metrics from '../metrics';
import {View} from '../utility';
interface DataProps {
  title: string;
  component: string;
}
interface DataLisProps extends ReadonlyArray<DataProps> {}
const data: DataLisProps = [
  {
    title: 'Logins',
    component: 'Logins',
  },
  {
    title: 'Chrome Tabs',
    component: 'Chrome',
  },
  {
    title: 'Card Selection',
    component: 'CardSelection',
  },
  {
    title: 'Payments',
    component: 'Pay',
  },
  {
    title: 'Chat',
    component: 'Chat',
  },
  {
    title: 'Profile Page',
    component: 'Profiles',
  },
];

interface MainListProps {
  navigation: NavProp;
}

const MainList = ({navigation}: MainListProps) => {
  const renderItem: ListRenderItem<DataProps> = ({item}) => (
    <TouchableHighlight
      underlayColor="#ccc"
      onPress={() => navigation.navigate(item.component)}
      style={styles.button}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView forceInset={{top: 'never'}} style={styles.container}>
      <StatusBar translucent />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item, i) => i.toString()}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: Metrics.width,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
  },
  seperator: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#D4D4D5',
  },
});

export default withNavigation(MainList);
