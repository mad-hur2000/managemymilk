import { StatusBar } from 'expo-status-bar';
import React,{Component, useState} from 'react';
import { StyleSheet, View,} from 'react-native';

import * as Font from 'expo-font';
import {globalstyles} from './styles/Global'

import Login from './screen/Login';
import ProfileActivate from './screen/ProfileActivate';
import SignUp from './screen/SignUp';
import Manager from './screen/Manager';
import Welcome from './screen/Welcome';
import ViewProfile from './screen/ViewProfile';
import Navigator  from './routs/Managerstack';



export default function App() {

      return (

          <View style={styles.container}>
            <Navigator />
            {/* <MyProfile /> */}
            {/* <Login /> */}
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
