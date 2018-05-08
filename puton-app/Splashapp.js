import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation'; // 2.0.0
import SplashScreen from './imports/Splash_components/screen';
import ContentScreen from './App-Copy';
import DrawerMenu from './imports/Splash_components/DrawerMenu';

const ContentStack = StackNavigator({
  Home: {
    screen: ContentScreen
  }
});

const DrawerContent = DrawerNavigator({
  ContentScreen:{
    screen: ContentStack
  }
}, {
  initialRouteName: 'ContentScreen', 
  contentComponent: DrawerMenu,
  navigationOptions: {header: null}
});

export default StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  ContentScreen:{
    screen({navigation}){
      return <DrawerContent screenProps={{rootNavigation:navigation}} />
    }
  }
}, {
  initialRouteName: 'SplashScreen', 
  navigationOptions: {header: null}
});


