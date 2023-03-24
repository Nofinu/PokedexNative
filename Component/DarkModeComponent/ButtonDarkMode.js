import { StyleSheet,Image,Pressable } from 'react-native'
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../Data/DarkmodeSlice'


export default function ButtonDarkMode() {

  const dispatch = useDispatch()

  const darkModeState = useSelector(state=> state.darkMode.darkModeState)

  const moon ="http://cdn.onlinewebfonts.com/svg/img_39469.png"
  const sun ="https://static.vecteezy.com/system/resources/previews/009/344/657/original/sun-transparent-background-free-png.png"

  const changeMod = ()=>{
    dispatch(setDarkMode(!darkModeState))
  }


  return (
    <Pressable onPress={changeMod}>
      <Image source={{uri: darkModeState? moon : sun}} style={darkModeState ? styles.moon : styles.sun} tintColor={darkModeState? "white" : "black"}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  moon:{
    width:20,
    height:20,
    marginRight:10,
  },
  sun:{
    width:40,
    height:40
  }
})