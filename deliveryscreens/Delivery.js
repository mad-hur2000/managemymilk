import React, {useState} from 'react';
import { View ,Text, ImageBackground, TouchableOpacity, FlatList} from 'react-native';

import { globalstyles } from '../styles/Global';
import bgimage from '../assets/bgimage3.jpg';
import { StyleSheet } from 'react-native';

const Delivery = ({navigation}) => {
  // const gotoprofile = () => {
  //   navigation.navigate('ViewProfile');
  // }

  const [customer] = useState([
      
    { name: 'Nisarg mungra', mobileNo: '9988d998859' , Email:'mafdfaad@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'akdjslka', mobileNo: '998fg899859' , Email:'mad@gmaeil.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsdklfg munskadlfgra', mobileNo: '99s8898859' , Email:'maagd@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'djsa mungra', mobileNo: '998fg9989' , Email:'mad@gagfgaagmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Ndjsarg mungra', mobileNo: '98899fg8859' , Email:'madafg@gmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Nsdjsarg mungra', mobileNo: '8899885a9' , Email:'mad@gmajkil.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'Ndjsag mungra', mobileNo: '9998s8s59' , Email:'mad@gmfjail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
    { name: 'djsag mungra', mobileNo: '9988sg59' , Email:'mad@tygmail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},

    { name: 'Jay', mobileNo: 9988998849 , Email:'mad@gmykail.com', morningMilk:2 , eveningMilk:1 , houseName_No:'295-A' ,street:'11',society:'Raijibaug', city:'Junagadh',state:'Gujarat'},
  ]);


  return(
   
      <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
      
          <FlatList
          keyExtractor={(item)=> item.Email }
          data={customer}
          renderItem= {({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Showcustomer',item)}>
              <View style={globalstyles.card} >
                <Text style={styles.cardtextname}> Name : {item.name}</Text>
                <View style={styles.milktext}>
                  <Text style={styles.cardtextmilk}>Morning : {item.morningMilk}</Text>
                  <Text style={{ flex:3}}>Evening : {item.eveningMilk}</Text>
                </View>
              </View>
            </TouchableOpacity>
                  
          )}
        />
        
      </ImageBackground>
   
   
  )
};

const styles =StyleSheet.create({

    cardtextname:{
      fontSize:20,
      borderBottomWidth:0.2,
    },

    cardtextmilk:{  
      flex:1,
      marginLeft:5,
      
    },

    milktext:{
      flexDirection:'row',
    }


});

export default Delivery;

