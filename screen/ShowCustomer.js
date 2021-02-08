import React from 'react';
import { View ,Text, StyleSheet, ImageBackground} from 'react-native';
import { ListItem,navigation ,navigate} from 'react-native-elements';
import {globalstyles} from '../styles/Global';
import bgimage from '../assets/bgimage3.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowCustomer = ({navigation}) => {
  return(
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer} >
      
      <View style={styles.titlecontainer}>
        <Text style={styles.nametext}>{navigation.getParam('name')}</Text>
      
        <TouchableOpacity style={styles.editprofilebutton} onPress={() => navigation.navigate('EditCustomer')}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tablebox}></View>
      
    </ImageBackground>
  )
};

export default ShowCustomer;

const styles= StyleSheet.create({

  nametext:{

    flex:1,
    marginTop:6,
    fontSize:28,
    // borderRadius:3,
    // backgroundColor:a(0,0,0,0.2)',
    color:'#fff',
    alignItems:'center',
    marginHorizontal:8,
    justifyContent:'center',
    
  },

  titlecontainer:{
    
    flex:1,
    marginTop:7,
    fontSize:28,
    borderRadius:3,
    backgroundColor:'rgba(0,0,0,0.2)',
    color:'#fff',
    flexDirection:'row',
    marginHorizontal:4,

  },

  editprofilebutton:{
    height:34,
    width:80,
    borderWidth:1,
    borderRadius:4,
    textAlign:"center",
    backgroundColor:'rgba(40,40,40,0.6)',
    alignItems:"center",
    justifyContent:"center",
    marginTop:8,
    color:'white',
  },

  tablebox:{
    flex:12,
    borderRadius:3,
    marginHorizontal:4,
    marginTop:4,
    marginBottom:8,
    backgroundColor:'rgba(0,0,0,0.2)',
  }

});