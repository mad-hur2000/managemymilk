import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Delivery from '../deliveryscreens/Delivery'
import ShowCustomertodelivery from '../deliveryscreens/Showcustomertodelivery'
import Entypo from "react-native-vector-icons/Entypo";

export default function Deliverystack({navigation}){
  const Deliverystack = createStackNavigator();
  return(
    <Deliverystack.Navigator >
      <Deliverystack.Screen
      name='Deliverystack' 
      component={Delivery} 
      options={{
          title:'Delivery Dashboard',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',fontSize:22,
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
        }}>

      </Deliverystack.Screen>
      <Deliverystack.Screen
      name='ShowCustomertodelivery' 
      component={ShowCustomertodelivery} 
      options={{
          title:'Customer Data',
          headerStyle: {
            backgroundColor: '#2F84EA',
            // marginLeft:10                
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          }
        }}>

      </Deliverystack.Screen>
    </Deliverystack.Navigator>
  )
}