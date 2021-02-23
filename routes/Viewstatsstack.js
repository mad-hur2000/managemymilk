// import React from "react";
// import { createStackNavigator } from "react-navigation-stack";
// import Viewstats from "../screen/ViewStats";
// import Header from "../shared/Header";

// const screens = {
//   Viewstats: {
//     screen: Viewstats,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigtion={navigation} title="View Stats" />,
//       };
//     },
//   },
// };
// const Viewstatsstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Viewstatsstack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import viewstatsstack from '../screen/ViewStats'
import Entypo from "react-native-vector-icons/Entypo";

export default function Viewstatsstack({navigation}){
  const Viewstatsstack=createStackNavigator();
  return(
    <Viewstatsstack.Navigator>
    <Viewstatsstack.Screen
        name='Statistics'
        component={viewstatsstack}
        options={{
          title:'Statistics',
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
    
    </Viewstatsstack.Navigator>
  )
};