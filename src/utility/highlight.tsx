/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {View, ViewStyle, StyleSheet, StyleProp} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {Easing} from 'react-native-reanimated';
import {onGestureEvent, timing, delay, contains} from 'react-native-redash';

export interface Props {
  style: StyleProp<ViewStyle>;
  underlay: string;
  onPress: () => void;
  children: ReactNode;
  disabled?: boolean;
  val: Animated.Value<number>;
  onPressIn: () => void;
  onPressOut: () => void;
  onLongPress: () => void;
}

const {
  Value,
  event,
  Clock,
  useCode,
  block,
  cond,
  eq,
  set,
  call,
  onChange,
} = Animated;
const {BEGAN, FAILED, CANCELLED, END, UNDETERMINED} = State;

const Highlight = ({
  onPress,
  onPressIn,
  onPressOut,
  style,
  val,
  children,
  underlay,
}: Props) => {
  const opacity = val ? val : new Value(0);
  const clock = new Clock();
  const shouldSpring = new Value(-1);
  const state = new Value(UNDETERMINED);
  // Animating Opacity

  useCode(
    () =>
      block([
        cond(eq(state, BEGAN), set(shouldSpring, 1)),
        cond(contains([FAILED, CANCELLED], state), set(shouldSpring, 0)),
        onChange(state, cond(eq(state, END), call([], onPress))),
        cond(eq(state, END), set(shouldSpring, 0)),
        onChange(
          shouldSpring,
          cond(eq(shouldSpring, 1), call([], onPressIn), call([], onPressOut)),
        ),
        cond(
          eq(shouldSpring, 1),
          set(
            opacity,
            timing({
              clock,
              from: opacity,
              to: 1,
              duration: 100,
              easing: Easing.inOut(Easing.ease),
            }),
          ),
        ),
        cond(
          eq(shouldSpring, 0),
          set(
            opacity,
            timing({
              clock,
              from: opacity,
              to: 0,
              duration: 100,
              easing: Easing.inOut(Easing.ease),
            }),
          ),
        ),
      ]),
    [],
  );
  return (
    <TapGestureHandler
      onHandlerStateChange={event([
        {
          nativeEvent: {
            state: state,
          },
        },
      ])}>
      <Animated.View style={[style, styles.container]}>
        {children}
        <Animated.View
          pointerEvents="none"
          style={{
            ...styles.overlay,
            opacity,
            backgroundColor: underlay,
          }}
        />
      </Animated.View>
    </TapGestureHandler>
  );
};

Highlight.defaultProps = {
  underlay: 'rgba(0,0,0,0.05)',
  onPress: () => {},
  style: {},
  children: null,
  disabled: false,
  onLongPress: () => {},
  onPressIn: () => {},
  onPressOut: () => {},
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Highlight;
