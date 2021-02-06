
import React,{Component, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';




class ProfileActivate extends Component{
    render(){
        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        return (
            <View style={styles.container}>
            <Text style={styles.heading}>
              Complete your Profile to Activate Your Account
            </Text>
            {/*             
            <View style={styles.logo}>
            <Image source={require('./assets/logo.png')} resizeMode='contain' />
            </View> */}

            <TextInput placeholder="Enter First Name" style={styles.stext}   />
            <TextInput placeholder="Enter Last Name" style={styles.stext}  />
            <TextInput placeholder="Mobile Number" style={styles.stext}  />
            <TextInput placeholder="Address" style={styles.stext}  />
            <TextInput placeholder="Location" style={styles.stext}  />
        
            <TouchableOpacity style={styles.sbutton}>
            <View >
                <Text>Activate Account</Text>
            </View>
            </TouchableOpacity>
        

            </View>

      



         );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stext:{
    marginTop:7,
    height:40,
    width:270,
    borderBottomWidth:1
  },

  sbutton:{
    height:34,
    width:200,
    borderWidth:1,
    borderRadius:40,
    textAlign:"center",
    backgroundColor:'#aaf',
    justifyContent:"center",
    marginTop:50,
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center"
  },

  heading:{
    fontSize:25,
    textAlign:'center',
    textShadowColor:'#aaf',
    textShadowRadius:10,
    fontWeight:'100',
    marginTop:5,
    marginBottom:100,
    

  }


});

export default ProfileActivate;
