import { StyleSheet, Text, View, Image,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import DarkModeComponent from '../Component/DarkModeComponent/DarkModeComponent'
import { getInfoPokemon } from '../Services/data.service'
import { useNavigation } from '@react-navigation/native'
import ButtonPokeball from '../Component/Button/ButtonPokeball'
import ButtonChangePokemon from '../Component/Button/ButtonChangePokemon'

export default function PokemonDisplayPage({route}) {

  const navigation = useNavigation()

  const [pokemonNumber,setPokemonNumber]=useState(route.params.idPokemon)
  const [pokemonData,setPokemonData]=useState({})

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`

  const fetchPokemonInfo = async ()=>{
    const response = await getInfoPokemon(url)
    setPokemonData(response)
  }

  const pokemonPlus=(number)=>{
    setPokemonNumber(number+1)
  }

  const pokemonMinus=(number)=>{
    setPokemonNumber(number-1)
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
      case"poison":
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
    navigation.setOptions({headerRight:()=><ButtonPokeball number={pokemonNumber} name={route.params.pokemonName}/>})
  },[pokemonNumber])

  return (
    <DarkModeComponent>
      <View style={styles.container}>
        <Text style={styles.text}>{pokemonNumber} {route.params.pokemonName}</Text>
        <View style={styles.pokemonContainer}>
          <View style={styles.typeContainer}>
            {
              pokemonData.types !== undefined ?
              
              pokemonData.types.map((types,index) => {
                const path = findType(types.type.name)
              return <Image key={index} source={path} style={{height:20,width:120,marginLeft:10}}/>
            })
            :
            <ActivityIndicator/>
            }
          </View>
            {
              pokemonData.sprites !== undefined ?
                <Image source={{uri:pokemonData.sprites.front_default}} style={[{height:300,width:300},styles.pokemonImage]}/>
                :
                <ActivityIndicator/>
            }
          <View style={styles.abilityContainer}>
          {
            pokemonData.abilities !== undefined ?
            pokemonData.abilities.map((ability,index)=><Text key={index} style={styles.textAbility}>{ability.ability.name}</Text>)
            :
            <ActivityIndicator/>
          }
          </View>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        <ButtonChangePokemon text={"←"} onpress={pokemonMinus} pokemonNumber={pokemonNumber}/>
        <ButtonChangePokemon text={"→"} onpress={pokemonPlus} pokemonNumber={pokemonNumber}/>
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
    textAlign:"center",
    width:250,
    color:"black",
    fontSize:32,
    backgroundColor:"white",
    borderRadius:10,
    marginBottom:20
  },
  pokemonContainer:{
    backgroundColor:"red",
    borderRadius:10,
    padding:5,
    justifyContent:"center",
    alignItems:"center"
  },
  pokemonImage:{
    borderRadius:10,
    backgroundColor:"white",
  },  
  typeContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:15,
    height:25,
  },
  abilityContainer:{
    width:280,
    backgroundColor:"white",
    borderRadius:10,
    marginTop:10,
    marginBottom:10
  },
  textAbility:{
    textAlign:"center",
    fontSize:20,
    color:"black"
  },
  arrowContainer:{
    width:"50%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
})