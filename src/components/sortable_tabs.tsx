import React from 'react';
import {StyleSheet} from 'react-native';
import Tab, {TAB_SIZE, TabProps} from './tab';
import {SafeAreaView} from 'react-navigation';
import {panGestureHandler, withSpringTransition} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

interface SortableCardProps extends TabProps {
  index: number;
  offsets: {x: Animated.Value<number>; y: Animated.Value<number>}[];
}

const {
  createAnimatedComponent,
  add,
  cond,
  eq,
  block,
  divide,
  useCode,
  and,
  multiply,
  set,
  Value,
  round,
} = Animated;

export const withOffset = ({
  offset,
  value,
  state: gestureState,
}: {
  offset: Animated.Adaptable<number>;
  value: Animated.Value<number>;
  state: Animated.Value<State>;
}) => {
  const safeOffset = new Value(0);
  return cond(
    eq(gestureState, State.ACTIVE),
    add(safeOffset, value),
    set(safeOffset, offset),
  );
};

const Safe = createAnimatedComponent(SafeAreaView);
export default ({tab, index, offsets}: SortableCardProps) => {
  const {
    state,
    translationX,
    translationY,
    velocityX,
    velocityY,
    gestureHandler,
  } = panGestureHandler();
  const zIndex = cond(eq(state, State.ACTIVE), 10, 1);
  const currentOffset = offsets[index];
  const x = withOffset({
    value: translationX,
    offset: currentOffset.x,
    state,
  });
  const y = withOffset({
    value: translationY,
    offset: currentOffset.y,
    state,
  });
  const offsetX = multiply(round(divide(x, TAB_SIZE)), TAB_SIZE);
  const offsetY = multiply(round(divide(y, TAB_SIZE)), TAB_SIZE);
  const translateX = withSpringTransition(x, {}, velocityX, state);
  const translateY = withSpringTransition(y, {}, velocityY, state);

  useCode(
    () =>
      block(
        offsets.map(offset =>
          cond(
            and(
              eq(offset.x, offsetX),
              eq(offset.y, offsetY),
              eq(state, State.ACTIVE),
            ),
            [
              set(offset.x, currentOffset.x),
              set(offset.y, currentOffset.y),
              set(currentOffset.x, offsetX),
              set(currentOffset.y, offsetY),
            ],
          ),
        ),
      ),
    [currentOffset.x, currentOffset.y, offsetX, offsetY, offsets, state],
  );
  return (
    <PanGestureHandler {...gestureHandler}>
      <Safe
        forceInset={{top: 'always'}}
        style={[
          styles.container,
          {
            zIndex,
            transform: [{translateX}, {translateY}],
          },
        ]}>
        <Tab {...{tab}} />
      </Safe>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: TAB_SIZE,
    height: TAB_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
