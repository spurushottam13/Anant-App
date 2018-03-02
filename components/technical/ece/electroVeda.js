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
export default class ElectroVeda extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Electro Veda</Text>
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
                This is a multiple round “on the spot” event, in which first round is a theoretical MCQ test based on electronics and every correct answer earns the participant a virtual money. Using this money participant will move to further round, where they will buy components and make the listed electronic circuits in a given time. Once a team completes a circuit’ it can then sell the circuit, in return of more virtual money .A team can buy new components and build a new circuit and sell it to earn more money .The team with maximum money at the end of predefined time will be considered as winner.
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
                <H3>Round 1 (elimination and capital building round)</H3>
                <Text>
{`This is a pen-paper based test. Questions will test participants’ basic knowledge of electronics.
Every correct answer will earn participant team a definite amount of virtual money.
Minimum amount of money should be earned in order to qualify to the next round.`}
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Round 2 (manufacturing and marketing)</H3>
            <Text>
            {`A list of available electronic components with their prices,and a separate list of electronic circuit that can be built with those components will be provided to each team.
Team has to purchase the required components using their virtual money(earned in Round 1) and then build any of the enlisted circuit on Protius.
Each of the enlisted circuit will have a predefined range of market price.
Once a team completes a circuit, they have to sell that circuit to earn more virtual money.`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules and Regulations</H3>
            <Text>
            {`A team can consist of maximum 4 participants. Each participant must have a valid ID card.
Penalty price will be mentioned on the list given at the time of event.
Datasheets for IC’s in the component list will be provided at the time of event.
The selling time will be counted in the given 2 hours time. It depends on the team, how quickly they can sell the circuit by efficiently explaining their circuit to the judge.
If all judges at a particular time are busy judging other teams , then the time for which a team will have to wait in line will not be counted in the 2 hrs time.
A particular circuit cannot be made more than once.
At the end of 2 hours the team which has maximum virtual money in hand, either in the form of cash or possessed components will win.
No online help is allowed during the event.
Participants are allowed to carry personal laptops. But pen drive and any sort of material relating to electronics are strictly prohibited.
`}
            </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Rampriya - 9504496228</Text>
            <Text>Abhishek - 7087133346</Text>
            <Text>Satyam - 7087133321</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
