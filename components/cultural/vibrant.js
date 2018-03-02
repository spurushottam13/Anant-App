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
export default class Vibrant extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Strings</Text>
      </View>
      <Content>
              <CardItem>
              <Body>
                <Text>“Music gives soul to the universe Wings to the mind, Flight to the imagination, And life to everything” – Plato Life is all about playing. Let’s make a difference and make playing an instrument a joyous event. Let the Music take you away & let the music set you free during Instrument Playing Competition. Get ready coz its ANANT 2018 –World of Fiction!</Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                <H3>RULES</H3>
                <H3>DAY : 1</H3>
                <H3>TIME : 15:00 onwards</H3>
                <H3>VENUE : AUDITORIUM</H3>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
              <Text>• Each team or participant could play one or more instruments</Text>
              <Text>• Each team can have not more than 4 members</Text>
              <Text>• Each team will be given 4-6 minutes to showcase their performance</Text>
              <Text>• Participants must bring their own equipment</Text>
              <Text>• All forms of music are allowed</Text>
              <Text>• The decision of the judges will be final and un-questionable</Text>
              <Text>• Participants must carry their college id cards otherwise their participation would be cancelled</Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                <H3>MARKING & JUDGING CRITERIA (60 MARKS) :-</H3>
                </Body>
                </CardItem>
                <CardItem>
                <Body>
                <Text>• Rhythm – 20 marks</Text>
                <Text>• Transition – 10 marks</Text>
                <Text>• Grace & Energy – 10 marks</Text>
                <Text>• Crowd Interaction and overall impact – 10 marks</Text>
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
