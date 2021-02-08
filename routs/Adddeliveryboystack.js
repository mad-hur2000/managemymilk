import { createStackNavigator } from 'react-navigation-stack';
import Adddeliveryboy from '../screen/AddDeliveryboy';
import React from 'react';
import Header from '../shared/Header'


const screens = {
   
    Adddeliveryboy: {
        screen:Adddeliveryboy,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='About' />
                }
            )
        }
        
        

    },
    

    
   
}

const Adddeliveryboystack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Adddeliveryboystack;