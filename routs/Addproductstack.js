import { createStackNavigator } from 'react-navigation-stack';
import AddProduct from '../screen/AddProduct';
import React from 'react';
import Header from '../shared/Header'


const screens = {
   
    AddProduct: {
        screen:AddProduct,
        navigationOptions: ({navigation}) => {
            return(
                {
                    headerTitle: () => <Header navigtion={navigation} title='About' />
                }
            )
        }
        
        

    },
    

    
   
}

const Addproductstack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0d0',
            height:80,
        },
        
    }
});

export default Addproductstack;