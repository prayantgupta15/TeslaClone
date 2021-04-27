import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarList from './components/CarList/index';
import Header from './components/Header/index';

export default function App() {


  return (
    <View style={styles.container}>
      <Header />
      <CarList></CarList>
      <StatusBar></StatusBar>




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
