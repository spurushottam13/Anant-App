import React, { Component } from 'react';
import { StackNavigator,NavigationActions } from 'react-navigation';
import { View,StyleSheet, Image,Button,TouchableOpacity,ImageBackground,} from 'react-native';
import { Container,Icon, Text,Content,Right } from 'native-base';
export default class Explore extends Component {
  static navigationOptions = {
    header :false,
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor:'#f5f7f9'}}>
      <Content>
          <View style={styles.sec}>
          <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
          <Text style={styles.header} >EXPLORE</Text>
          </View>
          <TouchableOpacity style={styles.l2} onPress={() => navigate("Technical", { screen: "Technical"})} >
            <ImageBackground style={styles.bg} source={require('./img/bg1.jpg')}>
                <Text style={styles.text}>
                <Text>TECHNICAL</Text>
                </Text>
                <Text style={styles.text}>+150 Events</Text>
              </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.l2} onPress={() => navigate("Cultural", { screen: "Cultural"})} >
              <Icon name='home' />
              <Text style={styles.text}>CULTURAL EVENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.l3} onPress={() => navigate("Informal", { screen: "Informal"})} >
              <Text style={styles.text}>INFORMAL EVENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.l5} onPress={() => navigate("Literary", { screen: "Literary"})} >
              <Text style={styles.text}>LITERARY EVENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.l4} onPress={() => navigate("Registration", { screen: "Registration"})} >
              <Text style={styles.text}>REGISTRATION EVENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.l6} onPress={() => navigate("Shedule", { screen: "Shedule"})} >
              <Text style={styles.text}>SHEDULE</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.l6} onPress={() => navigate("ContactUS", { screen: "ContactUS"})} >
               <Text style={styles.text}>Contact US</Text>
            </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#ebebeb',
  },
  l1:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    minWidth:300,
  },
  l2:{
    flex:1,
    backgroundColor:'#333e50',
    justifyContent:'center',
    alignItems:'center',
    minHeight:200,
  },
  l3:{
    flex:1,
    backgroundColor:'aqua',
    justifyContent:'center',
    alignItems:'center',
    minHeight:200,
  },
  l4:{
    flex:1,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    minHeight:200,
  },
  l5:{
    flex:1,
    backgroundColor:'lime',
    justifyContent:'center',
    alignItems:'flex-start',
    minHeight:200,
  },
  l6:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    minHeight:200,
  },
  text:{
    fontSize:30,
    fontWeight:'900',
    color:'white',
    paddingLeft:10,
  },
  text2:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    paddingLeft:10,
  },
  icon:{
    color: 'white',
    fontWeight: 'bold',
    position:'absolute',
    left:0,
  },
  bg:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection:'row',
  },
  sec:{
    backgroundColor:'#1b83f0',height:'5%',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',
  },
  header:{
    color :'white',marginLeft:15,fontSize:32,fontFamily:'Raleway-Medium'
  },
  icon:{
    color :'white',marginLeft:20,
  },
})

/*
Technical Events,
  --CSE
  --ECE
  --Mech
Cultural Events,

Registration,
Informal,
litery,
Shedule
Contact Us,
************************
Dust racer
Hydro Jet

LineSeguidor
Robo Soccer
Technical Quiz
Robo war

WebHackathon
Da-visible Code
Freestyle coding
Workshop


// Informal
Dance Off
Bhangra battles
Treasure Hunt
Ad Mad
IPL auction

//Culutral
halla Bol
LIve wire
vibrant
vocoloid
Foot-Loose
Rampage

//Literary
Paricharcha
Mock Parliament
English Debate
Pen your Fiction
Moot Court
*/
