import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './screens/login'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LogIn />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
