// import { createStackNavigator } from "react-navigation-stack";
// import AddCustomer from "../screen/AddCustomer";
// import React from "react";
// import Header from "../shared/Header";

// const screens = {
//   AddCustomer: {
//     screen: AddCustomer,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header navigtion={navigation} title="Add Customer" />
//         ),
//       };
//     },
//   },
// };

// const Addcustomerstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Addcustomerstack;

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import addcustomerstack from '../screen/AddCustomer'
import Entypo from "react-native-vector-icons/Entypo";

export default function Addcustomerstack({navigation}){
  const Addcustomerstack=createStackNavigator();
  return(
    <Addcustomerstack.Navigator>
    <Addcustomerstack.Screen
        name='About Application'
        component={addcustomerstack}
        options={{
          title:'Add Customer',
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
    
    </Addcustomerstack.Navigator>
  )
};
