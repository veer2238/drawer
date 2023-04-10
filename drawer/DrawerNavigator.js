import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='home' component={Home}/>
      </Drawer.Navigator>
    )
  
}

export default DrawerNavigator