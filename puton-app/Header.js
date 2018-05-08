import React from 'react';
import { View, Image } from 'react-native';


const Header = () => {
  const { iconStyle, viewStyle,bodyStyle,titleStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={{flex:1}}><Image style={iconStyle} source={require('./img/AppIcon.png')} /></View>
      <View style={{flex:0.95}}><Image style={titleStyle} source={require('./img/HeaderTitle.png')} /></View>
      <View style={{flex:0,}}><Image style={bodyStyle} source={require('./img/AdjustIcon.png')} /></View>
    </View>
  );
};


const styles = {
  
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    height: 65,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    // Android Only
    elevation: 2,
    flexDirection: 'row',
    justifyContent:'center',
  },
  iconStyle: {
    width:30,
    height:30,
    margin:10
  },
  titleStyle: {
    width:65,
    height:25,
    margin:20
  },
  textStyle: {
    fontSize: 18,
    // paddingLeft:50,
    flex: 1,
  },
  bodyStyle:{
    width:18,
    height:30,
    margin:10,
    // position:'relative',
    // right:0
  }
};

export default Header;
