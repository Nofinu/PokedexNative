import { StyleSheet, Image, Pressable } from 'react-native'
import React, {useState,useEffect,useLayoutEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCaptureList, SetCaptureList } from '../Data/CaptureSlice'

export default function ButtonPokeball(props) {

  const number = props.number

  const dispatch = useDispatch()

  const darkmode = useSelector(state => state.darkMode.darkModeState)
  const captureList = useSelector(state => state.captureList.captureList)
  const [captureState,setcaptureState]=useState(false)

  const changeStateCapture=(statu)=>{
    if(statu){
      const tmpList = [...captureList.filter(p=> p !== number)]
      dispatch(SetCaptureList(tmpList))
    }
    else{
      const tmpList = [...captureList,number]
      dispatch(SetCaptureList(tmpList))
    }
  }


useLayoutEffect(() => {
  if (captureList !== undefined){
    if(captureList.includes(number)){
      setcaptureState(true)
    }
    else{
      setcaptureState(false)
    }
  }
}, [number,captureList])


  useEffect(()=>{
    dispatch(FetchCaptureList())
  },[])

  return (
    <Pressable onPress={()=>changeStateCapture(captureState)}>
      {
        captureState?
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"}} style={{height:40,width:40}} />
        :
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"}} style={{height:40,width:40}} tintColor={darkmode? "grey":"black" }/>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({})