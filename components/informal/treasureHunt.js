import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
export default class TreasureHunt extends Component {

  static navigationOptions = {
    title: "Anant 2018"
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (

                <Text>
                   This is TreasureHunt
                </Text>
    );
  }
}
