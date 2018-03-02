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
export default class EceTQ extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Electro Quiz</Text>
      </View>
      <Content>

            <CardItem>
            <Body>
                <H3>Register</H3>
                <Text>
                QRIOSITY is a technical quiz competition to be organized by the Department of ECE It is a one day inter-collegiate event which will consist of 2 rounds. The quiz event is expected to invoke curiosity in the bright minds to explore tremendous knowledge in a short period of time.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
                <H3>Eligibilty and Requirement</H3>
                <Text>
                All the interested students are eligible. They must have two members in their team for participating in the event.
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
                <H3>Event Guideline</H3>
                <Text>
{`There will be two rounds
First Round:
This round will be consisting of 30 questions related to Mechanical Engineering.
After evaluation, we will select three teams for next round.
Marking: Each question carries +3 marks for correct answer and (-1) for wrong answer.
Second Round:
We will take an open quiz round with three teams. They have to respond quickly during question session to receive more marks for their team.
Marking: Each question carries +3 marks for correct answer and (-1) for wrong answer.
We will decide the winner on the basis of their total marks.`}
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Laxman - 7087658638</Text>
            <Text>Satyam - 7087133321</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
