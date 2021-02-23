// import { createStackNavigator } from "react-navigation-stack";
// import Adddeliveryboy from "../screen/AddDeliveryboy";
// import React from "react";
// import Header from "../shared/Header";

// const screens = {
//   Adddeliveryboy: {
//     screen: Adddeliveryboy,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header navigtion={navigation} title="Add Deliveryboy" />
//         ),
//       };
//     },
//   },
// };

// const Adddeliveryboystack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Adddeliveryboystack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import adddeliveryboystack from '../screen/AddDeliveryboy'
import Entypo from "react-native-vector-icons/Entypo";

export default function Adddeliveryboystack({navigation}){
  const Adddeliveryboystack=createStackNavigator();
  return(
    <Adddeliveryboystack.Navigator>
    <Adddeliveryboystack.Screen
        name='Add Delivery-Man'
        component={adddeliveryboystack}
        options={{
          title:'Add Delivery-Man',
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
    
    </Adddeliveryboystack.Navigator>
  )
};
