import React, { Component } from 'react';
import { StackNavigator,NavigationActions } from 'react-navigation';
import { View,StyleSheet, Image,Button,TouchableOpacity,ImageBackground,} from 'react-native';
import { Container,Icon,Text,Content,Card,CardItem,Body } from 'native-base';
export default class New extends Component {
  static navigationOptions = {
    header :false,
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container style={{backgroundColor:'#f5f8f9'}}>
      <Content>
          <View style={styles.sec}>
          <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
          <Text style={styles.header} >Explore</Text>
          </View>

          <View style={styles.row}>
            <Card style={styles.card}>
              <CardItem style={styles.cardItem} button onPress={() => navigate("Technical", { screen: "Technical"})}>
                <Image style={styles.canvas} source={require('./img/tech.png')}/>
                  <Text style={styles.text}>TECHNICAL</Text>
              </CardItem>
            </Card><View style={{width:15}}></View>
            <Card style={styles.card}>
              <CardItem style={styles.cardItem} button onPress={() => navigate("Cultural", { screen: "Cultural"})}>
                <Image style={styles.canvas} source={require('./img/cult.png')}/>
                  <Text style={styles.text}>CULTURAL</Text>
              </CardItem>
            </Card>
          </View>

          <View style={styles.row2}>
            <Card style={styles.card}>
              <CardItem style={styles.cardItem} button onPress={() => navigate("Literary", { screen: "Literary"})}>
                <Image style={styles.canvas} source={require('./img/lit.png')}/>
                  <Text style={styles.text}>LITERARY</Text>
              </CardItem>
            </Card>
            <View style={{width:20}}></View>
            <Card style={styles.card}>
              <CardItem style={styles.cardItem} button onPress={() => navigate("Informal", { screen: "Informal"})}>
                <Image style={styles.canvas} source={require('./img/infor.png')}/>
                  <Text style={styles.text}>INFORMAL</Text>
              </CardItem>
            </Card>
          </View>


          <Card style={styles.card1}>
          <CardItem style={styles.cardItem1} button onPress={() => navigate("Registration", { screen:"Registration"})}>
                <Image style={styles.canvas} source={require('./img/register.png')}/>
                    <View style={{width:20}}></View>
                  <Text style={styles.text}>REGISTRATION</Text>
              </CardItem>
          </Card>

          <View style={styles.row2}>
            <Card style={styles.card}>
              <CardItem style={styles.cardItem} button onPress={() => navigate("Shedule", { screen: "Shedule"})}>
                <Image style={styles.canvas} source={require('./img/cont.png')}/>
                  <Text style={styles.text}>SCHEDULE</Text>
              </CardItem>
            </Card>
            <View style={{width:20}}></View>
            <Card style={styles.card}>
              <CardItem style={styles.cardItem} button onPress={() => navigate("ContactUS", { screen: "ContactUS"})}>
                <Image style={styles.canvas} source={require('./img/spon.png')}/>
                  <Text style={styles.text}>CONTACT</Text>
              </CardItem>
            </Card>
          </View>
          </Content>
      </Container>
    );
  }
}
const styles= StyleSheet.create({
  sec:{
    backgroundColor:'#2a91f6',height:'20%',justifyContent:'center',flexDirection:'row',alignItems:'center',
  },
  header:{
    marginTop:-15,color :'white',fontSize:36,fontFamily:'Painter',
  },
  icon:{
    color :'white',
    position:'absolute',
    top:25,
    left:25,
  },
  row:{//backgroundColor:'red',
  flexDirection:'row',height:'20%',padding:'7%',alignItems:'center',
  justifyContent:'space-around',marginTop:'-12%'},

  row2:{//backgroundColor:'red',
  flexDirection:'row',height:'20%',padding:'7%',alignItems:'center',
  justifyContent:'space-between',marginTop:'1.5%'},
  row3:{//backgroundColor:'red',
  flexDirection:'row',height:'20%',padding:'7%',alignItems:'center',
  justifyContent:'space-between',marginTop:'1.5%'},
  card:{margin:60,height:150,width:150,justifyContent:'center',alignItems:'center'},
  card1:{marginTop:'3%',marginLeft:'7%',marginRight:'7%',maxHeight:120,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:0},
  canvas: {
      width: 70,
      height: 70,
  },
  text:{
    marginTop:10,
    fontFamily:'Montserrat-Regular',
    fontSize:16,
    color: '#333745',
  },
  cardItem:{flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'0%'},
  cardItem1:{flexDirection:'row',alignItems:'center',justifyContent:'space-around',margin:'0%'},

})


/*
Techincal,Cultutal,Literarry,Informal,Contact us ,registraion,sponsors.
*/
