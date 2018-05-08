import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import UserCard from './imports/user_components/userCard';


export default class home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <UserCard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

/*
import { TabNavigator, StackNavigator } from 'react-navigation'; // 1.0.0-beta.19
import HistoryList from './HistoryList';

const User = TabNavigator(
  {
    Camara: { screen: HistoryList },
    Setting:  { screen: HistoryList 
    }
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 15,
      },
    },
  }
);

export default StackNavigator(
  {
    User: { screen: User },
  }
);
*/
