
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { List, Card, ListItem, Button } from 'react-native-elements'
import styled from 'styled-components/native';
import {users} from '../config/data'



var data = require("../config/data");

//<!--gonna have to turn this into a ScrollView in Staff.js i think-->

export default class EmployeeList extends Component {

  render(){
    return(
      //okay design the card
        <List>
          {users.map((user) => (
              <ListItem
                key={user.login.username}
                //roundAvatar
                avatar={{ uri: user.picture.thumbnail }}
                title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                subtitle={user.email}
                onPress={() => this.onLearnMore(user)}//takes data as param and funciton is called
                hideChevron
              />
            ),
          )
        }
        </List>
    );
  }

}
