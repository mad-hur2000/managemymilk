import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, View,} from 'react-native';

import Login from './screen/Login';
import ProfileActivate from './screen/ProfileActivate';
import SignUp from './screen/SignUp';
import Manager from './screen/Manager';
import Welcome from './screen/Welcome';



export default function App() {
  return (

      <View style={styles.container}>
        <Login />
        {/* <SignUp /> */}
        {/* <ProfileActivate /> */}
        {/* <Manager /> */}
        {/* <Welcome /> */}

      </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },

});
