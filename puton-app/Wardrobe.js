import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import Header from './Header';

export default class home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <ScrollView>
          <View style={styles.columnStyle}>
            <View style={styles.row1Style}>
              <Image
                style={{width: 137.5, height: 125}}
                source={require('./photo/cloth4.jpg')}
              />
            </View>
            <View style={styles.row2Style}>
              <Image
                style={{width: 137.5, height: 125}}
                source={require('./photo/cloth1.jpg')}
              />
            </View>
            <View style={styles.row3Style}>
              <Image
                style={{width: 137.5, height: 125}}
                source={require('./photo/cloth3.jpg')}
              />
            </View>
          </View>
          <View style={styles.columnStyle}>
            <View style={styles.row2Style}>
              <Image
                style={{width: 137.5, height: 125}}
                source={require('./photo/cloth6.jpg')}
              />
            </View>
            <View style={styles.row3Style}>
              <Image
                style={{width: 137.5, height: 125}}
                source={require('./photo/cloth5.jpg')}
              />
            </View>
            <View style={styles.row1Style}>
            </View>
          </View>
          <View style={styles.columnStyle}>
            <View style={styles.row3Style}>
            </View>
            <View style={styles.row1Style}>
            </View>
            <View style={styles.row2Style}>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  columnStyle: {
    width:null,
    height:125,
    margin:0.1,
    backgroundColor:"#fff",
    flexDirection: 'row',
  },
  row1Style: {
    width:137.5,
    height:125,
    margin:0.1,
    backgroundColor:"#d0d0d0",
  },
  row2Style: {
    width:137.5,
    height:125,
    margin:0.1,
    backgroundColor:"#f0f0f0",
  },
  row3Style: {
    width:137.5,
    height:125,
    margin:0.1,
    backgroundColor:"#e0e0e0",
  },
});