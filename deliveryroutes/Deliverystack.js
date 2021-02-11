import { createStackNavigator } from 'react-navigation-stack';
import ShowCustomer from '../deliveryscreens/Showcustomertodelivery';
import React from 'react';
import Header from '../shared/Header';
import Delivery from '../deliveryscreens/Delivery'


const screens = {
   
    Deliveryman: {
        screen:Delivery,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='Delivery Man' />
                }
            )
        }
        
        

    },
    Showcustomer:{
        screen:ShowCustomer,
        navigationOptions: {
            title:'Customer Data',
        }
    },
    

    
   
}

const Deliverystack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Deliverystack;