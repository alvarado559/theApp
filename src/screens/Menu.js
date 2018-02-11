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
import { List, ListItem } from 'react-native-elements'
//import {Button} from 'react-native-elements';

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


export default class Menu extends Component {
  render(){
    return (
      <ScrollView>
        <List>
          <ListItem
            title='row-1'
          />
          <ListItem
            title='row-2'
          />
        </List>

      </ScrollView>

    );
  }

}
