import React, {useState} from 'react';
import { View ,Text, Button, ImageBackground, TouchableOpacity, FlatList  , navigate} from 'react-native';
import ViewProfile from '../screen/ViewProfile'

import { globalstyles } from '../styles/Global';
import bgimage from '../assets/bgimage3.jpg';
import ShowCustomer from '../screen/ShowCustomer'

const Manager = ({navigation}) => {
  // const gotoprofile = () => {
  //   navigation.navigate('ViewProfile');
  // }

  const [customer,setCustomer] = useState([
    { name: 'madhur mungra', mobileNo: '9988998899' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '9988998859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '998899859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '998898859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '9989989' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '988998859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '88998859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '9998859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsarg mungra', mobileNo: '998859' , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},

    { name: 'Jay', mobileNo: 9988998849 , Email:'mad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
  ]);
  return(
   
      <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
      
      {/* <Text>Manager screen</Text> */}
      {/* <Button title='my profile' onPress={ gotoprofile } >my profile</Button> */}
        <FlatList
          keyExtractor={(item)=> item.mobileNo }
          data={customer}
          renderItem= {({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('ShowCustomer',item)}>
              <View style={globalstyles.card} >
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
                  
          )}
        />
        
      </ImageBackground>
   
   
  )
};

export default Manager;

