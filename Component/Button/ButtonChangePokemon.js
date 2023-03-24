import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'

export default function ButtonChangePokemon(props) {
  return (
    <Pressable style={styles.container} onPress={()=> props.onpress(props.pokemonNumber)}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text:{
    color:"black",
    fontSize:40,
    marginBottom:15,
  },
  container:{
    backgroundColor:"white",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    width:80,
    marginTop:15,
  }
})