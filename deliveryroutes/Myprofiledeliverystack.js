import { createStackNavigator } from 'react-navigation-stack';
import Myprofile from '../deliveryscreens/MyprofileDelivery';
import React from 'react';
import Header from '../shared/Header';


const screens = {
   
    Myprofile: {
        screen:Myprofile,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='Myprofile' />
                }
            )
        }
        
    },  
    
}
const Myprofiledeliverystack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Myprofiledeliverystack;