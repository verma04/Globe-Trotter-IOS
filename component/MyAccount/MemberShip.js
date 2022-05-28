import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View  , Dimensions , Image} from 'react-native';
import { Accelerometer } from 'expo-sensors';

import Header2 from '../shared/header2';
var width = Dimensions.get('window').width;
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Wallet from 'react-native-wallet';
import AsyncStorage from '@react-native-async-storage/async-storage';import { useTheme } from 'react-native-paper';
import ActionBarImage2 from './ActionBarImage2';
;

export default function App({navigation}) {
  const { colors } = useTheme();
  const [state, setstate] = React.useState('')
  React.useEffect(() => {

  
    const func = async () => {
      const phoneNumber = await  AsyncStorage.getItem("userToken")
    
      setstate(JSON.parse(phoneNumber))
     
    
    }
    
      
       func()
    
      
     }, [])
    

     console.log(state)
  return (
    <View style={{flex:1, backgroundColor:colors.borderColor , 
      paddingHorizontal: 10,
      position:'relative',
      justifyContent:"flex-start",
      flexDirection:'column',
      alignItems:'center'}} >

<ActionBarImage2  navigation={navigation}  title={"User Profile"}/>

<View style={styles.text}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >{state.fullname}</Text>
    <Text style={{ fontSize:17,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >{state.membershipId}</Text>
</View>
  
      <View  style={[styles.card , {backgroundColor:"#041825"}]}>



      <View  style={styles.top}>

      <Image    source={{
          
          uri: colors.darklogo}} resizeMode="contain" style={{  width: "50%", height: "100%"  }}  />

      </View>

      <View  style={styles.mid}>

      <View  style={styles.mid1}>
      <Text style={{fontSize:20, paddingBottom:10, fontFamily:"BasisGrotesque" ,color:"#92A0A9"}}>Membership Number</Text>
        <Text style={{fontSize:22,fontFamily:"Cushingstd", color:"white"}} >{state.membershipId}</Text>



</View>


<View  style={{marginTop:40}}>
<Text style={{fontSize:20,paddingBottom:10, fontFamily:"BasisGrotesque", color:"#92A0A9" , }}>Membership NAME</Text>
<Text style={{fontSize:20,  fontFamily:"Cushingstd", textTransform:"uppercase" , color:"white"}}>{state.fullname}</Text>
        

</View>


      </View>

      <View  style={styles.bottom}>
      <AntDesign name="creditcard" size={24} color="#50606B"  />
      <MaterialCommunityIcons name="contactless-payment" size={24} color="#50606B" />

      </View>

      </View>
      
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    paddingHorizontal: 10,
    position:'relative',
    justifyContent:"flex-start",
    flexDirection:'column',
    alignItems:'center'
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  card : {
    marginTop:40,
    width:width/1.1,
    height:400,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 14,
    backgroundColor:"#0c1b2a",
    borderRadius:10,
    justifyContent:"center",
    flexDirection:'column',
    alignItems:'center'
  },
  logo: {
   
    width: 100,
    height: 60,
    resizeMode:"contain"
  },
  top: {
  height:"50%",

  width:"93%",
  justifyContent:"flex-start",
  flexDirection:'column',
  alignItems:'flex-start'
  },

  mid: {
    marginLeft:30,
    height:"40%",
    
    width:"93%"
    },
    bottom: {
      height:"10%",
       width:"93%",
      justifyContent:"space-between",
      flexDirection:'row',
      alignItems:'center'
      },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },

  layer : {

    height: "33%",
    width: "100%",

    alignItems: "center",
  textAlign: "center",
 
justifyContent:"center",
alignItems:"center",
},
text : {

  borderLeftWidth: 3,
  borderLeftColor: "#FEA20B",

  
  shadowOpacity:  0.4,
  shadowRadius: 3,
  elevation: 14,
  
  marginTop:20,

    width: "90%",
   borderRadius: 3,
   
flexDirection:"column",
 
justifyContent:"center",
alignItems:"flex-start",

},
});