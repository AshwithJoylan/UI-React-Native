import React, {ReactNode} from 'react';
import {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ViewStyle,
  StyleSheet,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  underlayColor: string;
  onPress: (event: GestureResponderEvent) => void;
  children: ReactNode;
  disabled?: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
  onLongPress: () => void;
}

const Highlight = (props: Props) => {
  const [opacity, setOpactity] = useState(0);
  // Animating Opacity
  const onPressIn = () => {
    setOpactity(1);
    props.onPressIn();
  };

  const onPressOut = () => {
    setOpactity(0);
    props.onPressOut();
  };

  return (
    <TouchableWithoutFeedback
      onLongPress={props.onLongPress}
      disabled={props.disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={props.onPress}>
      <View
        style={[
          {overflow: 'hidden', justifyContent: 'center', alignItems: 'center'},
          props.style,
        ]}>
        {props.children}
        <View
          pointerEvents="box-none"
          style={{
            ...styles.overlay,
            opacity,
            backgroundColor: props.underlayColor,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

Highlight.defaultProps = {
  underlayColor: 'rgba(0,0,0,0.05)',
  onPress: () => {},
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
});

export default Highlight;
