import React, {Component} from 'react';
import Screen from '../components/Screen';
import { NavigationActions } from 'react-navigation'; // 2.0.0

export default class DrawerMenu extends Component {
  handlePress(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'SplashScreen' })],
    });

    this.props.screenProps.rootNavigation.dispatch(resetAction);
  }
  render(){
    return (
      <Screen title="Drawer screen" color="#fff" onPress={() => this.handlePress()}/>
    );
  }
}