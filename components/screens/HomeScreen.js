import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{
      backgroundColor: '#202123',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
      color:'white'
      }}>Home Screen</Text>
    </View>
  )
}

export default HomeScreen