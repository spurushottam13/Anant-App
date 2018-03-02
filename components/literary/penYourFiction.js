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
export default class PenYourFiction extends Component {

  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>

      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Pen Your Fiction</Text>
      </View>
      <Content>
      <View>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>A writing competition brought to you by Anant 2018. Open to all !</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>• There are two categories : English and Hindi.</Text>
            <Text>• Only one entry per person will be accepted in each category.</Text>
            <Text>• The entries should not exceed four lines of work and must be original.</Text>
            <Text>• Only single author entries qualify (no co-authored entries)</Text>
            <Text>• Entrants must like and share Anant fb page on their wall.</Text>
            <Text>• Abusive or racist content wont be entertained.</Text>
            <Text>• Each entry must comprise of the written work onto a self-selected background without patent/name of the author.</Text>
            <Text>• The background comprises of 5% of the total score.</Text>
            <Text>• Entries which incorporate known fictional characters will be awarded extra points.</Text>
            <Text>• Entries must be submitted by midnight Feburary 22, 2018.</Text>
            <Text>• Mail entries to: Entries@anantfest.in With the subject : Pen your fiction.</Text>
            <Text>• The entries will be posted anonymously on Anant Facebook page.</Text>
            <Text>• The judgment shall be given on the following basis(skills)</Text>
            <Text>  --Best English fiction</Text>
            <Text>  --Best Hindi fiction</Text>
            <Text>  --Peoples choice</Text>
            <Text>• The "Best English and Hindi fiction" will be judged by a panel and "People's choice" would be awarded primarily on the maximum number of likes.</Text>
            <Text>• Winners will receive immense bragging rights along with certificates and Anant goodies</Text>
            <Text>• Any failure to adhere to these contest rules may result in disqualification.</Text>
            <Text>• THE PEN YOUR FICTION TEAM is not responsible for late, lost, stolen, misdirected, incomplete or illegible entries.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Ayushi Koundal 85560 77352</Text>
            <Text>Aanchal Sharma 90415 84982</Text>
            </Body>
            </CardItem>
            </View>
      </Content>
      </Container>
    );
  }
}
