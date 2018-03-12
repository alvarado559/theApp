
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native';
import { Card, ListItem, Button, Header } from 'react-native-elements'


 const Container = styled.View`
 flex:1;
 background-color: #507cc4;
 `;

export default class AppHeader extends Component {

  render(){
    return(

      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Meet the Staff', style: { color: '#fff' } }}
      />

    );
  }

}
