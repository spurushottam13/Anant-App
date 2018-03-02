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
export default class LineSequidor extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Line Sequidor</Text>
      </View>
      <Content>

            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                Participate in this event to showcase your progess in creating dynamic bots. This event will check your electronics knowledge by applying critical application skills.So come and join the bandwagon to create and showcase bots here at ANANT!</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Eligibility and Requirements</H3>
            <Text>Each team will comprise maximum of 4 participants. Single member teams are also allowed.</Text>
            </Body>
            </CardItem>

            <CardItem>
            <Body>
            <H3>Technical Specification</H3>
            <Text>
            {`The bot should fit in the box of 25cm*25 cm*12 cm(l*b*h).
The bot should be fully autonomous i.e, it will not be allowed to touch after it is switched ON(except in case of full deviation from track).
The width of track will be 3 cm. The track will be of black colour on white background.
The voltage drop across any two terminals of the circuit must be less than 12 volt.
The bot must run of DC supply mounted onboard.
Use of lego kits(sensor module,motor driver module etc) will lead to disqualification.
The circuit ob breadboard are allowed but it is strongly recommended to have it on PCB.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>GamePlay</H3>
            <Text>
            {`There will only be a single round.
The bot must get checked by organizers before operation.
Teams can test their bot on a test track before final event.
Maximum 3 touches will be allowed(each touch makes 5 sec penalty).
In case of any tie ups winners will be decided based on minimum no. of errors and if there is any further ties then design of bot will be considered.
The bot can be tested on special track to demonstrate its ability to take sharper turns. However this is not mandatory a team can attempt it for bonus points only.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Rajat Sharma - 8699945687</Text>
            <Text>Tomin Abrahim - 8591520440</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
