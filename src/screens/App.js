/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import News from './News';
import Staff from './Staff';
import Events from './Events';
import Laws from './Laws';
import Menu from './Menu';


//import { Tabs } from './config/router';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';
import styled from 'styled-components/native';
import {TabNavigator} from 'react-navigation';
import { Tabs } from '../config/router';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = styled.View`
justifyContent: center;
alignItems: center;
margin: 300px;
`;

const TextStyled = styled.Text`
fontSize: 20;
textAlign: center;
margin: 10px;
`;


export default class App extends Component {
  render() {
    return (
        <Tabs/>
    );
  }
}
/**

*/

AppRegistry.registerComponent('App', () => App);
