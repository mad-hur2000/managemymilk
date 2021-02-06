
import React,{Component, useState} from 'react';
import { ImageBackground } from 'react-native';
import bgimage from '../assets/bgimage3.jpg'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';



class Login extends Component{
    render(){
        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        return (
            // <View style={styles.container}>
            // {/*             
            // <View style={styles.logo}>
            // <Image source={require('./assets/logo.png')} resizeMode='contain' />
            // </View> */}
            

            // <TextInput placeholder="Enter username or Email" style={styles.stext}   />
            // <TextInput placeholder="Enter Password" style={styles.stext} secureTextEntry={true} />
            
        
            // <TouchableOpacity style={styles.sbutton}>
            // <View >
            //     <Text>Login</Text>
            // </View>
            // </TouchableOpacity>
        

            // </View>

            <ImageBackground source={bgimage} style={styles.imagecontainer}>
              <View style={styles.box}>
                
                <View style={styles.logo}/>

                <TextInput style={styles.stext}
                  placeholder=  {'Enter Your Mobile Number'}
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
              
              
            </ImageBackground>

      



         );
    }
}


const styles = StyleSheet.create({
  
  imagecontainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  box:{
    marginTop:7,
    height:280,
    width:320,
    fontSize:16,
    backgroundColor:'rgba(0,0,0,0.2)',
    marginTop:40,
    borderRadius:25,

    
  },

  logo:{
    backgroundColor:"blue",
    height:80,
    width:80,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal:120,
    marginTop:40,
    borderRadius:20,

  },

  stext:{
    marginTop:7,
    height:40,
    width:270,
    // borderBottomWidth:1,
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

export default Login;


