import React , {useState} from 'react';
import { View ,Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import { ListItem,navigation ,navigate} from 'react-native-elements';
import {globalstyles} from '../styles/Global';
import bgimage from '../assets/bgimage3.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowProduct = ({navigation}) => {

    const [product,setProduct] = useState([
      
        { name: 'milk', price: '70 rs/liter' , discription:'this product is milk'},
        { name: 'ghee', price: '1500 rs/kg' , discription:'this product is ghee' },
        { name: 'gaumutra', price: '30 rs/liter', discription:'this product is gaumutra' }
      ]);



  return(
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer} >
      
      <View style={styles.titlecontainer}>
        <Text style={styles.nametext}>{navigation.getParam('name')}</Text>

        <TouchableOpacity style={styles.editprofilebutton} >
          <Text style={{textAlign:'center' }}>Delete Product</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.editprofilebutton} onPress={() => navigation.navigate('EditProduct')}>
          <Text style={{textAlign:'center' }}>Edit Product</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tablebox}>
      
      </View>
      
    </ImageBackground>
  )
};


const styles= StyleSheet.create({
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
    
      
      text:{
        
        marginTop:14,
        fontSize:20,
        height:30,
        color:'#fff',
        alignItems:'center',
        marginHorizontal:8,
        justifyContent:'center',
        // borderBottomWidth:0.5,
    
        textAlign:'center',
        
    
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
        borderRadius:150,
    
      },
      detailbox:{
        backgroundColor:'rgba(255,255,255,0.4)',
        width:340,
        height:300,
        marginTop:5,
      
        alignItems:'flex-start',
    
    
    
      },
    
      buttontext:{
        color:'#bbb',
    
      },
    
      lasttext:{
        color:'#ccc',
        marginTop:15,
        alignItems:'center',
        alignSelf:'center'
      },
    

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



export default ShowProduct;
