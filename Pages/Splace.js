import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Slpace = ({navigation}) => {
  useEffect(()=>{

  setTimeout(()=>{
      navigation.navigate('Parent')

  },5000)

  },[])


  return (
    <View>
      <Text>Space</Text>
    </View>
  )
}

export default Slpace