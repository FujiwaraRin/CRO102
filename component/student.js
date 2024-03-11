import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function student ({name, address, age}) {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Address: {address}</Text>
      <Text>Age: {age}</Text>
    </View>
  )
}



const styles = StyleSheet.create({})