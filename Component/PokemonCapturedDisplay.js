import { StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { getInfoPokemon } from '../Services/data.service'
import { useNavigation } from '@react-navigation/native'

export default function PokemonCapturedDisplay({pokemon}) {

  const navigation = useNavigation()

  const [pokemonPics, setPokemonpics]=useState("")

  const fetchPokemonInfo = async ()=>{
    const response = await getInfoPokemon(pokemon.url)
    setPokemonpics(response.sprites.front_default)
  }

  const goToPokemon = ()=>{
    const tmptab = pokemon.url.split('/')
    navigation.navigate('pokemon',{idPokemon: Number(tmptab[tmptab.length-2]),pokemonName:pokemon.name})
  }

  useEffect(()=>{
    if(pokemonPics === ""){
      fetchPokemonInfo()
    }
  },[pokemonPics])

  return (
    <Pressable onPress={goToPokemon}>
      <View style={styles.container}>
            {
          pokemonPics != "" ?
          <Image source={{uri:pokemonPics}} style={{width:120,height:120}}/>
          :
            <ActivityIndicator/>
          }
          <View style={styles.textContainer}>
            <Text style={styles.text}>{pokemon.name}</Text>
          </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({  
  container:{
  borderColor:"red",
  borderWidth:3,
  borderRadius:10,
  marginTop:5,
  marginLeft:5,
  justifyContent:"space-around",
  backgroundColor:"white",
},
textContainer:{
  height:35,
  backgroundColor:"red",
  justifyContent:"center"
},
text:{
  color:"white",
  width:"100%",
  textAlign:"center",
  fontSize:20,
}})