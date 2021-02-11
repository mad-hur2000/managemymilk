import { createStackNavigator } from 'react-navigation-stack';
import Viewstats from '../screen/Viewstats';
import React from 'react';
import Header from '../shared/Header'


const screens = {
   
    Viewstats: {
        screen:Viewstats,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='View Stats' />
                }
            )
        }
        
    },  
}
const Viewstatsstack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Viewstatsstack;