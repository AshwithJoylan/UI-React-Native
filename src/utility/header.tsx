/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement} from 'react';
import {Left, Right, Body, Header, Title} from 'native-base';
import {StyleProp, ViewProps} from 'react-native';
import Metrics from '../metrics';

// Header props
export interface HeaderProps {
  style: StyleProp<ViewProps>;
  renderLeft?: ReactElement;
  renderRight?: ReactElement;
  title?: string;
  background: string;
  centeredTitle: boolean;
  bordered: boolean;
  borderColor: string;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const HeaderComponent = (props: HeaderProps) => {
  return (
    <Header
      androidStatusBarColor="rgba(0,0,0,0.4)"
      iosBarStyle="dark-content"
      style={[
        {
          marginTop: Metrics.isAndroid ? Metrics.barHeight : 0,
          paddingLeft: 0,
          paddingRight: 0,
          borderBottomWidth: props.bordered ? Metrics.borderWidth : 0,
          borderBottomColor: props.borderColor,
          backgroundColor: props.background,
          elevation: 0,
        },
        props.style,
      ]}>
      <Left style={{flex: 1}}>{props.renderLeft}</Left>
      <Body
        style={{
          flex: 8,
          alignItems: props.centeredTitle ? 'center' : 'flex-start',
        }}>
        <Title
          style={[
            {color: 'black', fontWeight: 'bold'},
            props.fontSize && {fontSize: props.fontSize},
            props.fontWeight && {fontWeight: props.fontWeight},
          ]}>
          {props.title}
        </Title>
      </Body>
      <Right style={{flex: 1}}>{props.renderRight}</Right>
    </Header>
  );
};

HeaderComponent.defaultProps = {
  style: {},
  title: 'header',
  background: 'white',
  renderLeft: null,
  renderRight: null,
  bordered: true,
  centeredTitle: true,
  borderColor: 'black',
};

export default HeaderComponent;
