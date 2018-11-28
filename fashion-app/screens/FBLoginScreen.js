import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Facebook } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FBLogIn extends React.Component {
  LogInWithFacebook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('1974063262681467', {
      permissions: ['public_profile'],
      behavior: 'system',
    })

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`)

      return await response.json()
    }
  }

  handler = async () => {
    const response = await this.LogInWithFacebook()
    this.props.handler(response)
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.handler} />
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