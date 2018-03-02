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
export default class RoboSoccer extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Robo Soccer</Text>
      </View>
      <Content>

            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                This event is a platform for participants to showcase their robotics talents and also to bring alive the football spirit. They are required to build two manually controlled bots capable of playing soccer on an arena specially designed for the robotic soccer match.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
                <H3>Problem statement</H3>
                <Text>
                To build one manually controlled bot capable of playing soccer on an arena specially designed for robotic soccer match. The event is aimed at testing flipping and hitting of ball and bot control. For communication with computer either wired or wireless communication may be used.
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
                <H3>Arena Specification</H3>
                <Text>
{`The soccer field will be 200cm long and 120cm wide.
Plastic (table tennis) ball will be used.
Goal posts will be 40cm wide.`}
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules and Regulation</H3>
            <Text>
            {`Each team is allowed to have one bot.
Weight should not be more than 1.5kg.
Organiser has rights to change the rule during the match if required.
Grabbing the ball is not allowed. So bots should not have any kind of grabbing mechanisms.
The bot must fit into a cube of (20x20x20) cm at all times. It may not expand at any time during the match beyond this size even for hitting the ball. Violating this clause will lead to immediate disqualification.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>GamePlay</H3>
            <Text>
            {`Teams will have to play a football match against other team. Teams will be divided into pools details of which will be provided at the starting of event.
Minutes of setup time will be provided to each team for pre-game setup and testing.
Each match will consist of two halves of 3 minutes each.
Ball will be placed at the center of the arena at the starting of the match.
In case of tie 2 min extra time will be given. The team to score first goal during the extra time will win the match. If no goal is scored during extra time, winner will be decided by penalty shoot outs during which 2 penalty shoots will be given to each team in turn. The better of two penalties will be considered to decide the winner.
After the first half, goals will be swapped.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Scoring</H3>
            <Text>
            {`A goal will be considered to be scored only if the ball has crossed the goal line completely.
Rules for Fouls:
Any kind of intentional damage caused to opponent team’s bot will be considered as foul. Intentional grabbing of the ball so as to make it impossible for other team to get the control of the ball will also be considered as foul.
A free kick will be given to other team in case of fouls during which bots of the team committing the foul will be freeze for 10 seconds and ball will be given to the other team.
If a foul is committed inside the D-area, penalty will be given.
Decision of the referee will be final and binding.
Following cases will attract immediate disqualification:
If a team fails to adhere to size specifications.
If a team damages the arena in any way.
If a team commits repeated fouls.
If a team fails to report in time.
If a team tries to intervene the game play without permission of the referee.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>
{`General Rule:
Each team should consist a maximum of 2 members.
Each team should have unique participation i.e. no two teams can have even a single participant common.
The team members can be from different institutes or colleges with their valid id card.
The organizing committee reserves right to change the rules at any time and changes will be notified to the participants at that time.
The decision of the organizing committee will be final and binding.
Bot Specification :
The length, breadth and height of bot must not exceed 30 cm at any part of the game.
The bot may be controlled by wired or wireless control mechanism.
No Lego parts or any other readymade mechanism is allowed to be used although ready-made gear assemblies, chassis or other components are permitted.
The participants must bring their own power supply and it should not exceed 18 V between any two points on the circuit.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Shubham - 8198099437</Text>
            <Text>Arun Yadav - 9646410887</Text>
            </Body>
            </CardItem>

      </Content>
      </Container>
    );
  }
  }
