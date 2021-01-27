
import React,{Component, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';




class Login extends Component{
    render(){
        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        return (
            <View style={styles.container}>
            {/*             
            <View style={styles.logo}>
            <Image source={require('./assets/logo.png')} resizeMode='contain' />
            </View> */}

            <TextInput placeholder="Enter username or Email" style={styles.stext}   />
            <TextInput placeholder="Enter Password" style={styles.stext} secureTextEntry={true} />
            
        
            <TouchableOpacity style={styles.sbutton}>
            <View >
                <Text>Login</Text>
            </View>
            </TouchableOpacity>
        

            </View>

      



         );
    }
}


const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sbutton:{
    height:34,
    width:200,
    borderWidth:1,
    borderRadius:40,
    textAlign:"center",
    backgroundColor:'#4b2',
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:50,
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
  },

  stext:{
    marginTop:7,
    height:40,
    width:270,
    borderBottomWidth:1
  },

//   logo:{
//     backgroundColor:"blue",
//     height:20,
//     width:20,
//     borderWidth:1,
//     flex:1,
//     alignItems: 'center'

//   }


});

export default Login;
