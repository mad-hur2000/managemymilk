import { StatusBar } from 'expo-status-bar';
import React,{Component, useState} from 'react';
import { StyleSheet, View,} from 'react-native';

import * as Font from 'expo-font';
import {globalstyles} from './styles/Global'

import Login from './screen/Login';
import ProfileActivate from './screen/ProfileActivate';
import SignUp from './screen/SignUp';
import Manager from './screen/Manager';

import ViewProfile from './screen/Myprofile';
import NavigatorManager  from './routes/Drawer';
import NavigatorCustomer from './customerroutes/Customerdrawer'



export default function App() {

      return (

          <View style={styles.container}>
            {/* <NavigatorManager /> */}
            <NavigatorCustomer />

            {/* <MyProfile /> */}
            {/* <Login /> */}
            {/* <ProfileActivate /> */}
            {/* <Manager /> */}
            {/* <Welcome /> */}
            {/* <SignUp /> */}

          </View>

      );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },

});
