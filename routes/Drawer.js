import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Managerstack from './Managerstack';
import Aboutstack from './Aboutstack';
import Addcustomerstack from './Addcustomerstack';
import Addproductstack from './Addproductstack';
import Adddeliveryboystack from './Adddeliveryboystack';
import Viewstatsstack from './Viewstatsstack';
import Myprofilestack from './Myprofilestack';
 
const rootDrawerNavigator = createDrawerNavigator({
    Manager:{
        screen:Managerstack,
    },
    Myprofile:{
        screen:Myprofilestack,
    },
    AddCustomer:{
        screen:Addcustomerstack,
    },
    AddProduct:{
        screen:Addproductstack,
    },
    AddDeliveryboy:{
        screen:Adddeliveryboystack,
    },
   
    Viewstats:{
        screen:Viewstatsstack,
    },
    About:{
        screen:Aboutstack,
    },
    

   
});

export default createAppContainer(rootDrawerNavigator); 
