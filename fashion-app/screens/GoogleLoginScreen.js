import React from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Google } from 'expo'



class GoogleLogin extends React.Component {
  signInWIthGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '719421048521-ioftd2q37mfbtnn9vbl9p0sfrnfu01a9.apps.googleusercontent.com',
        iosClientId: '719421048521-ggedfrbrfn1rif9tj422g81jgdgvurm3.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        behavior: 'system',
      })

      console.log(result)
      if (result.type === 'success') {
        // Alert.alert(
        //   'Logged in!', 
        //   `Hi ${result.user.givenName}!`,
        // )
        // return result.accessToken
        return result.user
      } else {
        return { cancelled: true }
      }
    } catch(e) {
      return { error: true }
    }
  }

  handler = async () => {
    const user = await this.signInWIthGoogleAsync()
    this.props.handler(user)
  }

  render() {
    return(
      <View style={styles.container}>
        <Icon.Button name="google" onPress={this.handler} />
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

export default GoogleLogin