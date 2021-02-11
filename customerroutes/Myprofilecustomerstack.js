import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Header from '../shared/Header';
import Myprofilecustomer from '../customerscreens/Myprofilecustomer'


const screens = {
   
    Myprofilecustomer: {
        screen:Myprofilecustomer,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='My Profile' />
                }
            )
        }
        
        

    }
};

const Myprofilecustomerstack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});
export default Myprofilecustomerstack;