
import React from 'react';
import { ImageBackground } from 'react-native';
import bgimage from '../assets/bgimage3.jpg'
import { StyleSheet, Text,  View , Keyboard} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import globalstyles from '../styles/Global';
import logo from '../assets/logo.png'


const Myprofile = () => {

        return (
            
         <ImageBackground source={bgimage} style={styles.imagecontainer} >
                <View style={styles.box}>
                  <Text style={styles.titletext}>My Profile</Text>
                  
                    <Image source={logo} style={styles.profilepic}></Image>
                  
                  <Text>Name</Text>
                  <Text>Name oyy</Text>
                  <Text>Name</Text>
                  <Text>Name</Text>

                </View>

          </ImageBackground>
            
                
                
             
            
          



         );
    
}


const styles = StyleSheet.create({
  
  

  box:{
    height:'100%',
    width:'100%',
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.2)',
    marginTop:10,
    borderRadius:25,
    justifyContent:'flex-start',
    alignItems:'center',
  
    
  },
  imagecontainer: {
    flex:1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'rgba(255,255,255,0.4)',
    opacity:0.7,
    
  
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
    // backgroundColor:"blue",
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

export default Myprofile;


