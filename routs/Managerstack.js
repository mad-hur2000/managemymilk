import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import manager from '../screen/Manager';
import viewProfile from '../screen/ViewProfile';
import globalstyles from '../styles/Global';
import showCustomer from '../screen/ShowCustomer'

const screens = {
   
    Manager: {
        screen:manager

    },
    ViewProfile:{
        screen:viewProfile
    },
    ShowCustomer:
    {
        screen:showCustomer,
        navigationOptions: {
            title:'Customer Data'
        }
    }

    
   
}

const managerstack=createStackNavigator(screens);

export default createAppContainer(managerstack);