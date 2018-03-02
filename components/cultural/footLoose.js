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
export default class FootLoose extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Foot Freakers</Text>
      </View>
      <Content>
          <CardItem>
              <Body>
                <Text>
                Dance is the performance art form consisting of purposefully selected sequences of human movement. The trust expression of a person is its dance and music. Bodies never lie. Dancing gives you those movements when you let yourself loose and let the passion from your soul away your body with the rhythm “ANANT 2018” brings together the best dances under one roof. So get your body out of the way and let your spirit soar and understand the hidden language of soul with us.
                </Text>
              </Body>
          </CardItem>
          <CardItem>
              <Body>
                <H3>RULES</H3>
                <H3>DAY : 2</H3>
                <H3>TIME : 20:00 onwards</H3>
                <H3>VENUE : MAIN STAGE</H3>
              </Body>
          </CardItem>
          <CardItem>
              <Body>
              <Text>• Participants must carry their ID cards with them else their participation will be cancelled</Text>
              <Text>• Time limit 7-12 minutes for each performance. Negative marking for exceeding the time limit</Text>
              <Text>• No on stage limit</Text>
              <Text>• Each team can have 5-30 members including coordinators</Text>
              <Text>• The participants are requested to bring 2 CD’s to avoid the technical disturbances</Text>
              <Text>• No props will be provided by the coordinators. Participants can carry their own props. Use of fire, water or any other type of inappropriate props is not allowed</Text>
              <Text>• Dance performance should not convey any indecent gestures</Text>
              </Body>
          </CardItem>
          <CardItem>
              <Body>
              <H3>MARKING & JUDGING CRITERIA (60 MARKS):- </H3>
              <Text>• Choreography- 10 marks</Text>
                <Text>• Synchronization and coordination- 10 marks</Text>
                <Text>• Creativity of steps- 10 marks</Text>
                <Text>• Grace, energy and expression- 10 marks</Text>
                <Text>• Stage utilization and overall impact- 10 marks</Text>
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
