import { StyleSheet,Pressable,Text,View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PokedexButton({area}) {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate('pokedex',{area:area})}>
      <View style={styles.RedBorderRight}/>
      <Text style={styles.text}>
        {area}
      </Text>
      <View style={styles.RedBorderRight}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    height:90,
    width:250,
    borderColor:"red",
    borderWidth:5,
    borderRadius:10,
    marginTop:25,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  RedBorderRight:{
    backgroundColor:"red",
    width:35,
    height:"100%"
  },
  text:{
    fontSize:30,
    color:"black"
  }
})