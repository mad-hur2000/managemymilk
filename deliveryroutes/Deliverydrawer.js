import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Aboutstack from '../routes/Aboutstack';
import Myprofilestack from '../deliveryroutes/Myprofiledeliverystack';
import Deliverystack from '../deliveryroutes/Deliverystack';
 
const rootDrawerNavigator = createDrawerNavigator({
    Delivery:{
        screen:Deliverystack,
    },
    Myprofile:{
        screen:Myprofilestack,
    },
    About:{
        screen:Aboutstack,
    },
    

   
});

export default createAppContainer(rootDrawerNavigator); 
