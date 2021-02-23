// import { createStackNavigator } from "react-navigation-stack";
// import Myprofile from "../deliveryscreens/MyprofileDelivery";
// import React from "react";
// import Header from "../shared/Header";

// const screens = {
//   Myprofile: {
//     screen: Myprofile,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigtion={navigation} title="Myprofile" />,
//       };
//     },
//   },
// };
// const Myprofiledeliverystack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Myprofiledeliverystack;

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import MyprofileDelivery from '../deliveryscreens/MyprofileDelivery'
import Entypo from "react-native-vector-icons/Entypo";

export default function Myprofiledeliverystack({navigation}){
  const Myprofiledeliverystack = createStackNavigator();
  return(
    <Myprofiledeliverystack.Navigator>
      <Myprofiledeliverystack.Screen
      name='MyprofileDelivery' 
      component={MyprofileDelivery} 
      options={{
          title:'My Profile',
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

      </Myprofiledeliverystack.Screen>
    </Myprofiledeliverystack.Navigator>
  )
}
