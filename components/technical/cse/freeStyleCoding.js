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
export default class FreeStyleCoding extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Free Style Coding</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                Platform tech solutions have a very sharp vision towards us and regarding our community for making them socially aware and enriched therefore to accomplish our aim we develop websites for social cause.  Platform tech solutions have to come forward and take initiative steps for social awareness and modification. Rapidly changing technology demands a high-profiled community that should be well-developed and well- innovative. "Technology is not the revolution ,the revolution is in human awareness. It is just made clearer by technology".
Through this Hackathon Platform tech Solutions want students to surface various drawbacks in society and improvise measures to eradicate them. The students are required to develop a website/app on social cause.So Get ready For Betterment of society on the ocassion of ANANT 2k18 – WORLD OF FICTION </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Eligibility and Requirements</H3>
            <Text>All college students are Eligible for this hackathon HackerEarth Id is required for the participants final round will be host in college campus. so at least one representative will be present from each team.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Shedule</H3>
            <Text>Hackthon will be online. submition portal will be opened from 22 february</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>This is a team participation Hackathon. You can have at most 5 members in your team.</Text>
            <Text>You can either invite your friends to form a team or you can request other teams to add you as a member.</Text>
            <Text>Its an online Hackathon, you can participate from anywhere.</Text>
            <Text>Once the Hackathon starts, you will get an option to submit your hack, you can submit as many times as you want, the last hack will be considered as the final submission.</Text>
            <Text>You are expected to come up with new and innovative ideas, any idea that has been copied from somewhere will be disqualified.</Text>
            <Text>You may use open source libraries and other freely available systems / services such as Google Maps, Facebook Connect, Twitter feeds etc.</Text>
            <Text>Participants must carry their college id cards otherwise their participation would be cancelled</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Marking criteria</H3>
            <Text>Idea – 20 marks</Text>
            <Text>Team work – 10 marks</Text>
            <Text>Product – 30 marks</Text>
            <Text>Pitching and documentation– 20 marks</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
