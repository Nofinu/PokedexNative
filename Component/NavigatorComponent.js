import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../Pages/HomePage'
import PokedexPage from '../Pages/PokedexPage'
import ButtonDarkMode from './DarkModeComponent/ButtonDarkMode'
import PokemonDisplayPage from '../Pages/PokemonDisplayPage'
import ButtonPokeball from './ButtonPokeball'

export default function NavigatorComponent() {

  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign:"center",headerTitleStyle:{fontSize:28},}}>
      <Stack.Screen name='home' component={HomePage} options={{title:"Pokedex",headerRight:()=><ButtonDarkMode/>}}/>
      <Stack.Screen name='pokedex' component={PokedexPage} />
      <Stack.Screen name='pokemon' component={PokemonDisplayPage} options={{title:""}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})