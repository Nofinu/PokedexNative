import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../Pages/HomePage'
import PokedexPage from '../Pages/PokedexPage'

export default function NavigatorComponent() {

  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomePage} options={{headerShown:false}}/>
      <Stack.Screen name='pokedex' component={PokedexPage} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})