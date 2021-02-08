
import React,{Component, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';




class AddProduct extends Component{
    render(){
        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        // const [cpassword, setCPassword] = useState('');
        return (
            <View style={styles.containers}>
            {/* 
            <View style={styles.logo}>
            <Image source={require('./assets/logo.png')} />
            </View> */}

            <TextInput placeholder="Enter username or Email" style={styles.stext}  /*onChangeText={(email) => setEmail(email)}*//>
            <TextInput placeholder="Enter Password" style={styles.stext}   secureTextEntry={true} /*onChangeText={(password) => setPassword(password)}*//>
            <TextInput placeholder="Confirm Password" style={styles.stext} secureTextEntry={true} /*onChangeText={(cpassword) => setCPassword(cpassword)}*//>
            
        
            <TouchableOpacity style={styles.sbutton}>
            <View >
                <Text>Sign Up</Text>
            </View>
            </TouchableOpacity>
            
            <Text style={{marginTop:10, fontSize:12}}>Already have an account?</Text> 
            <View><Text>Login!!</Text></View>
        

            </View>

      



         );
    }
}


const styles = StyleSheet.create({
  containers: {
    flex:1,
    marginTop:200,
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
    backgroundColor:'#aaf',
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
//     backgroundColor:"red",
//     height:40,
//     width:40,
//     position: 'relative',
//     borderWidth:1,
//     flex: 1,
//     alignItems: 'center'

//   }


});

export default AddProduct;
