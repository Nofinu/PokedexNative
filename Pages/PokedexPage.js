import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchPokedex } from '../Data/PokedexSlice';

export default function PokedexPage({navigation,route}) {

  const dispatch = useDispatch()

  const area = route.params.area

  useLayoutEffect(()=>{
    navigation.setOptions({title:area})
    dispatch(FetchPokedex(area))
  },[])

  return (
    <View>
      <Text>{area}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})