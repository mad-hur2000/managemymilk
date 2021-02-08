
import React from 'react';
import { ImageBackground } from 'react-native';
import bgimage from '../assets/bgimage3.jpg'
import { StyleSheet, Text,  View , Keyboard} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import globalstyles from '../styles/Global';

const MyProfile = () => {

        return (
            
            <TouchableWithoutFeedback onPress={() => {
              // console.log('keyboard dismiss');
              Keyboard.dismiss();

            }}>
              
                <View style={styles.box}>
                  <Text style={styles.titletext}>My Profile</Text>
                  <View style={styles.profilepic}/>
                  <Text>Name</Text>
                  <Text>Name</Text>
                  <Text>Name</Text>
                  <Text>Name</Text>

                </View>
                
                
             
            
            </TouchableWithoutFeedback>
      



         );
    
}


const styles = StyleSheet.create({
  
  

  box:{
    marginTop:7,
    height:'100%',
    width:'100%',
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.2)',
    marginTop:40,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
  
    
  },

  titletext:{
    alignContent:'center',
    justifyContent:'center',
    color:'#eee',
    fontSize:28,
    marginTop:10,
    // marginLeft:12,

  },

  profilepic:{
    backgroundColor:"blue",
    height:80,
    width:80,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal:120,
    marginTop:20,
    borderRadius:20,

  },


  buttontext:{
    color:'#bbb',

  },

  lasttext:{
    color:'#ccc',
    marginTop:15,
    alignItems:'center',
    alignSelf:'center'
  }


});

export default MyProfile;


