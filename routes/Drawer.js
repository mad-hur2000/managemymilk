// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";
import Managerstack from "./Managerstack";
import Aboutstack from "./Aboutstack";
import Addcustomerstack from "./Addcustomerstack";
import Addproductstack from "./Addproductstack";
import Adddeliveryboystack from "./Adddeliveryboystack";
import Viewstatsstack from "./Viewstatsstack";
import Myprofilestack from "./Myprofilestack";
import Manager from "../screen/Manager";
import { View } from "react-native";

// const rootDrawerNavigator = createDrawerNavigator({
//   Manager: {
//     screen: Managerstack,
//   },
//   Myprofile: {
//     screen: Myprofilestack,
//   },
//   AddCustomer: {
//     screen: Addcustomerstack,
//   },
//   AddProduct: {
//     screen: Addproductstack,
//   },
//   AddDeliveryboy: {
//     screen: Adddeliveryboystack,
//   },
//   Viewstats: {
//     screen: Viewstatsstack,
//   },
//   About: {
//     screen: Aboutstack,
//   },
// });

// export default createAppContainer(rootDrawerNavigator);

import * as React from 'react'; 
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {navigation} from '@react-navigation/native'

export default function rootDrawerNavigator(){
  const rootDrawerNavigator = createDrawerNavigator();
  return(
    <NavigationContainer >
          <rootDrawerNavigator.Navigator initialRouteName='Managerstack'>
            <rootDrawerNavigator.Screen name='Manager' component={Managerstack} />
            <rootDrawerNavigator.Screen name='MyProfile' component={Myprofilestack} />
            <rootDrawerNavigator.Screen name='AddCustomer' component={Addcustomerstack} />
            <rootDrawerNavigator.Screen name='AddProduct' component={Addproductstack} />
            <rootDrawerNavigator.Screen name='AddDeliveryboy' component={Adddeliveryboystack} />
            <rootDrawerNavigator.Screen name='Viewstats' component={Viewstatsstack} />
            <rootDrawerNavigator.Screen name='About' component={Aboutstack} />
          </rootDrawerNavigator.Navigator>
    </NavigationContainer>

  )
};

