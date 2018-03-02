import React, { Component } from 'react';
import { Container, Header, Button,Content, Card, CardItem, Body, Text } from 'native-base';
import BlindCoding from './cse/webHackthon.js';
import WebHackthon from './cse/blindcoding.js';
import { StackNavigator } from 'react-navigation';
export default class CSE extends Component {
  static navigationOptions = {
    title: "Anant 2018"
  }
  render() {
    const { state, navigate } = this.props.navigation;

    return (
      <Container>
      <Button block onPress={() => navigate("WebHackthon", { screen: "WebHackthon"})}>
          <Text>Web Hackthonss</Text>
        </Button>
        <Button block onPress={() => navigate("BlindCoding", { screen: "BlindCoding"})}>
            <Text>BlindCoding</Text>
          </Button>
      </Container>
    );
  }
}
