import React, { Component } from 'react';
import {  TouchableOpacity , StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default class Screen extends Component {
  render() {
    const {color, onPress} = this.props;
    
    return (
      <TouchableOpacity  style={[styles.container, {backgroundColor:color}]} onPress={() => onPress.bind(this)()}>
        <ImageBackground source={require('./loadingPage.png')} style={{width: 410, height: 750}}>
          
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
