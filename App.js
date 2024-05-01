import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import { Button, Image, Text, TextInput, View, ViewBase } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Signup from './components/week3/Signup';
import Card from './components/week3/Card';
import Hotel from './components/week3/Hotel';
import MyIcon from './components/week3/MyIcon';
//import Resort from './screens/week3/Resort';
import { PaperProvider } from 'react-native-paper';
import TestPaper from './screens/week4/TestPaper';
import Resort from './screens/week3/Resort';
import PaperQuiz from './screens/week4/PaperQuiz';
import Health from './screens/week5/Health';
import ChartKitScreen from './screens/week5/ChartKitScreen';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";

 
export default function App() {
  return (
    //<Ex12 />
    // <MyIcon/>
    //<PaperProvider>
      //<TestPaper/>
    //</PaperProvider>
    <AuthContextProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>

    </AuthContextProvider>
    
    
  );
}
      
