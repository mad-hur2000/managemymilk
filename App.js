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
import NavigatorDelivery from './deliveryroutes/Deliverydrawer'

const state = 'ismanager'
const isloggedin = true

export default function App() {

              if(state=='ismanager' && isloggedin){
                return <NavigatorManager />
              }
              
              else if(state=='iscustomer' && isloggedin){
                 return <NavigatorCustomer />
              } 
              else if(state=='isdeliveryboy'&& isloggedin){
                return <NavigatorDelivery />
              }

            

      
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },

});
