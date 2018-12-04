import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { AuthSession } from 'expo'

//com.kakao.sdk.AppKey => kakao app key

const KakaoOAuthHost = 'https://kauth.kakao.com'
const KakaoAPIHost = 'https://kapi.kakao.com'
const RESTAppKey = '3fdaf2e6166a81c16cd8e02ade98d8bc'
const SecretKey = 'BaCX9ByAlJaGIFCkR8UBehtjCWAkMC1D'

class KakaoLogin extends React.Component {
  TokenRefresh = async (refreshToken) => {
    let tokenBody = `grant_type=refresh_token&client_id=${RESTAppKey}&refresh_token=${refreshToken}&client_secret=${SecretKey}`

    response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenBody,
    })

    return response
  }

  login = async () => {
    const redirectUrl = AuthSession.getRedirectUrl()
    console.log('redirecUrl: ', redirectUrl)

    // get code
    const required_scopes = ['account_email']
    let result  = await AuthSession.startAsync({
      authUrl:
        KakaoOAuthHost + `/oauth/authorize?client_id=${RESTAppKey}&redirect_uri=${redirectUrl}&response_type=code&scope=${required_scopes.join(',')}`
    })

    if (result.type !== 'success') {
      console.error(`Type: ${result.type}, something wrong... err(${result.errorCode})`)
      return
    }
    console.log('get code response: ', result)

    const code = result.params.code
    let tokenBody = `grant_type=authorization_code&client_id=${RESTAppKey}&redirect_uri=${redirectUrl}&code=${code}&client_secret=${SecretKey}`

    result = await fetch(KakaoOAuthHost + '/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenBody,
    })
    console.log('get token response: ', result)
    tokenResponse = await result.json()
    console.log(tokenResponse)
    let accessToken = tokenResponse.access_token

    result = await fetch(KakaoAPIHost + '/v2/user/me', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded,charset=utf-8',
      },
      body: 'property_keys=["properties.nickname", "properties.profile_image", "kakao_account.email"]',
    })
    const userInfo = await result.json()
    console.log(userInfo)

    return userInfo
  }

  loginHandler = async () => {
    console.log('here')
    const userInfo = await this.login()
    this.props.handler(userInfo)
  }

  render() {
    return(
        <TouchableOpacity
          onPress={ this.loginHandler }
        >
          <Image
            source={require('../assets/kakao_account_login_btn_medium_narrow.png')}
          />
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

})

export default KakaoLogin