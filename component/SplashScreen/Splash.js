import { View, Text , ImageBackground } from 'react-native'
import React from 'react'

export default function Splash() {
  return (
    <ImageBackground
        style={{flex:1}}
        resizeMode="cover"
      
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220224-alzr6-sdds'}}
    ></ImageBackground>
  )
}