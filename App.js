import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useEffect}from 'react'
import Lab1_2 from './screen/Lab1.2'
import Lab1_1 from './screen/Lab1.1'
import Lab1_3 from './screen/Lab1.3'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screen/Lab1-home'
import Splash from './screen/Lab1-Splash'

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Bai1' component={Lab1_1} />
      <Stack.Screen name='Bai2' component={Lab1_2} />
      <Stack.Screen name='Bai3' component={Lab1_3} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})