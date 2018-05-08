import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import Header from './Header';

export default class home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <ImageBackground source={require('./page1_img/Man.png')} style={{width: null, height: 625}}>
          
        </ImageBackground>
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
return (
  <ImageBackground source={require('./page1_img/Man.png')}>
    <Text>Inside</Text>
  </ImageBackground>
);

<Image source={require('./page1_img/Man.png')}/>

import InfoList from './imports/home_components/hList';

*/