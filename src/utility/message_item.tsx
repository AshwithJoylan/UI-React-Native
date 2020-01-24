/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Message} from '../components/chat_details';
import {ChatListDataProps} from '../components/chat_ui';
import {ChatUiColors as Colors} from '../colors';
import moment from 'moment';
interface MessageItemProps {
  item: Message;
  sender: ChatListDataProps;
}
const MessageItem = ({item, sender}: MessageItemProps) => {
  const {message, type, time} = item;
  const {image} = sender;

  return (
    <View
      style={[
        styles.container,
        {alignItems: type === 'received' ? 'flex-start' : 'flex-end'},
      ]}>
      {type === 'received' ? (
        <View style={[styles.messageContainer]}>
          <Image style={styles.thumb} source={{uri: image}} />
          <View>
            <View style={styles.messageBoxReceive}>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={{alignSelf: 'stretch', alignItems: 'flex-end'}}>
              <Text style={styles.time}>
                {moment(new Date(time)).format('LT')}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.messageContainer,
            {width: '80%', justifyContent: 'flex-end'},
          ]}>
          <View>
            <View style={styles.messageBoxSend}>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={{alignSelf: 'stretch', alignItems: 'flex-start'}}>
              <Text style={styles.time}>
                {moment(new Date(time)).format('LT')}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  messageContainer: {
    flexDirection: 'row',
    width: '75%',
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  messageBoxReceive: {
    padding: 20,
    marginLeft: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.lightBlue,
  },
  messageBoxSend: {
    padding: 20,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.lightOrange,
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
  },
  time: {
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 12,
    color: Colors.lightText,
  },
});

export default MessageItem;
