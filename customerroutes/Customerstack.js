// import { createStackNavigator } from "react-navigation-stack";
// import React from "react";
// import Header from "../shared/Header";
// import Customer from "../customerscreens/Customer";

// const screens = {
//   Customer: {
//     screen: Customer,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigtion={navigation} title="Dashboard" />,
//       };
//     },
//   },
// };

// const Customerstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Customerstack;
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Customer from '../customerscreens/Customer'
import { Button, TouchableOpacity, StyleSheet } from 'react-native';
import openDrawer from '@react-navigation/drawer'
import { navigation } from '@react-navigation/native'
import Header from '../shared/Header'
import Entypo from "react-native-vector-icons/Entypo";





export default function Customerstack({navigation}){
  const Customerstack=createStackNavigator();
  return(
    

      <Customerstack.Navigator>
        <Customerstack.Screen 
          name='Customer' 
          component={Customer} 
          options={{
              title:'Dashboard',
              headerStyle: {
                backgroundColor: '#2F84EA',
                // marginLeft:10                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',fontSize:22,
            },
            headerLeft:() => (
              <Entypo 
                name='menu' 
                style={{
                  marginLeft:10,
                  marginTop:8,
                }} 
                size={32} 
                onPress={ () => navigation.openDrawer() }/>
            )
              // navigationOptions:( {navigation} ) => ({
              //   headerLeft: <Header navigate={navigation.navigate(openDrawer)} />,
              // }),
              // headerLeft:
              // <TouchableOpacity onPress={ () => navigation.openDrawer()}> 
              //   <Entypo name={"menu"} size={26} onPress= {({navigation}) => navigation.navigate('View Stats')}/>
              // </TouchableOpacity>
                  
               
          }}
          
        />
      </Customerstack.Navigator>

    
  )
};


// const styles = StyleSheet.create({
//   header: {
//     height: "100%",
//     width: "100%",
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headertext: {
//     fontWeight: "bold",
//     fontSize: 20,
//     letterSpacing: 1,
//   },
//   iconmenu: {
//     position: "absolute",
//     left: 0,
//   },
// });