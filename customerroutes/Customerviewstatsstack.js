// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import React from "react";
// import Header from "../shared/Header";
// import Customerviewstats from "../customerscreens/Customerviewstats";

// const screens = {
//   Customerviewstatsstack: {
//     screen: Customerviewstats,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header navigtion={navigation} title="Customer data" />
//         ),
//       };
//     },
//   },
// };

// const Customerviewstatsstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });
// export default Customerviewstatsstack;

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Customerviewstats from '../customerscreens/Customerviewstats'
import Entypo from "react-native-vector-icons/Entypo";




export default function Customerviewstatsstack({navigation}){
  const Customerviewstatsstack=createStackNavigator();
  return(
    
     <Customerviewstatsstack.Navigator>
       <Customerviewstatsstack.Screen
        name='Customerviewstats'
        component={Customerviewstats}
        options={{
          title:'Statistics',
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
        }}
        />
     </Customerviewstatsstack.Navigator>
    
  )
};