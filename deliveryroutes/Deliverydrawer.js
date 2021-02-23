// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";
// import Aboutstack from "../routes/Aboutstack";
// import Myprofilestack from "../deliveryroutes/Myprofiledeliverystack";
// import Deliverystack from "../deliveryroutes/Deliverystack";

// const rootDrawerNavigator = createDrawerNavigator({
//   Delivery: {
//     screen: Deliverystack,
//   },
//   Myprofile: {
//     screen: Myprofilestack,
//   },
//   About: {
//     screen: Aboutstack,
//   },
// });
  
// export default createAppContainer(rootDrawerNavigator);

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import Deliverystack from '../deliveryroutes/Deliverystack'
import Myprofiledeliverystack from './Myprofiledeliverystack';
import Aboutstack from '../routes/Aboutstack'

export default function rootDrawerNavigator(){
  const rootDrawerNavigator = createDrawerNavigator();

  return(
    <NavigationContainer>
      <rootDrawerNavigator.Navigator initialRouteName='Delivery Dashboard'>
        <rootDrawerNavigator.Screen name='Delivery Dashboard' component={Deliverystack} />
        <rootDrawerNavigator.Screen name='My Profile' component={Myprofiledeliverystack} />
        <rootDrawerNavigator.Screen name='About Application' component={Aboutstack} />
      </rootDrawerNavigator.Navigator>

    </NavigationContainer>
  )
}

