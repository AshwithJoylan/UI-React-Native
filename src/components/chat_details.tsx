/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Keyboard} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import {withNavigation, SafeAreaView} from 'react-navigation';
import styles from '../styles/chat_details';
import {ChatListDataProps} from './chat_ui';
import {Button, MessageItem} from '../utility';
import {NavProp} from '../nav';
import {ScrollView} from 'react-native-gesture-handler';
import {Input} from 'native-base';
import {ChatUiColors} from '../colors';
interface ChatDetailsProps {
  navigation: NavProp;
}

let scrollView: any;

const ChatDetails = ({navigation}: ChatDetailsProps) => {
  const [messages] = useState<Array<Message>>(dummyMessages);
  const [message, setMessage] = useState('');
  const sender: ChatListDataProps = navigation.getParam('item', {
    sender: 'Harish Tesla',
    createTime: Date.now() - 99000,
    position: 'Web Designer',
    text:
      "Lorem Ipsum has been the industry's standard dummy text, Lorem Ipsum has been the industry's standard dummy text",
    image:
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123155116/original/ada692539ed9ea12a2d20bf054ab5316d211254b/create-illustrative-instagram-twitch-and-youtube-profile-pictures.jpg',
  });

  // Sending message
  const sendMessage = () => {
    if (message) {
      Keyboard.dismiss();
      const msg: Message = {
        type: 'sent',
        message,
        time: Date.now(),
      };
      const sentMsg: Message = {
        type: 'received',
        message,
        time: Date.now(),
      };

      messages.push(msg);
      setMessage('');
      messages.push(sentMsg);
    }
  };

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent
          backgroundColor="#DEDEDE"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <Button onPress={() => navigation.goBack()} style={styles.headerIcon}>
            <Ion size={25} name="ios-arrow-back" color="black" />
          </Button>
          <View style={styles.content}>
            <Image source={{uri: sender.image}} style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.sender}>{sender.sender}</Text>
              <Text style={styles.position}>Online</Text>
            </View>
          </View>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ref={ref => (scrollView = ref)}
          onContentSizeChange={() => {
            scrollView.scrollToEnd();
          }}
          contentContainerStyle={styles.contentContainer}>
          {messages.map((item, index) => (
            <MessageItem key={index.toString()} {...{item, sender, index}} />
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <Input
            value={message}
            onChangeText={str => setMessage(str)}
            style={styles.input}
            placeholder="Type Something"
          />
          <Button
            onPress={sendMessage}
            underlayColor="transparent"
            style={styles.button}>
            <Ion name="md-send" size={22} color={ChatUiColors.lightText} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export interface Message {
  message: string;
  type: 'sent' | 'received';
  time: number;
}

const dummyMessages: Array<Message> = [
  {
    message: 'Hi, How are u?',
    type: 'received',
    time: Date.now() - 1000000,
  },
  {
    message: 'Hi, I am fine',
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'received',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'received',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'sent',
    time: Date.now() - 1000000,
  },
  {
    message: "Lorem Ipsum has been the industry's standard dummy text",
    type: 'received',
    time: Date.now() - 1000000,
  },
];

export default withNavigation(ChatDetails);
