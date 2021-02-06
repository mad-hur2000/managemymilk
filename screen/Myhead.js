
import React,{Component, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image , Header, leftComponent,centerComponent,rightComponent} from 'react-native';
import { SafeAreaProvider , MyCustomLeftComponent} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'


class Myhead extends Component{

    state={
        icons : ["home","   ","dots-three-vertical"]
    }
    render(){
        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        return (
            <View style={styles.header}>
        
            {/* <Entypo  name={"dots-three-vertical"}><Entypo> */}
            
            {
            this.state.icons.map((items,index)=>{
                return(
                    <TouchableOpacity>
                    <Entypo  key={index}  style={styles.headcontent}  name = {items} size={24}></Entypo>
                    </TouchableOpacity>
                )
            })
            }

            </View>


      



         );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },

  header:{
    
    backgroundColor: '#aaf',
    height:70,
    width:'100%',
    alignItems:'center',
    alignSelf:'center',
    textAlign:'center',
    justifyContent:'center',
    flexDirection:'row',

  },

  headcontent:{
    backgroundColor:'red',
    marginTop: 40,
    height: 30,
    alignContent:'space-between',
    alignSelf:'flex-end',
       
    


      
    
  }

  

});

export default Myhead;
