// import { createStackNavigator } from "react-navigation-stack";
// import About from "../screen/About";
// import React from "react";
// import Header from "../shared/Header";

// const screens = {
//   About: {
//     screen: About,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigtion={navigation} title="About" />,
//       };
//     },
//   },
// };


// const Aboutstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Aboutstack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import aboutstack from '../screen/About'
import Entypo from "react-native-vector-icons/Entypo";

export default function Aboutstack({navigation}){
  const Aboutstack=createStackNavigator();
  return(
    <Aboutstack.Navigator>
    <Aboutstack.Screen
        name='About Application'
        component={aboutstack}
        options={{
          title:'About Application',
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
    
    </Aboutstack.Navigator>
  )
};
