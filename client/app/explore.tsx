import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Welcome to the explore page</Text>
    </View>
  )
}

export default explore
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  text:{
    color:"white",
    flex:1,
    textAlign:'center'
  }
})