import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Managerstack from './Managerstack';
import Aboutstack from './Aboutstack';
import Addcustomerstack from './Addcustomerstack';
import Addproductstack from './Addproductstack';
import Adddeliveryboystack from './Adddeliveryboystack';
 
const rootDrawerNavigator = createDrawerNavigator({
    Manager:{
        screen:Managerstack,
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
    About:{
        screen:Aboutstack,
    }
});

export default createAppContainer(rootDrawerNavigator); 
