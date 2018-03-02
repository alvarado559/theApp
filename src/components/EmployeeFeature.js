
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import styled from 'styled-components/native';

const users =
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
//<!--gonna have to turn this into a ScrollView in Staff.js i think-->
 const Container = styled.View`
 flex:1;
 background-color: #507cc4;
 `;

export default class Counter extends Component {

  render(){
    return(
      //okay design the card
      <Container>
      <Card
        title='Featured Staff Member'
        image={require('../images/felix.jpg')}
        >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Verdana'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />

      </Card>
      </Container>
    );
  }

}
