import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
export default class Bold extends Component {
  render() {
    return(<Bold>
      <Text style={{fontWeight:'bold'}}>{this.props.children}</Text>
    </Bold>);    
  }
}
