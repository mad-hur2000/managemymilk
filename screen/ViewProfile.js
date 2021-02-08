
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

  stext:{
    marginTop:7,
    height:40,
    width:270,
    borderRadius:25,
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.2)',
    marginHorizontal:25,
    paddingLeft:45,
    marginTop:20,
    color:'#bbb',
    
  },

  sbutton:{
    height:34,
    width:200,
    borderWidth:1,
    borderRadius:40,
    textAlign:"center",
    backgroundColor:'rgba(40,40,40,0.4)',
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:25,
    color:'white',
    
  
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


