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
export default class Rampage extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Spotlight</Text>
      </View>
      <Content>
          <CardItem>
          <Body>
                <Text>“Men will come marching with their herculean build, women dressed in elegance & gilt. Come along take a stylish walk down the memory lane, O’ fella cause it’s "Anant18" I walk with attitude because the world is beneath my toes, I see the cameras’ flash, capturing my oomph and my pose, I have arrived…I am the Star of the Show!!!</Text>
                <Text>A Brilliant mixture of flamboyance, Style and attitude that will redefine FASHION as you know it. We Promise to set your hearts racing as glamorous models set the ramp on fire with their attitude and creativity audacity, “ANANT-90’s NICHE” presents the Ultimate Fashion Extravaganza- where excitement levels reach dizzying heights as you become witness to the sensuous display of thought in form!!</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
                <H3>RULES</H3>
                <H3>DAY : 1</H3>
                <H3>TIME : 19:00 onwards</H3>
                <H3>VENUE : MAIN STAGE</H3>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
              <Text>• There will be 12-16 participants in each team</Text>
              <Text>• The time limit is 10 to 15 minutes</Text>
              <Text>• Fashion show will be theme based i.e. “World of Fiction”.</Text>
              <Text>• If the time limit gets exceeded then that team will be disqualified</Text>
              <Text>• Any form of obscenity/vulgarity will result in disqualification from event</Text>
              <Text>• Pre-recorded music should be brought in CDs (2 copies 2 hour before starting the event)</Text>
              <Text>• The decision given by the judges will be final and un-questionable</Text>
              <Text>• Participants must carry their ID cards with them else their participation will be cancelled</Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                <H3>MARKING & JUDGING CRITERIA (60 MARKS) :-</H3>
                <Text>• Theme based-10 marks</Text>
                <Text>• Ramp walk-10 marks</Text>
                <Text>• Creativity-5 marks</Text>
                </Body>
                </CardItem>
            <CardItem footer>
              <Text>ENTRY FEE- ₹50 PER PERSON</Text>
            </CardItem>
        </Content>
      </Container>
    );
  }
}
