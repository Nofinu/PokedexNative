import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DarkModeComponent from '../Component/DarkModeComponent/DarkModeComponent'
import { getInfoPokemon } from '../Services/data.service'

export default function PokemonDisplayPage({route}) {

  const [pokemonNumber,setPokemonNumber]=useState(route.params.idPokemon)
  const [pokemonData,setPokemonData]=useState({})

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`

  const fetchPokemonInfo = async ()=>{
    const response = await getInfoPokemon(url)
    setPokemonData(response)
  }

  const findType=(type)=>{
    switch(type){
      case"bug":
        return( require('../asset/Type_bug.png'))
      case"dark":
        return( require('../asset/Type_dark.png'))
      case"dragon":
        return( require('../asset/Type_dragon.png'))
      case"electric":
        return( require('../asset/Type_electric.png'))
      case"fairy":
        return( require('../asset/Type_fairy.png'))
      case"fighting":
        return( require('../asset/Type_fighting.png'))
      case"fire":
        return( require('../asset/Type_fire.png'))
      case"flying":
        return( require('../asset/Type_flying.png'))
      case"ghost":
        return( require('../asset/Type_ghost.png'))
      case"grass":
        return( require('../asset/Type_grass.png'))
      case"ground":
        return( require('../asset/Type_ground.png'))
      case"ice":
        return( require('../asset/Type_ice.png'))
      case"normal":
        return( require('../asset/Type_normal.png'))
      case"poisson":
        return( require('../asset/Type_poison.png'))
      case"psychic":
        return( require('../asset/Type_psychic.png'))
      case"rock":
        return( require('../asset/Type_rock.png'))
      case"shadow":
        return( require('../asset/Type_shadow.png'))
      case"steel":
        return( require('../asset/Type_steel.png'))
      case"unknown":
        return( require('../asset/Type_unknown.png'))
      case"water":
        return( require('../asset/Type_water.png'))
    }
  }

  useEffect(()=>{
    fetchPokemonInfo()
  },[pokemonNumber])

  console.log("pokemondata",pokemonData.abilities)
  return (
    <DarkModeComponent>
      <View style={styles.container}>
        <Text style={styles.text}>{pokemonNumber} {route.params.pokemonName}</Text>
        <View style={styles.imageContainer}>
          {
            pokemonData.types !== undefined &&
            
            pokemonData.types.map((types,index) => {
              const path = findType(types.type.name)
            return <Image key={index} source={path} style={{height:20,width:120}}/>
          })
          }
        </View>
        {
          pokemonData.sprites !== undefined &&
            <Image source={{uri:pokemonData.sprites.front_default}} style={{height:300,width:300,}}/>
        }
        <View>
        {
          pokemonData.abilities !== undefined &&
          pokemonData.abilities.map((ability,index)=><Text style={styles.text}>{ability.ability.name}</Text>)
        }
        </View>
      </View>
    </DarkModeComponent>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"white"
  },
  imageContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:15,
  }
})