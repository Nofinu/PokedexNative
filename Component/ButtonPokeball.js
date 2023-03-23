import { StyleSheet, Image, Pressable } from 'react-native'
import React, {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ButtonPokeball(props) {

  const number = props.number

  const [captureState,setcaptureState]=useState(false)
  const [captureList,setCaptureList] =useState([])
  const [firstTest,setFirstTest]=useState(true)

  const FetchCaptureListe = async()=>{
    const response = await AsyncStorage.getItem('captureListe')
    if(response !== null){
      setCaptureList(JSON.parse(response))
    }
    setFirstTest(false)
  }

  const setCaptureListAsync = async()=>{
    await AsyncStorage.setItem('captureListe',JSON.stringify(captureList))
  }
//ajouter la persitance via une slice 
  const changeStateCapture=(state)=>{
    if(state){
      const tmptab = [...captureList]
      setCaptureList([...tmptab.filter(e => e !== number)])
      setcaptureState(!state)
    }
    else{
      setCaptureList([...captureList,number])
      setcaptureState(!state)
    }
  }

  useEffect(()=>{
    console.log("capturelist",captureList)
    if(firstTest){
      FetchCaptureListe()
    }

    if(captureList.includes(number)){
      setcaptureState(true)
    }
    else{
      setcaptureState(false)
    }

    setCaptureListAsync()
  },[number,captureList])

  return (
    <Pressable onPress={()=>changeStateCapture(captureState)}>
      {
        captureState?
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"}} style={{height:40,width:40}} />
        :
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"}} style={{height:40,width:40}} tintColor={"black" }/>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({})