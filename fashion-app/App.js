import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Constants, AuthSession } from 'expo'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { KakaoLogin } from './apis/kakao'


import FBLogIn from './screens/FBLoginScreen'
import GoogleLogIn from './screens/GoogleLoginScreen'

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}

class HomeScreen extends React.Component {
  state = {
    user: null,
  }

  userHandler = (user) => {
    this.setState({user}, () => {this.props.navigation.navigate('UserInfo', {
      user: this.state.user,
    })})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.loginText}>Login screen</Text>
        </View>
        <View style={styles.loginBox}>
          <FBLogIn handler={this.userHandler} />
          <GoogleLogIn handler={this.userHandler} />
          <Button 
            title="카카오 로그인"
            onPress={ KakaoLogin }
          />
        </View>
      </View>
    )
  }
}

class UserInfoScreen extends React.Component {
  render() {
    const { navigation } = this.props
    const user = navigation.getParam('user', 'No USER DATA')


    return (
      <View style={{flex:1, alignsItems: 'center', justifyContent: 'center',}}>
        <Text>User information</Text>
        <Text>{JSON.stringify(user)}</Text>
        <Button 
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    UserInfo: UserInfoScreen,
  },
  {
    initialRouteName: "Home",
  }
)
const AppContainer = createAppContainer(AppNavigator)

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