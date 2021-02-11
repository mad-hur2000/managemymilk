import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Header from '../shared/Header';
import Customer from '../customerscreens/Customer'


const screens = {
   
    Customer: {
        screen:Customer,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='Dashboard' />
                }
            )
        }
        
        

    }
    
    
}

const Customerstack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Customerstack;