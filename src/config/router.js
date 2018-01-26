
import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Icon
} from 'react-native-elements'

import App from '../screens/App';
import Menu from '../screens/Menu';
import News from '../screens/News';
import Staff from '../screens/Staff';
import Events from '../screens/Events';
import Laws from '../screens/Laws';

export const Tabs = TabNavigator({
  Menu: {
    screen:Menu,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon:({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  News:{
    screen:News,
  },
  Staff:{
    screen:Staff,
  },
  Events:{
    screen:Events,
  },
  Laws:{
    screen:Laws,
  }
});
