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
export default class Vocoloid extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Unplugged</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <Text>A Symphonic Experience Waiting To Mesmerize You!! Soak In The RAAG’S And TAALS Until You Lose Yourself In The Magical Melody Of RENDITIONS.
                Participants must carry their ID cards with them else their participation will be cancelled</Text>
                </Body>
                </CardItem>
                <CardItem>
                <Body>
                <H3>RULES</H3>
                <H3>DAY : 3</H3>
                <H3>TIME : 14:00 onwards</H3>
                <H3>VENUE : AUDITORIUM</H3>
                </Body>
                </CardItem>
                <CardItem>
                <Body>
                <H3>1. Prelims Round</H3>
                <Text>• Each participant will be given 2-3 min to showcase their performance</Text>
                <Text>• Instruments or Karaoke arent allowed</Text>
                <Text>• Participants can perform in teams. Each team can consist at maximum 2 members.</Text>
                <Text>• Judges can end any performance any</Text>
                </Body>
                </CardItem>
                <CardItem>
                <Body>
                <H3>2. Final Round</H3>
                <Text>Initially from Prelims Round, 6 participants shall be selected for the finals (but the no. of participants shall go to finals depends on judges i.e. it can increase or decrease). The participants shall be marked by a jury consisting of 3 judges.</Text>
                </Body>
                </CardItem>
                <CardItem>
                <Body>
                <H3>RULES For Finals :</H3>
                <Text>• Each participant will be given 4-6 min to showcase their performance</Text>
                <Text>• Participants shall bring all karaoke tracks in a CD on their own</Text>
                <Text>• Vulgarity or nudity will directly lead to disqualification</Text>
                <Text>• All music forms are allowed</Text>
                <Text>• One can use an instrument in the final round subject to choice and availability (to be arranged by the participant)</Text>
                <Text>• Only 1 person is allowed to assist during the performance</Text>
                <Text>• The decision given by the judges will be final and un-questionable</Text>

              </Body>
              </CardItem>
            <CardItem footer>
              <Text>ENTRY FEE- RUPEES 100 PER PERSON</Text>
            </CardItem>
        </Content>
      </Container>
    );
  }
}
