import React from 'react';
import {useState} from 'react';
import {View, Text, StatusBar, Image, ListRenderItem} from 'react-native';
import styles from '../styles/pay';
import {withNavigation, SafeAreaView} from 'react-navigation';
import {NavProp} from 'src/nav';
import {ParColors} from '../colors';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Highlight, Button} from '../utility';
interface Props {
  navigation: NavProp;
}
interface ItemProps {
  name: string;
  image: string;
}

interface DataProps extends Array<ItemProps> {}

const data: DataProps = [
  {
    name: 'Jane Marrie',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvt7DiSmIhFS9GfqSvVYNW3mXJ56oWrgRm52O_yoTLlBMuQl9&s',
  },
  {
    name: 'Sam Ferris',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMnq8bzCU6CUb2PkFvfBnME6H6qYtnZe6n8_t1Cmh3392Kk8e&s',
  },
  {
    name: 'Matt Hose',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTG0j1MmEng29JZuTbH7KqM55WOrUD7XfxtzOseyZeuFWJPv7&s',
  },
  {
    name: 'Lisa',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzix6zlJLz7MDcz907yfj-wRJnZ1FvktyrFmfJYuEPPOV7jVv52g&s',
  },
  {
    name: 'Steven Soz',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwR6vw1w6-Aec5B1ZiSWj890V0DJj8t7YyrsnfBjylNC7ctEn&s',
  },
  {
    name: 'Simran Pais',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdojgKGd6m4ZMuj2xl9MmydcNNtQdOA0OY6LmKeEkPAU8BRrt5&s',
  },
  {
    name: 'Kyle king',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfvwL7X5zwWozcZZanpccyJEznnUAl7cwq3tWPw3h6QPNqhMPxA&s',
  },
];

// Component
const Pay = ({navigation}: Props) => {
  // State
  const [activeTab, setActiveTab] = useState(1);

  // Render Item
  const renderItem: ListRenderItem<ItemProps> = ({item, index}) => (
    <Button style={styles.item}>
      <View style={styles.itemContent}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.itemImage}
        />
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Button
        onPress={() => navigation.navigate('PayDetails')}
        style={styles.itemButton}>
        <Text style={styles.itemButtonText}>PAY</Text>
      </Button>
    </Button>
  );

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0.05)"
      />
      <View style={styles.top}>
        <Image
          source={require('../images/menu.png')}
          resizeMode="contain"
          style={styles.menu}
        />
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            resizeMode="contain"
            source={require('../images/payLogo.png')}
          />
        </View>
        <Image
          style={styles.profile}
          resizeMode="contain"
          source={require('../images/payProfile.jpeg')}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.tab}>
          <View style={styles.tabBar}>
            <Text
              onPress={() => setActiveTab(1)}
              style={[
                styles.friends,
                {
                  color:
                    activeTab === 1 ? ParColors.secondary : ParColors.light,
                },
              ]}>
              Friends
            </Text>
            <Text
              onPress={() => setActiveTab(2)}
              style={[
                styles.recent,
                {
                  color:
                    activeTab === 2 ? ParColors.secondary : ParColors.light,
                },
              ]}>
              Recent
            </Text>
            <View style={styles.search}>
              <Simple name="magnifier" size={30} color={ParColors.secondary} />
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(_, i) => i.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            data={data}
            style={styles.list}
          />
          <Button style={styles.addFriend}>
            <Text style={styles.addFriendText}>ADD FRIEND</Text>
          </Button>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>REQUEST</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>PAY NEW</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Pay);
