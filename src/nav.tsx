import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationRoute, NavigationParams} from 'react-navigation';

export interface NavProp
  extends NavigationStackProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  > {}
