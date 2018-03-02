import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text,H3,H2,Button } from 'native-base';
export default class ContactUS extends Component {
  static navigationOptions = {
    title: "Contact US"
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <H2>Address</H2>
                <Text></Text>
                <Text>Panjab University Swami Sarvanand Giri Regional Centre</Text>
                <Text>Una Road, Bajwara, Hoshiarpur, Punjab 146021</Text>
              </Body>
            </CardItem>
         </Card>
         <Card>
           <CardItem>
             <Body>
             <H3>Info Team</H3>
             <Text></Text>
               <Text>Reeya - 9056461352    Shilpy - 8968174589</Text>
               <Text>info@anantfest.com</Text>
             </Body>
           </CardItem>
        </Card>
         <Card>
           <CardItem>
             <Body>
             <H3>Publicity Team</H3>
             <Text></Text>
               <Text>Lakshay - 9646096020 Divisha Singh 9646335894</Text>
               <Text>publicity@ananfest.in</Text>
             </Body>
           </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
            <H3>Events Heads</H3>
            <Text></Text>
              <Text>Cultural  - Rhea Sharma - 7814987745</Text>
              <Text>Technical - Laxman Singh - 7087658638</Text>
              <Text>Informal  - Gaurav Sharma - 9876410460</Text>
              <Text>Literary  - Aanchal - 8219244103</Text>
            </Body>
          </CardItem>
          <CardItem>
          </CardItem>
          <Button block onPress={() => navigate("TeamAnant", { screen: "TeamAnant"})}>
            <Text>Team Anant</Text>
          </Button>
       </Card>
        </Content>
      </Container>
    );
  }
}
