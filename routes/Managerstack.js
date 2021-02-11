import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Manager from '../screen/Manager';
import ViewProfile from '../screen/Myprofile';
import globalstyles from '../styles/Global';
import ShowCustomer from '../screen/ShowCustomer';
import EditCustomer from '../screen/EditCustomer';
import React from 'react';
import Header from '../shared/Header';


const screens = {
   
    Manager: {
        screen:Manager,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='Manager' />
                }
            )
        }
        
        

    },
    ViewProfile:{
        screen:ViewProfile,
        navigationOptions: {
            title:'My Profile',
        }

    },
    ShowCustomer:{
        screen:ShowCustomer,
        navigationOptions: {
            title:'Customer Data',
        }
    },
    EditCustomer:{
        screen:EditCustomer,
        navigationOptions:{
            title:'Edit Customer',
        }

    },
    

    
   
}

const Managerstack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Managerstack;