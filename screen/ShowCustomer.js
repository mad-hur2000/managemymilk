import React from 'react';
import { ImageBackground } from 'react-native';
import { View ,Text} from 'react-native';
import { ListItem,navigation } from 'react-native-elements';
import {globalstyles} from '../styles/Global';
import bgimage from '../assets/bgimage3.jpg';

const ShowCustomer = ({navigation}) => {
  return(
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer} >
      <Text>customer</Text>
      <Text>{navigation.getParam('name')}</Text>
      
    </ImageBackground>
  )
};

export default ShowCustomer;