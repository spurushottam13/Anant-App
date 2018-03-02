import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body,Icon,Left, Text,H1,H3 } from 'native-base';
import { View,StyleSheet,} from 'react-native';
import { NavigationActions } from 'react-navigation'
const styles= StyleSheet.create({
  sec:{
    backgroundColor:'#1b83f0',height:'20%',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',
  },
  header:{
    color :'white',marginLeft:15,fontSize:38,fontFamily:'Raleway-Light'
  },
  icon:{
    color :'white',marginLeft:20,
  },

})
export default class LiveWire extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Virsa:The Legacy</Text>
      </View>
      <Content>
          <CardItem>
              <Body>
                <Text>Volkstanz</Text>
                <Text>Dancing is nothing but dreaming with your feet!</Text>
              </Body>
          </CardItem>
          <CardItem>
            <Body>
              <H3>  RULES</H3>
              <H3>  DAY : 3</H3>
              <H3>  TIME : 16:00 onwards</H3>
              <H3>  VENUE : MAIN STAGE</H3>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>• Participants must carry their ID cards with them else their participation will be cancelled</Text>
              <Text>• All forms of folk dances (whether modern or traditional) are acceptable (Bhangra, Giddha, Natti, Luddi, Malwai , etc. )</Text>
              <Text>• Each team is allowed to perform between 8-12 minutes. In the event that a team exceeds the 12 minute time limit a 10 point deduction will be made from each judge’s evaluation form</Text>
              <Text>• Teams must be comprised of at least 8 dancers and no more than 16 dancers. A dholi and/or singer may also be on the team aside from the 16 dancers. Exceptions may be made at the discretion of the organizers</Text>
              <Text>• Time starts as soon as your music begins (including any instrumental or vocal introduction)</Text>
              <Text>• Any sort of traditional instruments can be used in the performance</Text>
              <Text>• Each participant must pay a Rs50 entry fee</Text>
              <Text>• No member shall be added or replaced to the team on the last moment</Text>
              <Text>• All team members must provide the appropriate identification when they check in (Photo id). Please note Photo Id includes–(College Identification Card,Adhaar card,Driving Licence)</Text>
              <Text>• Each team must bring a soft copy of the track in a Pendrive and DVD with their music. The soft copy should be submitted to the organisers 2 hours before the event</Text>
              <Text>• All teams must provide their team name and the name of the members during registrations</Text>
              <Text>• The decision given by the judges will be final and unquestionable</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <H3>  MARKING & JUDGING CRITERIA (60 MARKS) :-</H3>
                <Text>Opening - 10 marks</Text>
                <Text>Costumes - 10 marks</Text>
                <Text>Synchronization, Fluidity, Formations, Transitions - 25 marks</Text>
              <Text>  Grace, Energy – 15 marks</Text>
                <Text>Traditional Steps -10 marks</Text>
                <Text>Face Expressions - 10 marks</Text>
                <Text>Instruments Used - 5 marks</Text>
                <Text>Ending – 10</Text>
            </Body>
            </CardItem>
          <CardItem footer>
              <Text>ENTRY FEE- RUPEES 50 PER PERSON</Text>
            </CardItem>
        </Content>
      </Container>
    );
  }
}
