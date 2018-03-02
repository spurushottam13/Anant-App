import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body,Icon,Left, Text,H1,H3 } from 'native-base';
import { View,StyleSheet,} from 'react-native';
import { NavigationActions } from 'react-navigation'
const styles= StyleSheet.create({
  sec:{
    backgroundColor:'#1b83f0',height:'20%',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',
  },
  header:{
    color :'white',marginLeft:15,fontSize:42,fontFamily:'Raleway-Light'
  },
  icon:{
    color :'white',marginLeft:20,
  },

})
export default class DaVisibleCode extends Component {

  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Dazzle Coding</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                Dazzle Coding is an event in which the participants have to solve simple programs using C/C++/JAVA. Monitor screen would be turned off during the event (thus the code being invisible to the participants and the event getting its name). </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>Participants must carry their ID cards with them else their participation will be cancelled</Text>
            <Text>Single Participant</Text>
            <Text>No Paper and Pen will be provided</Text>
            <Text>Monitor Screen would be turned off during the event</Text>
            <Text>Maximum Time limit is 30 min</Text>
            <Text>2 questions should be attempted out of given 4 options</Text>
            <Text>In case if a candidate has attempted more than 2 questions, best two of the attempted questions would be considered</Text>
            <Text>Use of phones or any other electronic gadgets aren’t allowed</Text>
            <Text>The result declared by the examiner would be the final</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Marking criteria</H3>
            <Text>Based On Accuracy</Text>
            <Text>Time Complexity</Text>
            <Text>Error Less Code</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Varun Mehta 9779078000</Text>
            <Text>Sudeep Vig 9569991994</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
}
