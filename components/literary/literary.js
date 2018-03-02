import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Right,Icon,Body } from 'native-base';
export default class Literary extends Component {
  static navigationOptions = {
    title: "Literary Events",
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
                <ListItem first onPress={() => navigate("EnglishDebate", { screen: "EnglishDebate"})}>
                  <Body><Text>English Debate</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={() => navigate("MockParliament", { screen: "MockParliament"})}>
                  <Body><Text>Mock Parliament</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={() => navigate("Paricharcha", { screen: "Paricharcha"})}>
                  <Body><Text>Paricharcha</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={() => navigate("PenYourFiction", { screen: "PenYourFiction"})}>
                  <Body><Text>Pen Your Fiction</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
