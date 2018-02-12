
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  Icon
} from 'react-native-elements'

import App from '../screens/App';
import Menu from '../screens/Menu';
import News from '../screens/News';
import Staff from '../screens/Staff';
import Events from '../screens/Events';
import Laws from '../screens/Laws';
import ItemDetail from '../screens/ItemDetail';



export const MenuStack = StackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu',
    },
  },
  Details: {
    screen: ItemDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});



export const Tabs = TabNavigator({
  Menu: {
    screen:MenuStack,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon:({ tintColor }) => <Icon type='foundation' name="list" size={35} color={tintColor} />
    },
  },
  News:{
    screen:News,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon:({ tintColor }) => <Icon  name='feedback' color={tintColor} />
    },
  },
  Staff:{
    screen:Staff,
    navigationOptions: {
      tabBarLabel: 'Staff',
      tabBarIcon:({ tintColor }) => <Icon  name='people' color={tintColor} />
    },
  },
  Events:{
    screen:Events,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon:({ tintColor }) => <Icon  name='assignment' color={tintColor} />
    },
  },
  Laws:{
    screen:Laws,
    navigationOptions: {
      tabBarLabel: 'Laws',
      tabBarIcon:({ tintColor }) => <Icon  name='visibility' color={tintColor} />
    },
    //create details screen, and stack navigation
  },
});
