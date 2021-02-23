// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";
// import Customerstack from "./Customerstack";
// import Customerviewstatsstack from "./Customerviewstatsstack";
// import Myprofilecustomerstack from "./Myprofilecustomerstack";
// import Aboutstack from "../routes/Aboutstack";

// const rootDrawerNavigator = createDrawerNavigator({
//   Dashboard: {
//     screen: Customerstack,
//   },
//   Viewstats: {
//     screen: Customerviewstatsstack,
//   },
//   Myprofile: {
//     screen: Myprofilecustomerstack,
//   },
//   About: {
//     screen: Aboutstack,
//   },
// });

// export default createAppContainer(rootDrawerNavigator);

import * as React from 'react'; 
import { createDrawerNavigator } from '@react-navigation/drawer'
import Customerstack from "./Customerstack";
import Customerviewstatsstack from "./Customerviewstatsstack";
import Myprofilecustomerstack from "./Myprofilecustomerstack";
import Aboutstack from "../routes/Aboutstack";
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'




        

export default function rootDrawerNavigator(){
  const rootDrawerNavigator = createDrawerNavigator();
  return(
    <NavigationContainer >
          <rootDrawerNavigator.Navigator initialRouteName='Customerstack'>
            <rootDrawerNavigator.Screen name='Dashboard' component={Customerstack} />
            <rootDrawerNavigator.Screen name='View Stats' component={Customerviewstatsstack} />
            <rootDrawerNavigator.Screen name='My Profile' component={Myprofilecustomerstack} />
            <rootDrawerNavigator.Screen name='About Application' component={Aboutstack} />
          </rootDrawerNavigator.Navigator>
    </NavigationContainer>

  )
};