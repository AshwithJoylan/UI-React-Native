import React from 'react';
import {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from '../styles/jewelry_buy';
import {NavProp} from 'src/nav';
import {withNavigation, SafeAreaView} from 'react-navigation';

interface Props {
  navigation: NavProp;
}

// Component
const Jewelry1 = ({navigation}: Props) => {
  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.05)"
      />
    </SafeAreaView>
  );
};

export default withNavigation(Jewelry1);

interface DataItemProps {
  title: string;
  colors: Array<string>;
  ratings?: number;
  comments?: number;
  id: number;
  width: number;
  weight: number;
  material: string;
  description: string;
  backdrop: string;
  image: string;
}

interface DataProps extends Array<DataItemProps> {}

const data: DataProps = [
  {
    title: 'Rose Gold Swirl Cross Over ring',
    colors: ['#E2C4BB', '#F1E0B0', '#EFEAE3'],
    ratings: 3,
    comments: 12,
    id: 12,
    width: 0.2,
    image: require('../images/ring1.png'),
    weight: 18.0,
    material: 'Rose gold, Gold, Titanium',
    backdrop:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    description:
      'Rose Gold Ring Designs: The New Classic As a connoisseur of fine accessories, you might have associated the colour with romance, cuteness, femininity, and delicacy but rarely with elegance or sophistication.',
  },
  {
    title: 'Heart Banquet Ring in Rose Gold',
    colors: ['#E2C4BB', '#F1E0B0', '#EFEAE3'],
    ratings: 4,
    comments: 25,
    id: 16,
    width: 0.3,
    weight: 16.0,
    backdrop:
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    material: 'Rose gold, Gold, Titanium',
    description:
      'Rose Gold Ring Designs: The New Classic As a connoisseur of fine accessories, you might have associated the colour with romance, cuteness, femininity, and delicacy but rarely with elegance or sophistication.',
    image: require('../images/ring2.png'),
  },
  {
    title: 'Horseshoe Ring Rose Gold',
    colors: ['#E2C4BB', '#F1E0B0', '#EFEAE3'],
    ratings: 5,
    comments: 43,
    id: 16,
    width: 0.2,
    weight: 12.0,
    image: require('../images/ring3.png'),
    backdrop:
      'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    material: 'Rose gold, Gold, Titanium',
    description:
      'Rose Gold Ring Designs: The New Classic As a connoisseur of fine accessories, you might have associated the colour with romance, cuteness, femininity, and delicacy but rarely with elegance or sophistication.',
  },
];
