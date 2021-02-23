// import { createStackNavigator } from "react-navigation-stack";
// import AddProduct from "../screen/AddProduct";
// import React from "react";
// import Header from "../shared/Header";

// const screens = {
//   AddProduct: {
//     screen: AddProduct,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header navigtion={navigation} title="Add Product" />
//         ),
//       };
//     },
//   },
// };

// const Addproductstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Addproductstack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import addproductstack from '../screen/AddProduct'
import Entypo from "react-native-vector-icons/Entypo";

export default function Addproductstack({navigation}){
  const Addproductstack=createStackNavigator();
  return(
    <Addproductstack.Navigator>
    <Addproductstack.Screen
        name='Add Delivery-Man'
        component={addproductstack}
        options={{
          title:'Add Product',
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
    
    </Addproductstack.Navigator>
  )
};
