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
export default class HallaBol extends Component {

  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Nukkad Natak</Text>
      </View>
      <Content>
          <CardItem>
          <Body>
                <Text>
                "STREETS ARE THE STAGE , AND WE GIVE YOU THE AUDIENCE" Do you have it in you to bring change , do you have enough courage to raise your voice and have your message heard. "ANANT- Twenty Seventeen" gives you a chance to raise your voice, to mend the wrong and act the right! Raise your voice, Raise your concern. Not just to flaunt but for the change in society you want. Depict the reality to portray the disparity; so bring it to the forefront of public psyche.  </Text>
                </Body>
                </CardItem>
            <CardItem>
            <Body>
                <H3>RULES</H3>
                <H3>DAY : 3</H3>
                <H3>TIME : 11:00 – 12:30</H3>
                <H3>VENUE : KABADDI GROUND</H3>
                </Body>
                </CardItem>
            <CardItem>
            <Body>
                <Text>{`Time Slot:10-25 minutes.
Props:dupattas, lathis, gulaal, sign boards. Use of any kind of liquid is not allowed.
Only Natural percussion instruments are allowed.
Maximum no. of participants: 20
Obscenity (at the discretion of judge) of any kind is not allowed
In all cases , the decision of judges will be final and binding
A team should be composed of students from same institution and participant should carry their college ID card`}</Text>
                </Body>
                </CardItem>
            <CardItem>
            <Body>
                <H3>MARKING & JUDGING CRITERIA (60 MARKS) :-</H3>
                <Text>• Acting & Expressions - 10 marks</Text>
                <Text>• Script-10 marks</Text>
                <Text>• Coordination -10 marks</Text>
                <Text>• Music & Presentation - 5 marks</Text>
                <Text>• Energy -10 marks</Text>
                <Text>• Crowd Interaction & Over-all Impact - 10 marks</Text>
                <Text>• Creativity and Originality - 5 marks</Text>
                </Body>
                </CardItem>
			<CardItem>
            <Body>
                <H3>Organisers-</H3>
                <Text>{`Divesh Kumar 89681 32069
Navya 98881 53909
Nandit Sood 98883 08277
`}</Text>
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
