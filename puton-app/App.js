//import React from 'react';
import { TabNavigator /*, Image*/  } from 'react-navigation'; // 1.0.0-beta.19
import Home from './Home';
import Info from './Info';
import Camara from './Camera';
import Wardrobe from './Wardrobe';
import User from './User';
//import Header from './Header';

const PutON = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Info: {
      screen: Info,
    },
    Camara: {
      screen: Camara,
    },
    Wardrobe: {
      screen: Wardrobe,
    },
    User: {
      screen: User,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions:{ 
      activeTintColor: '#4682B4',
      showIcon:true,
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#fff',
      },
      /*tabBarIcon:{
         source={require ('./img/add_box.png')}
      },*/
    },
    animationEnabled: true,
  }
);

export default PutON;

/**
const App = StackNavigator(
  {
    Tab: { screen: Tab }
  },
);
**/

/*
        navigationOptions:({navigation}) =>({
          tabBarIcon: ({ tintColor }) => {
            return (<Image
        style={{ width: 30, height: 30 }}
        source={ require('./img/add_box.png')}/>);
*/
/*      navigationOptions:{
        tabBarIcon:<Image source={require('./img/add_box.png')}/>,
        showIcon:true
        }*/
