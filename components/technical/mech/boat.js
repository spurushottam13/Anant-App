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
export default class Bot extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Bot Pull</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                BOT PULL to you all. The show of strength but not for you. And of course, for your robot.
  Pull the opponent robot through the minimum distance and you win. Simply, its the tug of warof
  robots.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>{`1.Each team should consist of two members
2.No two teams can have single participant common.
3.The team members can be from different schools or colleges with valid ID cards
4.The organizing committee reserves the right to change any rule at any time as per the requirements.
5.The decision of the organizing committee will be final and binding.`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Bot Specification</H3>
            <Text>{`1.The length ,breadth and height of the robot must not exceed 30cm at any part of the game.
2.The bot may be controlled by wired or wireless mechanism.
3.No Lego parts or any other ready-made mechanism is allowed to be used although ready-made
chassis,gear assemblies etc. are permitted .
4.The participants must bring their own power supply and it should not exceed 18 V between any two
points of the circuit.
5.A bot must have a provision (hook or slot) to tie rope.(Rope will be provided by the organizers.)
6.The weight of the bot must not exceed 5 kg at any point of the game .`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Scoring Criteria</H3>
            <Text>{`1.The scoring will be done only during the 1 minute competition of robots.
2.There will be two rounds of 30 seconds each.
3.First round will be the elimination round.The winners of the first round will go to the second round.`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rounds</H3>
            <Text>{`ROUND-1 (ELIMINATION ROUND)
Teams for the next round will be selected on the basis of the number of participants.

ROUND-2
1. Selected teams will compete against each other and top two scorers will fight in the finals.
2. The teams for Final challenge will be selected on the basis of second round scores only.
3.If the scores tie,then the number of mistakes committed will be considered as the judgement criteria.
Further information will be given during the event.`}</Text>
            </Body>
            </CardItem>

            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Raman Sharma 9915755560</Text>
            <Text>Rohit Kumar 9569745540</Text>
            <Text>Mehak Sharma 7009194440</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
