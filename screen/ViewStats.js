import React , {useState} from 'react';
import { View ,Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import { ListItem,navigation ,navigate} from 'react-native-elements';
import {globalstyles} from '../styles/Global';
import bgimage from '../assets/bgimage3.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Viewstats = ({navigation}) => {

  const [customer,setCustomer] = useState([
    { date: 'madhur mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Nisarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'akdjslka',  morningMilk:2 , eveningMilk:1 },
    { date: 'Nsdklfg munskadlfgra', morningMilk:2 , eveningMilk:1 },
    { date: 'djsa mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Ndjsarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Nsdjsarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Nisarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'akdjslka',  morningMilk:2 , eveningMilk:1 },
    { date: 'Nsdklfg munskadlfgra', morningMilk:2 , eveningMilk:1 },
    { date: 'djsa mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Ndjsarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Nsdjsarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Ndjsag mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Nisarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'akdjslka',  morningMilk:2 , eveningMilk:1 },
    { date: 'Nsdklfg munskadlfgra', morningMilk:2 , eveningMilk:1 },
    { date: 'djsa mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Ndjsarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Nsdjsarg mungra', morningMilk:2 , eveningMilk:1 },
    { date: 'Ndjsag mungra', morningMilk:2 , eveningMilk:1 }
    ])



  return(
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer} >
      
      <View style={styles.titlecontainer}>
        <Text style={styles.nametext}>Statistics </Text>

        {/* <TouchableOpacity style={styles.editprofilebutton} >
          <Text style={{textAlign:'center' }}>Delete Profile</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.editprofilebutton} onPress={() => navigation.navigate('EditCustomer')}>
          <Text style={{textAlign:'center' }}>Edit Profile</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.tablebox}>
      <FlatList
          keyExtractor={(item)=> item.Email }
          data={customer}
          renderItem= {({item}) => (
            
              <View style={styles.card} >
                
                <Text style={styles.carddate}> Date : {item.date}</Text>
                {/* // Total milk of the day */}
                <Text style={styles.milktext}>Morning : {item.morningMilk}</Text>
                <Text style={styles.milktext}>Evening : {item.eveningMilk}</Text>
                
              </View>
            
                  
          )}
        />
      </View>
      
    </ImageBackground>
  )
};



const styles= StyleSheet.create({

  nametext:{

    flex:1,
    marginTop:6,
    fontSize:22,
    color:'#fff',
    alignItems:'center',
    marginHorizontal:8,
    justifyContent:'center',
    
  },

  milktext:{
    fontSize:15,
    marginHorizontal:7,
    borderBottomWidth:0.2,
  },

  carddate:{  
    flex:1,
    marginLeft:5,
    
  },

  tabletext:{
    flexDirection:'row',
  },

  titlecontainer:{
    
    flex:1,
    marginTop:7,
    fontSize:28,
    borderRadius:3,
    backgroundColor:'rgba(0,0,0,0.2)',
    color:'#fff',
    flexDirection:'row',
    marginHorizontal:4,

  },

  editprofilebutton:{
    height:34,
    width:60,
    borderWidth:1,
    borderRadius:4,
    textAlign:"center",
    backgroundColor:'rgba(40,40,40,0.6)',
    alignItems:"center",
    justifyContent:"center",
    marginTop:8,
    color:'white',
  },

  tablebox:{
    flex:12,
    borderRadius:3,
    marginHorizontal:4,
    marginTop:4,
    marginBottom:8,
    backgroundColor:'rgba(0,0,0,0.2)',
  },

  card:{
    flex:1,
    flexDirection:'row',
    height:40,
    width:'98%',
    borderRadius:5,
    marginHorizontal:'1%',
    borderBottomWidth:0.5,
    marginTop:2,
    backgroundColor:'rgba(255,255,255,0.8)',
    opacity:1,
    alignItems:'center',
  },

});


export default Viewstats;