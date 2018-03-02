import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body,Icon,Left, Text,H1,H3 } from 'native-base';
import { View,StyleSheet,} from 'react-native';
import { NavigationActions } from 'react-navigation'
const styles= StyleSheet.create({
  sec:{
    backgroundColor:'#1b83f0',height:'20%',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',
  },
  header:{
    color :'white',marginLeft:15,fontSize:40,fontFamily:'Raleway-Light'
  },
  icon:{
    color :'white',marginLeft:20,
  },

})
export default class DustRacer extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Dust Racer</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
              Ready- to- run race. Racing through the zigzag road, mud –pit slopes and avoiding many more obstacles and still finishing within the minimum time ,it’s not a matter of roadside racer.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>{`General Rule:
Each team should consist a maximum of 2 members.
Each team should have unique participation i.e. no two teams can have even a single participant common.
The team members can be from different institutes or colleges with their valid id card.
The organizing committee reserves right to change the rules at any time and changes will be notified to the participants at that time.
The decision of the organizing committee will be final and binding.
Bot Specification :
The length, breadth and height of bot must not exceed 30 cm at any part of the game.
The bot may be controlled by wired or wireless control mechanism.
No Lego parts or any other readymade mechanism is allowed to be used although ready-made gear assemblies, chassis or other components are permitted.
The participants must bring their own power supply and it should not exceed 18 V between any two points on the circuit.`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Abhinav kumar 70875 10401</Text>
            <Text>Deepak Kumar 96545 71722</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
