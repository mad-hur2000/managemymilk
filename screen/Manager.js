
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  navigate
} from "react-native";
import ViewProfile from "./Myprofile";


import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";
import { StyleSheet } from "react-native";


const Manager = ({ navigation }) => {

  // const gotoprofile = () => {
  //   navigation.navigate('ViewProfile');
  // }

  const [customer, setCustomer] = useState([
    {
      name: "Nisarg mungra",
      mobileNo: "9988d998859",
      Email: "mafdfaad@gmail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "akdjslka",
      mobileNo: "998fg899859",
      Email: "mad@gmaeil.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "Nsdklfg munskadlfgra",
      mobileNo: "99s8898859",
      Email: "maagd@gmail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "djsa mungra",
      mobileNo: "998fg9989",
      Email: "mad@gagfgaagmail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "Ndjsarg mungra",
      mobileNo: "98899fg8859",
      Email: "madafg@gmail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "Nsdjsarg mungra",
      mobileNo: "8899885a9",
      Email: "mad@gmajkil.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "Ndjsag mungra",
      mobileNo: "9998s8s59",
      Email: "mad@gmfjail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
    {
      name: "djsag mungra",
      mobileNo: "9988sg59",
      Email: "mad@tygmail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },

    {
      name: "Jay",
      mobileNo: 9988998849,
      Email: "mad@gmykail.com",
      morningMilk: 2,
      eveningMilk: 1,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
  ]);
  const [product,setProduct] = useState([
      
    { name: 'milk', price: '70 rs/liter' },
    { name: 'ghee', price: '1500 rs/kg'  },
    { name: 'gaumutra', price: '30 rs/liter' }
  ]);



  return(
   
      <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
        <ScrollView>
        <Text style={{backgroundColor: "rgba(0,150,254,0.8)",fontWeight:'bold',}}> Customers</Text>
         
          <FlatList
          keyExtractor={(item)=> item.Email }
          data={customer}
          renderItem= {({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('ShowCustomer',item)}> 
              <View style={styles.card} >
                <Text style={styles.cardtextname}>  Name : {item.name}</Text>
                <View style={styles.milktext}>
                  <Text style={styles.cardtextmilk}> Morning : {item.morningMilk}</Text>
                  <Text style={{ flex:3}}>Evening : {item.eveningMilk}</Text>
                </View>
              </View>
              
            </TouchableOpacity>

                  
          )}
          />

<Text style={{backgroundColor: "rgba(0,150,254,0.8)",fontWeight:'bold'}}> Delivery Men</Text>
         
         <FlatList
         keyExtractor={(item)=> item.Email }
         data={customer}
         renderItem= {({item}) => (
           <TouchableOpacity onPress={() => navigation.navigate('ShowDeliveryboy',item)}> 
             <View style={styles.card} >
               <Text style={styles.cardtextname}>  Name : {item.name}</Text>
               <View style={styles.milktext}>
                 <Text style={styles.cardtextmilk}> Morning : {item.morningMilk}</Text>
                 <Text style={{ flex:3}}>Evening : {item.eveningMilk}</Text>
               </View>
             </View>
             
           </TouchableOpacity>

                 
         )}
         />


        <Text style={{backgroundColor: "rgba(0,150,254,0.8)",fontWeight:'bold'}}> Products</Text>
        
         <FlatList
          // style={{marginTop:50}}
          keyExtractor={(item)=> item.Email }
          data={product}
          renderItem= {({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('ShowProduct',item)}> 
              <View style={styles.card} >
                <Text style={styles.cardtextname}>  Product Name : {item.name}</Text>
                
              </View>
            </TouchableOpacity>
            
                  
          )}
         />


        </ScrollView>
        
      </ImageBackground>
   
   
  )
};

const styles = StyleSheet.create({
  cardtextname: {
    fontSize: 20,
    borderBottomWidth: 0.2,
    borderColor: "rgba(0,150,254,0.8)",
  },

  card: {
    height: 70,
    width: "100%",
    borderRadius: 5,
    // marginHorizontal: "1%",
    borderColor:'rgba(56,170,254,0.9)',
    borderBottomWidth: 2,
    marginTop: 2,
    backgroundColor: "rgba(0,150,254,0.0)",
    opacity: 1,
  },

  cardtextmilk: {
    flex: 1,
    marginLeft: 5,
  },

  milktext: {
    flexDirection: "row",
  },
});

export default Manager;
