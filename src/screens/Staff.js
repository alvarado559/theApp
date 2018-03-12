/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import EmployeeFeature from '../components/EmployeeFeature.js';
import {users} from '../config/data'
import { List, ListItem } from 'react-native-elements'
import EmployeeList from '../components/EmployeeList.js';
import AppHeader from '../components/Header.js';

var data = require("../config/data");

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = styled.View`
flex:1;
`;

const TextStyled = styled.Text`
fontSize: 20;
textAlign: center;
margin: 10px;
`;


export default class Staff extends Component {

  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
    <ScrollView>
      <AppHeader/>
      <Container>
        <EmployeeFeature/>
        <EmployeeList/>
      </Container>
    </ScrollView>

    );
  }
}
