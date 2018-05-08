import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import InfoList from './imports/info_components/InfoList';

export default class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <InfoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});