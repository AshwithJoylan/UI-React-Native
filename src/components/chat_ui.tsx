import React from 'react';
import {StatusBar, View, Text, Image, ListRenderItem} from 'react-native';
import {Header, Button, Switch} from '../utility';
import Ion from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, withNavigation} from 'react-navigation';
import {FlatList, TouchableHighlight} from 'react-native-gesture-handler';
import moment from 'moment';
import styles from '../styles/chat_ui';
import {NavProp} from 'src/nav';

interface ChatProps {
  navigation: NavProp;
}

const Chat = ({ navigation }: ChatProps) => {
  // Render Items
  const renderItem: ListRenderItem<ChatListDataProps> = ({item}) => (
    <TouchableHighlight
      onPress={() => navigation.navigate('ChatDetails', {item})}
      underlayColor="#F7F7F7"
      style={styles.listItem}>
      <View style={styles.insideList}>
        <Text numberOfLines={2} style={styles.messageText}>
          {item.text.length < 80
            ? `${item.text}`
            : `${item.text.substring(0, 80)}...`}
        </Text>
        <View style={styles.inner}>
          <View style={styles.innerSelf}>
            <Image source={{uri: item.image}} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={styles.position}>{item.position}</Text>
            </View>
          </View>
          <Text style={styles.time}>
            {moment(new Date().setTime(item.createTime)).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.05)"
        barStyle="dark-content"
      />
      <Header
        fontSize={25}
        bordered={false}
        title="Messages"
        fontWeight="500"
        renderLeft={
          <Button onPress={() => navigation.goBack()} style={styles.headerIcon}>
            <Ion size={25} name="ios-arrow-back" color="black" />
          </Button>
        }
      />
      <View style={styles.topContainer}>
        <Text>Available for video call</Text>
        <Switch
          background="#8c8c8c"
          onPress={() => console.log('pressed')}
          color="#66B4CC"
        />
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item, i) => i.toString()}
        data={chats}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default withNavigation(Chat);

export interface ChatListDataProps {
  sender: string;
  createTime: number;
  text: string;
  image: string;
  position: string;
}

const chats: ReadonlyArray<ChatListDataProps> = [
  {
    sender: 'Harish Tesla',
    createTime: Date.now() - 99000,
    position: 'Web Designer',
    text:
      "Lorem Ipsum has been the industry's standard dummy text, Lorem Ipsum has been the industry's standard dummy text",
    image:
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123155116/original/ada692539ed9ea12a2d20bf054ab5316d211254b/create-illustrative-instagram-twitch-and-youtube-profile-pictures.jpg',
  },
  {
    sender: 'Mesa Rose',
    position: 'Web Designer',
    createTime: Date.now() - 800000,
    text: "Lorem Ipsum has been the industry's standard dummy text.",
    image:
      'https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-9/21077530_1628951000469170_5865880833674808227_n.jpg?_nc_cat=100&_nc_ohc=OiBzqSSAp0EAX9qzuVN&_nc_ht=scontent.fblr1-3.fna&oh=570acfe17fb3585b8e589985070fd0f6&oe=5E9DB01B',
  },
  {
    sender: 'Lisa Mecha',
    position: 'Web Designer',
    createTime: Date.now() - 80000,
    text:
      "Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text",
    image:
      'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/21077322_1628950937135843_2138472610644819335_n.jpg?_nc_cat=110&_nc_ohc=q31EGpkKj0IAX9tdyJ8&_nc_ht=scontent.fblr1-4.fna&oh=79694099a0061f7b239fdd65e91d16a1&oe=5E97A1F3',
  },
  {
    sender: 'Sam Joan',
    createTime: Date.now() - 10000000,
    position: 'Web Designer',
    text:
      "Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text",
    image:
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto/attachments/delivery/asset/4ea4d090b6fef3c928eae39d03b24de7-1557149861/vladrat235/create-illustrative-instagram-twitch-and-youtube-profile-pictures.jpg',
  },
  {
    sender: 'Rosa Stan',
    position: 'Web Designer',
    createTime: Date.now() - 100000,
    text:
      "Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text",
    image:
      'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/21077461_1628950853802518_5767851025194457167_n.jpg?_nc_cat=110&_nc_ohc=i1lp_b47NV0AX8EFIsS&_nc_ht=scontent.fblr1-4.fna&oh=d574c7cba769f339db249fba2b636c28&oe=5E8DB856',
  },
];
