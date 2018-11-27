import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LogInWithFacebook } from '../apis/logInFB'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FBLogIn extends React.Component {
  sendLoginRequestToFB = async () => {
    resp = await LogInWithFacebook()
    console.log(resp)
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.sendLoginRequestToFB} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    paddingTop: 10,
  },
})