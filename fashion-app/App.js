import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'
import FBLogIn from './screens/FBLoginScreen'
import GoogleLogIn from './screens/GoogleLoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.loginText}>Login screen</Text>
        </View>
        <View style={styles.loginBox}>
          <FBLogIn />
          <GoogleLogIn />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  loginBox: {
    flex: 2,
    flexDirection: 'column',
    paddingTop: 20,
    // backgroundColor: 'blue',
    alignItems: 'center',
    // alignItems: 'stretch',
  },
  titleBox: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 25,
  },
})