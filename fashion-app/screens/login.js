import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Constants } from 'expo'
import { LogInWithFacebook } from '../apis/logInFB'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FBLogIn extends React.Component {
  sendLoginRequestToFB = async () => {
    resp = await LogInWithFacebook()
    console.log(resp)
  }

  render() {
    return (
      <View style={style.circle}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.sendLoginRequestToFB} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#3b5998',
    borderRadius:100,
  },
})