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
export default class LooseYourSelf extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Lose YourSelf</Text>
      </View>
      <Content>
          <CardItem>
          <Body>
                <Text>(SOLO DANCE COMPETITION): Dance like nobody is watching, Dance to express not to impress, Dance first , Think later , it is natural order, Hold your Seats and Beats as "ANANT-Twenty Seventeen" giving you an opportunity to dance with moon , to impress the world , to inspire the masses & to make them stunned by your moves.</Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                <H3>RULES</H3>
                <H3>DAY : 2</H3>
                <H3>TIME : 14:00 onwards</H3>
                <H3>VENUE : AUDITORIUM</H3>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
              <Text>• Each participant will be given 3-5 min to showcase their performance</Text>
              <Text>• Each participant will have to submit 2 copies of sound in a CD 2 hours before the event</Text>
              <Text>  • Props that are not dangerous or heavy are allowed. Organizers are not responsible for arrangement and clearance of props</Text>
              <Text>• Vulgarity or nudity will directly lead to disqualification</Text>
              <Text>• All dance forms are allowed</Text>
              <Text>• All participants should carry their college ID cards with them</Text>
              <Text>• The decision given by the judges will be final and un-questionable</Text>
              <Text>• Vaild college Photo ID card</Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
                <H3>MARKING & JUDGING CRITERIA (60 MARKS) :-</H3>
                <Text>• Choreography - 10 marks</Text>
                <Text>• Costumes -10 marks</Text>
                <Text>• Creativity of Steps-10 marks</Text>
                <Text>• Grace , Energy & Expression -10 marks</Text>
                <Text>• Stage Utilization & over-all Impact - 10 marks</Text>
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
