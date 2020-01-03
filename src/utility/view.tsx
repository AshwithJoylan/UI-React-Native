import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface CustomViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  flex?: number | undefined;
  background?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
// Component
const CustomView = ({
  style,
  children,
  background,
  flex,
  direction,
  justify,
  align,
}: CustomViewProps) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          backgroundColor: background,
          flex,
          justifyContent: justify,
          alignItems: align,
        },
        {...style},
      ]}>
      {children}
    </View>
  );
};

export default CustomView;
