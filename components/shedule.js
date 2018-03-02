import React, { Component } from 'react';
import { WebView } from 'react-native';
export default class Shedule extends Component {
  static navigationOptions = {
    title: "Shedule",
    headerTintColor: "white",
    headerStyle:{
        backgroundColor:'#4285f4'
    }
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: 'https://anant-71926.firebaseapp.com/shedule.html'}}
        renderLoading={this.renderLoadingView} startInLoadingState={true}
      />
    );
  }
}
