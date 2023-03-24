import { StyleSheet,Pressable,Text,View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PokedexButton({area}) {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate('pokedex',{area:area})}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{area}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    height:90,
    width:250,
    borderRadius:10,
    marginTop:25,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"red"
  },
  RedBorderRight:{
    backgroundColor:"red",
    width:35,
    height:"100%"
  },
  textContainer:{
    backgroundColor:"white",
    height:"85%",
    width:"70%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
  },
  text:{
    fontSize:30,
    color:"black",
  }
})