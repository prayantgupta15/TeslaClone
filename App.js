import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CarItem from './components/carItem/index';


export default function App() {


  return (
    <View style={styles.container}>

      <StatusBar></StatusBar>
      <CarItem />



    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },


});
