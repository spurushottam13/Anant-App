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
export default class Paricharcha extends Component {

  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Paricharcha</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                Fire, zeal, enthusiasm and antagonism are all the colours of the orators fighting against each other’s priggish thinking!
                That’s the world of DEBATE for you. SAMVAD owes you the opportunity to present your views in front of the world and enhance even your own outlook, in your own mother tongue, HINDI!
                </Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>Each team should comprise of two members</Text>
            <Text>There will be 1 round</Text>
            <Text>Each team will be allotted 3 minutes to speak for/against the motion in the given round</Text>
            <Text>Use of sheets/paper or any other reading material or electronic gadget is not allowed</Text>
            <Text>Interjections are open from the judges, spectators and the other participants</Text>
            <Text>No other language except HINDI is permitted. Use of slangs, defamatory language etc will lead to negative marking</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Marking criteria</H3>
            <Text>Logical chain of thoughts & clarity of expression</Text>
            <Text>Appropriate grammar usage</Text>
            <Text>Confidence and body language</Text>
            <Text>Relevance of conten</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Navroop Kaur 95308 71321</Text>
            <Text>Yudhvir Singh 70870 80522</Text>
            <Text>Hemant Saini 76963 53861</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
}
