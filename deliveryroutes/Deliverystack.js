// import { createStackNavigator } from "react-navigation-stack";
// import ShowCustomer from "../deliveryscreens/Showcustomertodelivery";
// import React from "react";
// import Header from "../shared/Header";
// import Delivery from "../deliveryscreens/Delivery";

// const screens = {
//   Deliveryman: {
//     screen: Delivery,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header navigtion={navigation} title="Delivery Man" />
//         ),
//       };
//     },
//   },
//   Showcustomer: {
//     screen: ShowCustomer,
//     navigationOptions: {
//       title: "Customer Data",
//     },
//   },
// };

// const Deliverystack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Deliverystack;

import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Delivery from '../deliveryscreens/Delivery'
import ShowCustomertodelivery from '../deliveryscreens/ShowCustomertodelivery'
import Entypo from "react-native-vector-icons/Entypo";

export default function Deliverystack({navigation}){
  const Deliverystack = createStackNavigator();
  return(
    <Deliverystack.Navigator >
      <Deliverystack.Screen
      name='Deliverystack' 
      component={Delivery} 
      options={{
          title:'Delivery Dashboard',
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
        }}>

      </Deliverystack.Screen>
      <Deliverystack.Screen
      name='ShowCustomertodelivery' 
      component={ShowCustomertodelivery} 
      options={{
          title:'Customer Data',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          }
        }}>

      </Deliverystack.Screen>
    </Deliverystack.Navigator>
  )
}