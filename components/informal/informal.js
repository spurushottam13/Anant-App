import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem,Toast,Text,Right,Icon,Body } from 'native-base';
export default class Informal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }}
  static navigationOptions = {
    title: "Informal Events",
    headerTintColor: "white",
    headerStyle:{
        backgroundColor:'#4285f4'
    }
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor:'white'}}>
        <Content>
          <List>
                <ListItem first onPress={()=> Toast.show({
              text: 'Informal events details are on  Website',
              position: 'bottom',
              buttonText: 'Okay',
              duration:3000,
            })}>
                  <Body><Text>AdMad</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={()=> Toast.show({
              text: 'Informal events details are on  Website',
              position: 'bottom',
              buttonText: 'Okay',
              duration:3000,
            })}>
                  <Body><Text>Bhangra Battles</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={()=> Toast.show({
              text: 'Informal events details are on  Website',
              position: 'bottom',
              buttonText: 'Okay',
              duration:3000,
            })}>
                  <Body><Text>Dance FaceOff</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={()=> Toast.show({
              text: 'Informal events details are on  Website',
              position: 'bottom',
              buttonText: 'Okay',
              duration:3000,
            })}>
                  <Body><Text>IPL Auction</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={()=> Toast.show({
              text: 'Informal events details are on  Website',
              position: 'bottom',
              buttonText: 'Okay',
              duration:3000,
            })}>
                  <Body><Text>Treasure Hunt</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
