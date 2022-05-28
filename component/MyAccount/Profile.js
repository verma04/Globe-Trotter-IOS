
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View  , Dimensions , Image, Pressable} from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Header2 from '../shared/header2';
var width = Dimensions.get('window').width;
import { MaterialCommunityIcons  , FontAwesome , Entypo , FontAwesome5} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Wallet from 'react-native-wallet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme , 
  
  
    TouchableRipple,
    Switch,
  Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
;import { AuthContext } from '../../context/context'; 
import { EvilIcons , MaterialIcons } from '@expo/vector-icons';
export default function App({navigation}) {
  const paperTheme = useTheme();
  const { colors } = useTheme();
  const [state, setstate] = React.useState('')
  const { signOut, toggleTheme } = React.useContext(AuthContext);

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


      <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
      >

     

        <View  style={{width:width/1.1 }}>
 <View style={{width:width/2 ,   }}>
   <Text style={{fontSize:22, marginTop:20 , marginBottom:10 , fontFamily:"Cushingstd"}}  >Account Settings</Text>


     <Pressable   onPress={()=> navigation.navigate('Edit Profile')}   style={{width:width/1.1 ,ontSize:25, fontFamily:"BasisGrotesque"  , display:'flex', justifyContent:"space-between", alignItems:"center", height:80 , flexDirection:"row" , backgroundColor:"#041825" , marginBottom:10 , borderRadius:20}} >
       <View style={{  display:'flex', justifyContent:"space-between",  alignItems:"center", flexDirection:"row"}} > 
       <FontAwesome5 name="user-cog" size={24}  style={{width:"20%", paddingLeft:20}} color="#FEA20B"  /> 
       <Text style={{fontSize:18 , fontFamily:"BasisGrotesque" , color:"#92A0A9" }} >Personal Information </Text> 
       </View>< MaterialIcons name="keyboard-arrow-right" size={20} color={colors.text} style={{marginRight:20}} /></Pressable>
     
 


       <Pressable onPress={()=> navigation.navigate('Membership Card')} style={{width:width/1.1 ,ontSize:25, fontFamily:"BasisGrotesque"  , display:'flex', justifyContent:"space-between", alignItems:"center", height:80 , flexDirection:"row" , backgroundColor:"#041825" , marginBottom:10 , borderRadius:20}} >
       <View style={{  display:'flex', justifyContent:"space-between",  alignItems:"center", flexDirection:"row"}} > 
       <FontAwesome name="vcard" size={25} style={{width:"20%", paddingLeft:20}} color="#FEA20B"  />
       <Text style={{fontSize:18 , fontFamily:"BasisGrotesque" , color:"#92A0A9" }} >Membership Card</Text> 
       </View>< MaterialIcons name="keyboard-arrow-right" size={20} color={colors.text} style={{marginRight:20}} /></Pressable>


       <Pressable onPress={()=> navigation.navigate('Message')} style={{width:width/1.1 ,ontSize:25, fontFamily:"BasisGrotesque"  , display:'flex', justifyContent:"space-between", alignItems:"center", height:80 , flexDirection:"row" , backgroundColor:"#041825" , marginBottom:10 , borderRadius:20}} >
       <View style={{  display:'flex', justifyContent:"space-between",  alignItems:"center", flexDirection:"row"}} > 
       <Entypo name="chat" size={24} style={{width:"20%", paddingLeft:20}} color="#FEA20B"  />
       <Text style={{fontSize:18 , fontFamily:"BasisGrotesque" , color:"#92A0A9" }} >Chat and Message</Text> 
       </View>< MaterialIcons name="keyboard-arrow-right" size={20} color={colors.text} style={{marginRight:20}} /></Pressable>


 </View>

 <View style={{width:width/1.1 }}>
   <Text style={{fontSize:22, fontFamily:"BasisGrotesqueBold" , marginTop:20 , marginBottom:10 , fontFamily:"Cushingstd"}}  >Support</Text>


     <Pressable onPress={()=> navigation.navigate('Faq')} style={{width:width/1.1 ,ontSize:25, fontFamily:"BasisGrotesque"  , display:'flex', justifyContent:"space-between", alignItems:"center", height:80 , flexDirection:"row" , backgroundColor:"#041825" , marginBottom:10 , borderRadius:20}} >
       <View style={{  display:'flex', justifyContent:"space-between",  alignItems:"center", flexDirection:"row"}} > 
       <Entypo name="help" size={24} style={{width:"25%", paddingLeft:20}} color="#FEA20B"  />
       <Text style={{fontSize:18 , fontFamily:"BasisGrotesque" , color:"#92A0A9" }} >FAQs </Text> 
       </View>< MaterialIcons name="keyboard-arrow-right" size={20} color={colors.text} style={{marginRight:20}} /></Pressable>
     
 


       <Pressable onPress={()=> navigation.navigate('PrivacyPolicy')} style={{width:width/1.1 ,ontSize:25, fontFamily:"BasisGrotesque"  , display:'flex', justifyContent:"space-between", alignItems:"center", height:80 , flexDirection:"row" , backgroundColor:"#041825" , marginBottom:10 , borderRadius:20}} >
       <View style={{  display:'flex', justifyContent:"space-between",  alignItems:"center", flexDirection:"row"}} > 
   
   
       <MaterialIcons onPress={()=> navigation.navigate('PrivacyPolicy')} name="privacy-tip" size={24} style={{width:"20%", paddingLeft:20}} color="#FEA20B"  />
       <Text style={{fontSize:18 , fontFamily:"BasisGrotesque" , color:"#92A0A9" }} >Privacy Settings</Text> 
       </View>< MaterialIcons name="keyboard-arrow-right" size={20} color={colors.text} style={{marginRight:20}} /></Pressable>




 </View>

 <View>

   <View>

   </View>

 </View>

</View>
      </ScrollView>
      
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
  tinyLogo: {
   
    width: 200,
    height: 200,
    resizeMode:"cover",
    borderRadius:200,
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
  height:"20%",

  width:"93%",
  justifyContent:"center",
  flexDirection:'column',
  alignItems:'flex-start'
  },

  mid: {
    height:"65%",
    
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
});