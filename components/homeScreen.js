import React, { Component } from 'react';
import { View,  StyleSheet, Image,Button,TouchableOpacity} from 'react-native';
import { Container, Text,Icon,Right } from 'native-base';
import CSE from './cse.js';
import Carousel from './crousel.js';
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "",
    headerStyle:{
        margin:0,
        height:0,
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const images = [
      {
        source: {
          uri: 'https://anant-71926.firebaseapp.com/himg/1.jpg?random_number='+new Date().getTime(),cache:'reload',
        },key:1,
      },
      {
        source: {
          uri: 'https://anant-71926.firebaseapp.com/himg/2.jpg?random_number='+new Date().getTime(),cache:'reload',
        },key:2,
      },
      {
        source: {
          uri: 'https://anant-71926.firebaseapp.com/himg/3.jpg?random_number='+new Date().getTime(),cache:'reload',
        },key:3,
      },
      {
        source: {
          uri: 'https://anant-71926.firebaseapp.com/himg/4.jpg?random_number='+new Date().getTime(),
		  cache:'reload',
        },key:4,
      },

    ];
    return (
      <View style={{flex:1,backgroundColor:'#2f2933'}} >

          <Container style={styles.sec1}>
            <Image style={styles.left} source={require('./img/homeScreen/left.png')}/>
            <Image style={styles.right} source={require('./img/homeScreen/right.png')}/>
            <View style={styles.m2}>
              <Image  style={styles.logo} source={require('./img/homeScreen/logo.png')} />
              <Text style={styles.t1}>WORLD OF FICTION</Text>
            </View>
            <View style={styles.m3}>
                <View>
                    <Text style={styles.t2}>#Feb 22 - 24</Text>
                    <TouchableOpacity
                        onPress={() => navigate("New", { screen: "New"})}
                        style={styles.SubmitButtonStyle}
                        activeOpacity = { .5 }
                     ><Text style={styles.TextStyle}>EXPLORE  </Text>
                     <Icon style={{color:'white',paddingTop:4,}}name="arrow-forward" />
                    </TouchableOpacity>
                </View>
            </View>
          </Container>

          <Container style={styles.sec2}>
            <Carousel images={images} />
          </Container>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  sec1:{
    margin:0,
    flex: 6.5,
    backgroundColor:'#2f2933',
  },
  sec2:{
    flex: 3.5,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2f2933',
  },
  card1:{
    flex:1,
    margin:15,
    backgroundColor: 'white'
  },
  m1:{
    flexDirection: 'row',
  },
  m2:{
    flex: 6,
    padding:0,
    alignItems:'center',
    justifyContent:'center',
  },
  m3:{
    flex:4,
    alignItems:'center',
    justifyContent:'center',
  //  backgroundColor: 'lime'
  },
  logo:{
    margin: 0,
    marginTop: '-5%',
    width:'70%',
    height: '70%',
    margin:0,
    alignItems:'center'
  },
  t1:{
    fontFamily:'TrajanPro',
    fontSize:25,
    color: '#b1f543',
    paddingTop: 10,
  },
  left:{
    margin:0,
    height:'25%',
    width:'25%',
  },
  right:{
    position:'absolute',
    top:0,
    right:0,
    height:'25%',
    width:'25%',
  },
  t2:{
    fontSize:30,
    fontFamily:'Montserrat-Bold',
    color:'#b1f543',
    paddingBottom:10,
  },
  btnText:{
    fontSize:20,
    fontWeight:'800',
    color: 'white',
  },
  SubmitButtonStyle: {
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:12,
    paddingRight:12,
    backgroundColor:'#ce2029',
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
  },

  TextStyle:{
      color:'#fff',
      fontSize:25,
      fontWeight:'bold',
      textAlign:'center',
  }
})


/*
bg 2f2933
mbg ebebeb
text - b1f543
*/
