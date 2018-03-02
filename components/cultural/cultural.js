import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Right,Icon,Body } from 'native-base';
export default class CULTURAL extends Component {
  static navigationOptions = {
    title: "Culutral Events",
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
                <ListItem first onPress={() => navigate("FootLoose", { screen: "FootLoose"})}>
                  <Body><Text>Foot Freakers</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem first onPress={() => navigate("LooseYourSelf", { screen: "LooseYourSelf"})}>
                  <Body><Text>Lose YourSelf</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={() => navigate("HallaBol", { screen: "HallaBol"})}>
                  <Body><Text>Nukkad Natak</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("LiveWire", { screen: "LiveWire"})}>
                  <Body><Text>Virsa:The Legacy</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("Rampage", { screen: "Rampage"})}>
                  <Body><Text>Spotlight</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("Vibrant", { screen: "Vibrant"})}>
                  <Body><Text>Strings</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem last  onPress={() => navigate("Vocoloid", { screen: "Vocoloid"})}>
                  <Body><Text>Unplugged</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
