/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';
import styled from 'styled-components/native';
import {Button} from 'react-native-elements';

const Container = styled.View`
flex:1;
justifyContent: center;
alignItems: center;
flexDirection: column;
`;

const TextStyled = styled.Text`
fontSize: 20;
textAlign: center;
margin: 10px;
`;


export default class News extends Component {

  _onPressButton(){
    Alert.alert('You tapped the button')
  }

  render() {
    return (
      <Container>
        <TextStyled>
          Welcome to the news section!
        </TextStyled>
        <Button
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: '#ff4f00', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
          onPress={this._onPressButton}
        />

      </Container>


    );
  }
}
