import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body,Icon,Left, Text,H1,H3 } from 'native-base';
import { View,StyleSheet,} from 'react-native';
import { NavigationActions } from 'react-navigation'
const styles= StyleSheet.create({
  sec:{
    backgroundColor:'#1b83f0',height:'15%',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',
  },
  header:{
    color :'white',marginLeft:15,fontSize:32,fontFamily:'Raleway-Light'
  },
  icon:{
    color :'white',marginLeft:20,
  },

})
export default class MockParliament extends Component {

  static navigationOptions = {
    header:false,
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
      <View style={styles.sec}>
      <Icon style={styles.icon} name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} />
      <Text style={styles.header} >Mock Parliament</Text>
      </View>
      <Content>
            <CardItem>
            <Body>
                <H3>About Event</H3>
                <Text>
                The mock parliament is a fictional parliament which will give a practical experience to our young generation regarding the law making process which is carried down in our union legislature that is parliament. It seeks participation from students across all disciplines</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <H3>Rules</H3>
            <Text>Participation will be only on individual basis.</Text>
            <Text>The participants will be allotted their portfolios/roles on the spot by way of chit system i.e., Members of Ruling party (including Prime Minister) Members of Opposition party (including Leader of Opposition party) & Others</Text>
            <Text>After presenting the bill, and rebuttals, every member will be given a minute to conclude their speech</Text>
            <Text>Language: Hindi/English/Punjabi</Text>
            <Text>The judgment shall be given on the following basis(skills)</Text>
            <Text> --Relevancy of points</Text>
            <Text> --Oratory skills</Text>
            <Text> --Arguments</Text>
            <Text> --Decorum</Text>
            <Text> --Research</Text>
            <Text>The prizes will be awarded in the following categories:Best Orator and Best Parliamentarian</Text>
            <Text>The judgment of the Speaker/Judge will be final.</Text>
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
            <Text>Lakshi 8283099354</Text>
            <Text>Preeti 94673 57069</Text>
            </Body>
            </CardItem>
      </Content>
      </Container>
    );
  }
}
