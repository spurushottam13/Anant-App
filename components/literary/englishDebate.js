import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body,Icon,Left, Text,H1,H3 } from 'native-base';
import { View,StyleSheet,} from 'react-native';
import { NavigationActions } from 'react-navigation'
const styles= StyleSheet.create({
  sec:{
    backgroundColor:'#1b83f0',height:'20%',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',
  },
  header:{
    color :'white',marginLeft:15,fontSize:32,fontFamily:'Raleway-Light'
  },
  icon:{
    color :'white',marginLeft:20,
  },

})
export default class EnglishDebate extends Component {

  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >English Debate</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                Fire, zeal, enthusiasm and antagonistic all are the colours of an orator fighting against each others puritanical thinking ....you guess it right ... That’s the world of DEBATE for you. Explore your skills to present your views in front of others and get a chance to enhance your outlook. The most valuable thing of any society is healthy competition. Therefore, encouraging it in youth is a good way not only of instilling it but also learning to balance it.</Text>
                <Text>Topics will be informed to all the participants two days in advance.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>Participants are allowed to use only English. Use of any other language will lead to negative marking</Text>
            <Text>The time limit is 3 minutes</Text>
            <Text>Participants can be asked to speak either FOR or AGAINST the topic which would be decided on the basis of draw of lots</Text>
            <Text>Individual participation (no teams)</Text>
            <Text>Use of sheets/paper or any other reading material or electronic gadget is not allowed</Text>
            <Text>Use of aggression and abusive language is strictly not allowed</Text>
            <Text>Decision of the judge is final and abiding</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Marking criteria</H3>
            <Text>Content of the debate</Text>
            <Text>Flow of thoughts</Text>
            <Text>Oratory Skills</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Richa Singh 97792 46961</Text>
            <Text>Amanpreet kaur 97792 52811</Text>
            <Text>Aditi Joshi 7986373084</Text>
            </Body>
            </CardItem>
        </Content>
      </Container>
    );
  }
}
