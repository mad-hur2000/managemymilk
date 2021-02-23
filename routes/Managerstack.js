// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import Manager from "../screen/Manager";
// import ViewProfile from "../screen/Myprofile";
// import globalstyles from "../styles/Global";
// import ShowCustomer from "../screen/ShowCustomer";
// import EditCustomer from "../screen/EditCustomer";
// import React from "react";
// import Header from "../shared/Header";
// import EditProduct from "../screen/EditProduct";
// import ShowProduct from "../screen/ShowProduct";

// const screens = {
//   Manager: {
//     screen: Manager,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigtion={navigation} title="Manager" />,
//       };
//     },
//   },
//   // ViewProfile:{
//   //     screen:ViewProfile,
//   //     navigationOptions: {
//   //         title:'My Profile',
//   //     }
//   // },
//   ShowCustomer: {
//     screen: ShowCustomer,
//     navigationOptions: {
//       title: "Customer Data",
//     },
//   },
//   EditCustomer: {
//     screen: EditCustomer,
//     navigationOptions: {
//       title: "Edit Customer",
//     },
//   },

//   ShowProduct: {
//     screen: ShowProduct,
//     navigationOptions: {
//       title: "Product",
//     },
//   },
//   EditProduct: {
//     screen: EditProduct,
//     navigationOptions: {
//       title: "Product",
//     },
//   },
// };

// const Managerstack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#0d0",
//       height: 80,
//     },
//   },
// });

// export default Managerstack;


import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import manager from '../screen/Manager'
import ViewProfile from "../screen/Myprofile";
import globalstyles from "../styles/Global";
import ShowCustomer from "../screen/ShowCustomer";
import EditCustomer from "../screen/EditCustomer";
import ShowDeliveryboy from '../screen/ShowDeliveryboy'
import EditDeliveryboy from '../screen/EditDeliveryboy'
import Header from "../shared/Header";
import EditProduct from "../screen/EditProduct";
import ShowProduct from "../screen/ShowProduct";
import Entypo from "react-native-vector-icons/Entypo";


export default function Managerstack({navigation}){
  const Managerstack=createStackNavigator();
  return(
    <Managerstack.Navigator>
    <Managerstack.Screen
        name='Manager'
        component={manager}
        options={{
          title:'Manager Dashboard',
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

<Managerstack.Screen
        name='Profile'
        component={ViewProfile}
        options={{
          title:'Profile',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }} 
    />

<Managerstack.Screen
        name='ShowCustomer'
        component={ShowCustomer}
        options={{
          title:'Customer Data',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }} 
    />

<Managerstack.Screen
        name='EditCustomer'
        component={EditCustomer}
        options={{
          title:'Edit Customer',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }} 
    />

<Managerstack.Screen
        name='ShowProduct'
        component={ShowProduct}
        options={{
          title:'Show Product',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }} 
    />

<Managerstack.Screen
        name='EditProduct'
        component={EditProduct}
        options={{
          title:'Edit Product',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          }
        }} 
        />

<Managerstack.Screen
        name='ShowDeliveryboy'
        component={ShowDeliveryboy}
        options={{
          title:'Show Deliveryboy',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }} 
    />

<Managerstack.Screen
        name='EditDeliveryboy'
        component={EditDeliveryboy}
        options={{
          title:'Edit Deliveryboy',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }} 
    />
    
    
    
    </Managerstack.Navigator>
  )
};
