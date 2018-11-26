import { Alert } from 'react-native'
import { Facebook } from 'expo'

export const LogInWithFacebook = async () => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('1974063262681467', {
    permissions: ['public_profile'],
    behavior: 'system',
  })

  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`)

    Alert.alert(
      'Logged in!', 
      `Hi ${((await response.json()).name)}!`,
    )

    return response
  }
}