import React, { Component } from 'react';
import { WebView } from 'react-native';
export default class Registration extends Component {
  static navigationOptions = {
    title: "Registration",
    headerTintColor: "white",
    headerStyle:{
        backgroundColor:'#4285f4'
    }
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: 'https://anant-71926.firebaseapp.com'}}
        renderLoading={this.renderLoadingView} startInLoadingState={true}
      />
    );
  }
}
