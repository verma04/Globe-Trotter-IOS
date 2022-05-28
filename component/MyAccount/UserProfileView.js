import React, { Component } from 'react';
import {
  StyleSheet,

  View,
  Image,
  Dimensions
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MemberShip from './MemberShip'
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme ,   Text } from 'react-native-paper';
import ActionBarImage2 from './ActionBarImage2';

export default function UserProfileView({navigation}) {

  const { colors} = useTheme()
  const [state, setstate] = React.useState('')
  
  React.useEffect(() => {

  
    const func = async () => {
      const phoneNumber = await  AsyncStorage.getItem("userToken")
    
      setstate(JSON.parse(phoneNumber))
     
    
    }
    
      
       func()
    
      
     }, [])
  return (
    <View style={{flex:1, backgroundColor:colors.borderColor,    justifyContent: 'center',
    alignItems: 'center',
     position: "relative",}} >

<ActionBarImage2  navigation={navigation}  title={"User Profile"}/>
    <ScrollView>

          <View style={styles.header}>
            <View style={styles.headerContent}>
             
                <Text style={styles.name}>{state.fullname}</Text>
                
                <Text style={styles.userInfo}>{state.membershipId}</Text>
                
            </View>
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
          
  
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  header:{
   
   
  },
  headerContent:{
    paddingLeft:10,
    alignItems: 'flex-start',
    width: "100%",
    
    flexDirection:"column",
    borderLeftWidth: 3,
    borderLeftColor: "#FEA20B",

  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    fontFamily:"Cushingstd"
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  bottom: {
    height:"10%",
     width:"80%",
    justifyContent:"space-between",
    flexDirection:'row',
    alignItems:'center'
    },
  body:{
   

    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  card : {
    marginTop:40,
    width:Dimensions.get('window').width/1.1,
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
});
