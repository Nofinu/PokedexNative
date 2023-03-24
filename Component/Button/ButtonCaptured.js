import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ButtonCaptured() {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate('captured')}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Capturé  </Text>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"}} style={{height:40,width:40}} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    borderRadius:10,
    width:"75%",
    backgroundColor:"red",
    height:80
  },
  innerContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    backgroundColor:"white",
    height:"88%",
    width:"80%",
  },
  text:{
    fontSize:28,
    color:"black",
  }
})