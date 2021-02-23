// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import React from "react";
// import Header from "../shared/Header";
// import Myprofilecustomer from "../customerscreens/Myprofilecustomer";

// const screens = {
//   Myprofilecustomer: {
//     screen: Myprofilecustomer,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigtion={navigation} title="My Profile" />,
//       };
//     },
//   },
// };

// const Myprofilecustomerstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   }, 
// });
// export default Myprofilecustomerstack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Myprofilecustomer from "../customerscreens/Myprofilecustomer"
import Entypo from "react-native-vector-icons/Entypo";


export default function Myprofilecustomerstack({navigation}){
  const Myprofilecustomerstack=createStackNavigator();
  return(
   
      <Myprofilecustomerstack.Navigator>
        <Myprofilecustomerstack.Screen 
          name='Myprofilecustomer' 
          component={Myprofilecustomer}
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
          }}
        />
      </Myprofilecustomerstack.Navigator>

  )
};