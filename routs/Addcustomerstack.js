import { createStackNavigator } from 'react-navigation-stack';
import AddCustomer from '../screen/AddCustomer';
import React from 'react';
import Header from '../shared/Header';


const screens = {
   
    AddCustomer: {
        screen:AddCustomer,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='About' />
                }
            )
        }
        
        

    },
    

    
   
}

const Addcustomerstack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Addcustomerstack;