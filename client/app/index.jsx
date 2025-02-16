import { View, Text, StyleSheet,ImageBackground,Pressable } from 'react-native'
import React from 'react'
import testImg from '../assets/images/possessed-photography-jIBMSMs4_kA-unsplash.jpg'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={style.container}>
      <ImageBackground
      style={style.image}
      source={testImg}
      resizeMode='cover'
      >
      <Text style={style.text}>coffee shop</Text>
      <Link style={{marginHorizontal:'auto'}} href='/explore' asChild>
   <Pressable style={style.buttonText}>
      <Text>Explore</Text>
      </Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default index
const style=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  image:{
    flex:1,
    justifyContent:"center",
    width:'100%',
    height:'100%',
    resizeMode:"cover",
    
  },
  text:{
    fontSize:42,
    color:'white',
    textAlign:"center",
    fontWeight:'bold',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120
  },
  link:{
    fontSize:42,
    color:'white',
    textAlign:"center",
  textDecorationLine:'underline',
    fontWeight:'bold',
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:4
  },
  buttonText:{
    fontSize:16,
    color:'white',
    textAlign:"center",
  textDecorationLine:'underline',
    fontWeight:'bold',
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:4
  }
})