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
export default class Workshop extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Workshop</Text>
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
            <H3>Shedule</H3>
            <Text>{`Venue: CSE LAB
DAY : 2
10:00am: Introductory class
11:30am -12:00pm: Hands on tutorials
12:00pm - 1:00pm : component programing and methodologies
01:00pm - 2:00pm : Break
2:00pm - 3:30pm : building project
3:30pm - 4:00pm : Deployment and search Engine optimisation`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Certificate</H3>
            <Text>Every member will get a participation certificate from Pussgrc and Platform tech solutions possibly with the mark of Event associates</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>HighLights</H3>
            <Text>{`Build Your cv build your Carreer
Get a chance to recieve certificates from Microsoft students partenter community
Get a chance to recieve certificattion from Hoshiarpur Mozilla Campus Club
Introduction of basic elements
Introduction of development tools
Build your Personal Resume/portFolio
Mark your Identity on various search Engine.`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>In Association with</H3>
            <Text>Hoshiarpur Mozilla campus Club</Text>
            <Text>Microsoft student partenter community</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
