import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
export default class MootCourt extends Component {

  static navigationOptions = {
    title: "Moot Court"
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (

                <Text>
                   This is MootCourt
                </Text>
    );
  }
}
