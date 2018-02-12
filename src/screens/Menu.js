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
import {users} from '../config/data'


var data = require("../config/data");
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

//const user =
export default class Menu extends Component {

  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render(){
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
              <ListItem
                key={user.login.username}
                //roundAvatar
                avatar={{ uri: user.picture.thumbnail }}
                title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                subtitle={user.email}
                onPress={() => this.onLearnMore(user)}//takes data as param and funciton is called
              />
            ),
          )
        }
        </List>

      </ScrollView>

    );
  }

}
