import React from 'react'
import { View, Text , StyleSheet , Image } from 'react-native'
import loading from '../assets/loading.gif'


const Loading = () => {
    return (
       <View style={styles.screen}>
            <Image source={loading} style={styles.logo} />
       </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        display : 'flex',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "black"
    },
    logo: {
        height: 90,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 120,
        marginTop: 20,
        borderRadius: 15,
      }
})

export default Loading
