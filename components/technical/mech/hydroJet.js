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
export default class HydroJet extends Component {
  static navigationOptions = {
    header:false
    }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Hydro Jet</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
              Ready- to- run race. Racing through the zigzag road, mud –pit slopes and avoiding many more obstacles and still finishing within the minimum time ,it’s not a matter of roadside racer.</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>{`GUIDELINES:
Two attempts per round will be allowed.
Launcher for each team is compulsory otherwise 20 points will be deducted.
Pressurizing chamber single stage must be of 2L only.
If multistage rocket is used then 20 points will be awarded to the team. For multistage rocket pressurizing chamber can be of 4L.
TRIGGER MECHANISM:
While pressurizing rocket participants are not allowed to hold the rocket. There should be proper trigger mechanism to release the rocket.
Foot pumps will be provided.
Water should be used as the only propellant. No other propellant such as soda, any additives are not allowed.
Water will be provided by organizers.
Round 1(Round of Range)
Maximum pressure can be 60psi.
If rocket falls within 30deg sector then 10 points will be awarded. If rocket falls between (30deg-60deg) sector then no extra points will be awarded. If rocket falls beyond (0deg-60deg) sector both side then 10 points will be deducted.
To qualify for the second round minimum range of rocket must be 80 meters.
Round 2 is bull’s eye round`}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Organisers</H3>
            <Text>Abhinav kumar 70875 10401</Text>
            <Text>Deepak Kumar 96545 71722</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
  }
