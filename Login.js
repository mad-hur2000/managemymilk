
import React,{Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';




class Login extends Component{
    render(){
        return (
            <View style={styles.container}>
            {/* 
            <View style={styles.logo}>
            <Image source={require('./assets/logo.png')} />
            </View> */}

            <TextInput placeholder="Enter username or Email" style={styles.stext}/>
            <TextInput placeholder="Enter Password" style={styles.stext}/>
            
        
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
    flex: 1,
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
    backgroundColor:"green",
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:"15%",
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
  },

  stext:{
    marginTop:5,
    height:40,
    width:250,
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

export default Login;
