import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Constants } from 'expo'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import KakaoLogin from './screens/KakaoLoginScreen'
import UserInfoScreen from './screens/UserInfoScreen'


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
  static navigationOptions = {
    'title': 'Login',
  }

  state = {
    user: null,
  }

  userHandler = (user) => {
    this.setState({user}, () => {this.props.navigation.navigate('UserInfo', {
      user: this.state.user,
    })}, this.props.navigation.navigate('UserInfo', { user }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <FBLogIn handler={this.userHandler} />
          <GoogleLogIn handler={this.userHandler} />
          <KakaoLogin handler={this.userHandler} />
        </View>
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