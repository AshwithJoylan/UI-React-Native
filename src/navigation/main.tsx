import 'react-native-gesture-handler';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {
  createAppContainer,
  CreateNavigatorConfig,
  NavigationStackRouterConfig,
  NavigationRouteConfigMap,
  NavigationNavigator,
} from 'react-navigation';

import Test from '../Test';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackNavigationConfig,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';

import {
  Home,
  Profiles,
  Pay,
  PayDetails,
  Jewelry1,
  Chrome,
  Logins,
  CardSelection,
  MainList,
  ChatDetails,
  Chat,
} from '../containers';

const screens: NavigationRouteConfigMap<
  StackNavigationOptions,
  StackNavigationProp
> = {
  Test,
  Home,
  Jewelry1,
  Profiles: {
    screen: Profiles,
    navigationOptions: {
      headerShown: false,
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      headerShown: false,
    },
  },
  ChatDetails: {
    screen: ChatDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
  Pay: {
    screen: Pay,
    navigationOptions: {
      headerShown: false,
    },
  },
  Logins,
  CardSelection,
  PayDetails: {
    screen: PayDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
  Chrome: {
    screen: Chrome,
    navigationOptions: {
      title: 'Tabs',
    },
  },
  MainList: {
    screen: MainList,
    navigationOptions: {
      title: 'Screens',
    },
  },
};

// const txConfig = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

// Stack Config
const config: CreateNavigatorConfig<
  StackNavigationConfig,
  NavigationStackRouterConfig,
  StackNavigationOptions,
  StackNavigationProp
> = {
  mode: 'card',
  // headerMode: 'none',
  initialRouteName: 'Chat',
  defaultNavigationOptions: {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  },
};

const stack = createStackNavigator(screens, config);
export default createAppContainer(stack as NavigationNavigator<{}, unknown>);
