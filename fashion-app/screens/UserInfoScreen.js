import React from 'react'
import { View, Text, Button } from 'react-native'

class UserInfoScreen extends React.Component {
  static navigationOptions = {
    title: 'User information',
  }

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

export default UserInfoScreen