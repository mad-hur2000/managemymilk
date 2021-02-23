// import { createStackNavigator } from "react-navigation-stack";
// import Myprofile from "../screen/Myprofile";
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
// const Myprofilestack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Myprofilestack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import myprofilestack from '../screen/Myprofile'
import Entypo from "react-native-vector-icons/Entypo";

export default function Myprofilestack({navigation}){
  const Myprofilestack=createStackNavigator();
  return(
    <Myprofilestack.Navigator>
    <Myprofilestack.Screen
        name='My Profile'
        component={myprofilestack}
        options={{
          title:'My Profile',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:22,
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
    
    </Myprofilestack.Navigator>
  )
};