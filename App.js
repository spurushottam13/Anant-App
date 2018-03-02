import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Root } from "native-base";

import HomeScreen from './components/homeScreen.js';
import CSE from './components/cse.js';
import BlindCoding from './components/cse/blindcoding.js';
import Explore from './components/explore.js';
import Registration from './components/registration';
import TeamAnant from './components/teamAnant';
import Shedule from './components/shedule';
import New from './components/new';

// CSE
import DaVisibleCode  from './components/technical/cse/daVisibleCode';
import FreeStyleCoding  from './components/technical/cse/freeStyleCoding';
import WebHackthon  from './components/technical/cse/webHackthon';
import CseTQ from './components/technical/cse/cseTQ';
import Workshop from './components/technical/cse/workshop';

//ECE
import EceTQ  from './components/technical/ece/eceTQ';
import LineSequidor  from './components/technical/ece/lineSequidor';
import RoboSoccer  from './components/technical/ece/roboSoccer';
import ElectroVeda from './components/technical/ece/electroVeda';

//Mech
import Bot  from './components/technical/mech/boat';
import DustRacer  from './components/technical/mech/dustRacer';
import HydroJet  from './components/technical/mech/hydroJet';

//Cultural
import FootLoose  from './components/cultural/footLoose';
import HallaBol  from './components/cultural/hallaBol';
import LiveWire  from './components/cultural/liveWire';
import Rampage  from './components/cultural/rampage';
import Vibrant  from './components/cultural/vibrant';
import Vocoloid  from './components/cultural/vocoloid';
import LooseYourSelf  from './components/cultural/loosYourSelf';

//INFORMAL
import AdMad  from './components/informal/adMad';
import BhangraBattles  from './components/informal/bhangraBattles';
import DanceOff  from './components/informal/danceOff';
import IplAuction  from './components/informal/iplAuction';
import TreasureHunt  from './components/informal/treasureHunt';
//LITERARY
import EnglishDebate  from './components/literary/englishDebate';
import MockParliament  from './components/literary/mockParliament';
import MootCourt  from './components/literary/mootCourt';
import Paricharcha  from './components/literary/paricharcha';
import PenYourFiction  from './components/literary/penYourFiction';

//Index

import Technical from './components/technical/technical';
import Cultural from './components/cultural/cultural';
import Informal from './components/informal/informal';
import Literary from './components/literary/literary';
import ContactUS from './components/contactUS';

const App = StackNavigator({
    HomeScreen: {screen: HomeScreen},
    New : {screen: New},
    Explore: {screen:Explore},
    Registration :{screen:Registration},
    TeamAnant : {screen: TeamAnant},
    CSE : {screen: CSE},
    BlindCoding: { screen: BlindCoding},
    ContactUS : {screen:ContactUS},
    Shedule : {screen:Shedule},

    //TECHNICAL
    DaVisibleCode: {screen: DaVisibleCode},
    FreeStyleCoding: {screen: FreeStyleCoding},
    WebHackthon: {screen: WebHackthon},
    CseTQ :{screen: CseTQ},
    EceTQ: {screen: EceTQ},
    LineSequidor: {screen: LineSequidor},
    RoboSoccer: {screen: RoboSoccer},
    Bot: {screen: Bot},
    DustRacer: {screen: DustRacer},
    HydroJet: {screen: HydroJet},
    ElectroVeda : {screen :ElectroVeda},
    Workshop : {screen: Workshop},

    //INFORMAL
    Admad: {screen: AdMad},
    BhangraBattles: {screen: BhangraBattles},
    DanceOff: {screen: DanceOff},
    IplAuction: {screen: IplAuction},
    TreasureHunt: {screen: TreasureHunt},

    //CULTURAL
    FootLoose: {screen: FootLoose},
    HallaBol: {screen: HallaBol},
    LiveWire: {screen: LiveWire},
    Rampage: {screen: Rampage},
    Vibrant: {screen: Vibrant},
    Vocoloid: {screen: Vocoloid},
    LooseYourSelf: {screen: LooseYourSelf},

    //LITERARY
    EnglishDebate: {screen: EnglishDebate},
    MockParliament: {screen: MockParliament},
    MootCourt: {screen: MootCourt},
    Paricharcha: {screen: Paricharcha},
    PenYourFiction: {screen: PenYourFiction},

    //Index
    Technical : {screen : Technical},
    Literary : {screen : Literary},
    Cultural : {screen : Cultural},
    Informal : {screen: Informal},

},{
    headerMode: 'screen'
  })

export default () =>
  <Root>
    <App/>
  </Root>;
