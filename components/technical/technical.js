import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem,Toast, Text,Right,Icon,Body } from 'native-base';
export default class Technical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }}
    static navigationOptions = {
    title: "Technical Events",
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
            <ListItem itemHeader first>
              <Text>CSE/IT</Text>
            </ListItem>
                <ListItem  onPress={() => navigate("DaVisibleCode", { screen: "DaVisibleCode"})}>
                  <Body><Text>Dazzle Coding</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={()=> Toast.show({
              text: 'This Event details are on Website',
              position: 'bottom',
              buttonText: 'Okay',
              duration:3000,
            })}>
                  <Body><Text>Free Style Coding</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem last  onPress={() => navigate("WebHackthon", { screen: "WebHackthon"})}>
                  <Body><Text>Web Hackthon</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={() => navigate("CseTQ", { screen: "CseTQ"})}>
                  <Body><Text>TECHQUILA</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem  onPress={() => navigate("Workshop", { screen: "Workshop"})}>
                  <Body><Text>Workshop</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
            <ListItem itemHeader>
              <Text>ECE</Text>
            </ListItem>
                <ListItem onPress={() => navigate("LineSequidor", { screen: "LineSequidor"})}>
                  <Body><Text>Line Sequidor </Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("RoboSoccer", { screen: "RoboSoccer"})}>
                  <Body><Text>Robo Soccer </Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("ElectroVeda", { screen: "ElectroVeda"})}>
                  <Body><Text>ElectroVeda</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("EceTQ", { screen: "EceTQ"})}>
                  <Body><Text>Ece Technical Quiz</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
            <ListItem itemHeader>
              <Text>Mech</Text>
            </ListItem>
                <ListItem onPress={() => navigate("DustRacer", { screen: "DustRacer"})}>
                  <Body><Text>Dust Racer</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
				<ListItem onPress={() => navigate("Bot", { screen: "Bot"})}>
                  <Body><Text>Bot Pull</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
                <ListItem onPress={() => navigate("HydroJet", { screen: "HydroJet"})}>
                  <Body><Text>Hydro Jet</Text></Body>
                  <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
