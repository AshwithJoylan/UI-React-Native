/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {SafeAreaView, withNavigation} from 'react-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import styles from '../styles/profile1';
import Main from './Profile_1_main';
import {Button} from '../utility';
import {NavProp} from '../nav';
import {
  PanGestureHandler,
  State,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Metrics from '../metrics';

const {
  Value,
  interpolate,
  event,
  cond,
  eq,
  set,
  useCode,
  lessThan,
  Extrapolate,
  spring,
  multiply,
  Clock,
  clockRunning,
  startClock,
  stopClock,
  block,
  divide,
  add,
} = Animated;

const d = new Date();

interface DataProps {
  added: number;
  image: string;
  description: string;
  likes: number;
}
interface ListProps extends Array<DataProps> {}
const data: ListProps = [
  {
    added: d.getTime(),
    image:
      'https://images.unsplash.com/photo-1530939986565-c0c17d114071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
    description: `I've made the descriptions as detailed as possible.`,
    likes: 120,
  },
  {
    added: d.getTime() - d.getTime() - 101001001010,
    image:
      'https://images.unsplash.com/photo-1569001178320-92c99c3f1a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description: 'This is character description generator.',
    likes: 12,
  },
  {
    added: d.getTime() - d.getTime() - 23123001001010,
    image:
      'https://images.unsplash.com/photo-1560237382-7f5dcd7501f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description: `I've made the descriptions as detailed as possible.`,
    likes: 200,
  },
  {
    added: d.getTime() - d.getTime() - 321001001010,
    image:
      'https://images.unsplash.com/photo-1516646085441-e1719f13aa3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    description: 'This is character description generator.',
    likes: 1000,
  },
];

interface Props {
  navigation: NavProp;
}

const runSpring = (
  clock: Animated.Clock,
  value: Animated.Value<number>,
  dest: Animated.Adaptable<number>,
) => {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    damping: 20,
    mass: 1,
    stiffness: 60,
    overshootClamping: false,
    restSpeedThreshold: 1,
    restDisplacementThreshold: 0.5,
    toValue: new Value(0),
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, 0),
      set(state.position, value),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
};

// Component
const translationY = new Value(0);

const Profile1 = ({navigation}: Props) => {
  let translateY = new Animated.Value(0);
  const velocityY = new Value(0),
    offsetY = new Value(0);
  const state = new Value(State.UNDETERMINED);

  const onGestureEvent = event(
    [
      {
        nativeEvent: {
          translationY,
          velocityY,
          state,
        },
      },
    ],
    {useNativeDriver: true},
  );

  useCode(() => {
    const clock = new Clock();
    const finalTranslateY = add(
      add(translationY, offsetY),
      multiply(0.2, velocityY),
    );
    const point = cond(
      lessThan(finalTranslateY, 100),
      -Metrics.height +
        (Metrics.height * 0.6 -
          Metrics.barHeight -
          (Metrics.isAndroid ? 20 : 30)),
      0,
    );
    return block([
      cond(
        eq(state, State.END),
        [
          set(translateY, runSpring(clock, translateY, point)),
          set(offsetY, translationY),
          translateY,
        ],
        [
          cond(eq(state, State.BEGAN), [
            stopClock(clock),
            set(offsetY, translationY),
            // set(translateY, translationY),
          ]),
          set(
            translateY,
            add(translateY, divide(add(translationY, offsetY), 2)),
          ),
        ],
      ),
    ]);
  }, []);

  const ty = interpolate(translateY, {
    inputRange: [
      -Metrics.height +
        (Metrics.height * 0.6 -
          Metrics.barHeight -
          (Metrics.isAndroid ? 20 : 30)),
      0,
    ],
    outputRange: [
      -Metrics.height +
        (Metrics.height * 0.6 -
          Metrics.barHeight -
          (Metrics.isAndroid ? 20 : 30)),
      0,
    ],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'never'}}
      style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.05)"
        barStyle="dark-content"
      />
      <Main y={translateY} />

      <PanGestureHandler
        activeOffsetY={[-10, 10]}
        onHandlerStateChange={onGestureEvent}
        onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[styles.listHeader, {transform: [{translateY: ty}]}]}>
          <View style={[styles.listHeaderContainer]}>
            <Text style={styles.listTitle}>Feed</Text>
          </View>
          <ScrollView contentContainerStyle={styles.listContainer}>
            {data.map(item => (
              <View style={styles.listItem}>
                <View style={styles.itemHeader}>
                  <Image
                    source={require('../images/payProfile.jpeg')}
                    style={styles.itemProfileImage}
                  />
                  <View style={styles.itemHeaderTitle}>
                    <Text style={styles.name}>King Davis</Text>
                    <Text style={styles.added}>
                      {moment(item.added).calendar()}
                    </Text>
                  </View>
                  <Button
                    underlayColor="rgba(255,255,255,0.1)"
                    style={styles.itemProfileImage}>
                    <IonIcon name="md-more" color="white" size={28} />
                  </Button>
                </View>
                <View style={styles.itemDescription}>
                  <View style={styles.itemDesc}>
                    <Text style={styles.descText}>{item.description}</Text>
                  </View>
                  <Image
                    resizeMode="cover"
                    source={{uri: item.image}}
                    style={styles.itemImage}
                  />
                </View>
                <View style={[styles.itemHeader, {height: 50, marginTop: 20}]}>
                  <Button
                    underlayColor="rgba(255,255,255,0.1)"
                    style={styles.bottomBox}>
                    <IonIcon name="ios-heart" color="white" />
                    <Text style={styles.likeText}>
                      {item.likes.toLocaleString('en-EU')}
                    </Text>
                  </Button>
                  <Button
                    underlayColor="rgba(255,255,255,0.1)"
                    style={styles.bottomBox}>
                    <IonIcon name="ios-heart" color="white" />
                    <Text style={styles.likeText}>Comment</Text>
                  </Button>
                  <Button
                    underlayColor="rgba(255,255,255,0.1)"
                    style={styles.bottomBox}>
                    <IonIcon name="ios-heart" color="white" />
                    <Text style={styles.likeText}>Share</Text>
                  </Button>
                </View>
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
      <Button
        onPress={() => navigation.goBack()}
        style={[styles.headerButton, {left: 10}]}>
        <IonIcon name="ios-arrow-back" color="black" size={30} />
      </Button>
      <Button
        onPress={() => navigation.goBack()}
        style={[styles.headerButton, {right: 10}]}>
        <IonIcon name="md-more" color="black" size={30} />
      </Button>
    </SafeAreaView>
  );
};

export default withNavigation(Profile1);
