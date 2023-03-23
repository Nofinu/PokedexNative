import { StyleSheet, SafeAreaView } from 'react-native'
import React, {  useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


export default function DarkModeComponent(props) {
  const navigation = useNavigation()

  const darkModeState = useSelector(state=>state.darkMode.darkModeState)

  useLayoutEffect(()=>{
    navigation.setOptions({headerStyle:{backgroundColor : darkModeState? "#000000" : "#FFFFFF"}, headerTintColor: darkModeState? "#FFFFFF" : "#000000",})
  },[darkModeState])

  return (
    <SafeAreaView style={[darkModeState ? styles.dark : styles.light,styles.height]}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dark:{
    backgroundColor:"black"
  },
  light:{
    backgroundColor:"white"
  },
  height:{
    height:"100%"
  }
})