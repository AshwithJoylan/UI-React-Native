/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from '../styles/pay_details';
import {NavProp} from 'src/nav';
import {SafeAreaView, withNavigation} from 'react-navigation';
import {ParColors as Colors} from '../colors';
import Simple from 'react-native-vector-icons/FontAwesome';
import {Button} from '../utility';
interface Props {
  navigation: NavProp;
}

const symbols = ['€', '$', '¥'];

const but = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '<']];
// Component
const PayDetails = ({navigation}: Props) => {
  // State
  const [money, setMoney] = useState('0');
  const [symbol, setSymbol] = useState(1);

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.05)"
      />
      <View style={styles.top}>
        <Text style={styles.titleText}>SEND MONEY</Text>
        <View style={styles.symbols}>
          {symbols.map((item, i) => (
            <Text
              key={i.toString()}
              suppressHighlighting
              onPress={() => setSymbol(i)}
              style={[
                styles.symbolText,
                symbol === i && {color: Colors.secondary},
              ]}>
              {item}
            </Text>
          ))}
        </View>
        <View style={styles.number}>
          <Text style={styles.money}>{money}</Text>
          <View style={styles.dots}>
            {symbols.map((_, i) => (
              <View
                key={i.toString()}
                style={symbol === i ? styles.activeDot : styles.dot}
              />
            ))}
          </View>
        </View>
        <Button
          onPress={() => navigation.goBack()}
          style={[styles.headerIcon, {left: 10}]}>
          <Simple size={25} name="arrow-left" color={Colors.secondary} />
        </Button>
        <Button onPress={() => {}} style={[styles.headerIcon, {right: 10}]}>
          <Simple size={25} name="ellipsis-v" color={Colors.secondary} />
        </Button>
      </View>
      <View style={styles.bottom}>
        {but.map((numbers, i) => (
          <View key={i.toString()} style={styles.numberButtons}>
            {numbers.map(number => (
              <View key={String(number)} style={styles.numberButton}>
                <Button
                  onPress={() => {
                    if (number === '<') {
                      if (money.length === 1 && Number(money) > 0) {
                        setMoney('0');
                      } else if (money !== '0') {
                        setMoney(money.substring(0, money.length - 1));
                      }
                    } else if (number === '.') {
                      setMoney(String(money) + '.');
                    } else {
                      if (money.length === 1 && money === '0') {
                        setMoney(String(number));
                      } else {
                        setMoney(String(money) + String(number));
                      }
                    }
                  }}
                  underlayColor="rgba(254, 207, 175, 0.2)"
                  style={
                    number === '.' || number === '<'
                      ? styles.highlightLight
                      : styles.highlight
                  }>
                  <Text style={styles.highlighText}>{number}</Text>
                </Button>
              </View>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default withNavigation(PayDetails);
