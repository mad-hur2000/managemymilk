
import React,{Component, useState} from 'react';
import bgimage from '../assets/bgimage3.jpg'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image , Keyboard} from 'react-native';
import { TouchableWithoutFeedback , ImageBackground} from 'react-native';
import {globalstyles} from '../styles/Global';
import logo from '../assets/logo.png';


class Login extends Component{
    render(){
        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        return (
            
            <TouchableWithoutFeedback onPress={() => {
              // console.log('keyboard dismiss');
              Keyboard.dismiss();

            }}>
              <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
                <View style={styles.tocenter}>
                  <View style={styles.box}>
                    <Text style={styles.titletext}>Manage My Milk</Text>
                    <Image source={logo} style={styles.logo} />

                    <TextInput style={styles.stext}
                      placeholder=  {'Enter Your Mobile Number'}
                      // placeholderTextColor= { 'rgba(225,225,225,0.7)'}
                      underlineColorAndroid='transparent'
                      keyboardType='numeric'
                  
                    />

                    <TouchableOpacity style={styles.sbutton}>
                      <View >
                          <Text style={styles.buttontext}>Send OTP</Text>
                      </View>
                    </TouchableOpacity>

                    <TextInput style={styles.stext}
                      placeholder=  {'Enter OTP'}
                      // placeholderTextColor= { 'rgba(225,225,225,0.7)'}
                      underlineColorAndroid='transparent'
                      keyboardType='numeric'
                  
                    />

                    <TouchableOpacity style={styles.sbutton}>
                      <View >
                          <Text style={styles.buttontext}>Log In</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.lasttext}>To create account , contact here</Text>

                  </View>
                </View>
                
              </ImageBackground>
            
            </TouchableWithoutFeedback>
      



         );
    }
}


const styles = StyleSheet.create({
  
  tocenter:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },

  box:{
    marginTop:7,
    height:450,
    width:320,
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.3)',
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
    

  },

  logo:{
    backgroundColor:'#fff',
    height:90,
    width:90,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal:120,
    marginTop:20,
    borderRadius:15,

  },

  stext:{
    marginTop:7,
    height:40,
    width:270,
    borderBottomWidth:0.2,
    borderRadius:25,
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.2)',
    marginTop:20,
    color:'#bbb',
    textAlign:'center',
    
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
    color:'#ddd',

  },

  lasttext:{
    color:'#fff',
    marginTop:15,
    alignItems:'center',
    alignSelf:'center'
  }


});

export default Login;


