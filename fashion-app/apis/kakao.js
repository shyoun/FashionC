import { AuthSession } from 'expo'

//com.kakao.sdk.AppKey => kakao app key

const kakaoHost = `https://kauth.kakao.com`
const RESTAppKey = '3fdaf2e6166a81c16cd8e02ade98d8bc'
const SecretKey = 'BaCX9ByAlJaGIFCkR8UBehtjCWAkMC1D'

export const KakaoLogin = async () => {
  const redirectUrl = AuthSession.getRedirectUrl()
  console.log('redirecUrl: ', redirectUrl)

  // get code
  let result  = await AuthSession.startAsync({
    authUrl:
      kakaoHost + `/oauth/authorize?client_id=${RESTAppKey}&redirect_uri=${redirectUrl}&response_type=code`
  })

  if (result.type !== 'success') {
    console.error(`Type: ${result.type}, something wrong... err(${result.errorCode})`)
    return
  }
  console.log('get code response: ', result)

  const code = result.params.code
  let tokenBody = `grant_type=Content-Type&client_id=${RESTAppKey}&redirect_uri=${redirectUrl}&code=${code}&client_secret=${SecretKey}`

  // result = await fetch(kakaoHost+'/oauth/token', {
  result = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: tokenBody,
  })
  console.log('get token response: ', result)
}