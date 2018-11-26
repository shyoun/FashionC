import { Alert } from 'react-native'
import { NaverLogin, getProfile } from 'react-native-naver-login'

//TODO: naver에서 받아야함.
const initials = {
  kConsumerKey: 'VN6WKGFQ3pJ0xBXRtlN9',
  kConsumerSecret: 'AHBgzH9ZkM',
  kServiceAppName: 'dooboolab',
  kServiceAppUrlScheme: 'dooboolaburlscheme', // only for iOS
}

export const LoginWithNaver = async (props) => {
  let result = null
  const response = await NaverLogin.login(props, (err, token) => {
    console.log(`Token is fetched:: ${token}`)
    if (err) {
      console.log(`fetch failed.. error: ${err}`)
      return
    }

    return token
  })

  try {
    result = await getProfile(token)
  } catch(err) {
    console.log(`err: ${err}`)
  }

  Alert.alert(result)
  return result
}