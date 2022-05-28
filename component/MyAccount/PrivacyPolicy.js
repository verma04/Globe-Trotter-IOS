import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View  , Dimensions , Image} from 'react-native';
import { Accelerometer } from 'expo-sensors';

import Header2 from '../shared/header2';
var width = Dimensions.get('window').width/1.2;
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Wallet from 'react-native-wallet';
import AsyncStorage from '@react-native-async-storage/async-storage';import { useTheme } from 'react-native-paper';
import ActionBarImage2 from './ActionBarImage2';
import { ScrollView } from 'react-native-gesture-handler';
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

<ActionBarImage2  navigation={navigation}  title={"Privacy Policy"}/>

<ScrollView>
    <View style={{alignItems:"center", justifyContent:"center" , flexDirection:"column" , width:width}} >

<View style={styles.text}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Introduction</Text>
   
</View>

<Text style={{marginTop:20 , color:"#92A0A9" , lineHeight:20}}  >We take your privacy very seriously and are committed to protecting your personal data.  This Privacy Policy details how we, Globe-Trotter Group Limited of The Factory, Bingley Road, Hoddesdon, Hertfordshire, EN11 0NX  (we, us) collect, use and process personal data. 

This Privacy Policy affects your legal rights and obligations so please read it carefully. If you do not agree to be bound by this Privacy Policy, please do not provide personal data to us. 

We may update this Privacy Policy from time to time at our discretion and in particular to reflect any changes in applicable laws. If we do so, and the changes substantially affect your rights or obligations, we shall notify you if we have your email address. Otherwise, you are responsible for regularly reviewing this Privacy Policy so that you are aware of any changes to it</Text>
  
<View style={styles.text}>
<Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >What personal data do we collect?</Text>
  </View>
  <Text style={{marginTop:20 , color:"#92A0A9" , lineHeight:20}}  >By personal data we mean identifiable information about you. Generally, this is likely to include information such as your name, email address, correspondence address and your IP address if you access our website. 

We may collect, use, store and transfer different kinds of personal data about you:

Contact Data includes data such as your email address, telephone number,  delivery address and billing address
Identity Data includes data such as first name, last name, username or similar identifier, date of birth;
Financial Data includes credit or debit card details;
Transaction Data includes details of products you have purchased from us and payments made; 
Technical Data includes data such as internet protocol (IP) address, your login data, browser type and version, cookies, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access our website and any communications we may send to you.
Usage Data includes information about how you use our website such as  information about your visit to our website, including the full Uniform Resource Locators (URL) click stream to and through, pages you viewed or searches you made, page response times, download errors, length of visit, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page.
Marketing Data includes your preferences in receiving marketing from us.
We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as it does not directly or indirectly identity you.  However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we will treat the combined data as personal data which will be used in accordance with this Privacy Policy.

We do not knowingly collect personal data of children.  Please do not provide personal data to us unless you are at least 18 years old.</Text>
<View style={styles.text}>
<Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Personal data you provide to us</Text>
</View>
<Text style={{marginTop:20 , color:"#92A0A9" , lineHeight:20}}  >From time to time you may provide to us personal data. This may be because:

You access and interact with our website;
You create an account on our website and/or purchase goods from us;
You or your employer provides services to us;
We provide services to you or your employer;
You apply to work with us as an employee or a consultant;
You provide feedback or reviews to us;
You respond to a survey or questionnaire or enter a promotion or competition;
You sign up for our newsletter;
You otherwise contact us including with queries, comments or complaints.
We shall process all such personal data in accordance with this Privacy Policy. Certain personal data is mandatory to be provided to us in order that we can fulfil your request, for example to create an account on our website, and we shall make this clear to you at the point of collection of the personal data.

All personal data that you provide to us must be true, complete and accurate.  If you provide us with inaccurate or false data, and we suspect or identify fraud, we will record this and we may also report this to the appropriate authorities.   

When you contact us by email or post, we may keep a record of the correspondence and we may also record any telephone call we have with you.</Text>
<View style={styles.text}>
<Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Personal data we automatically collect about you collect about you

</Text>
</View>

<Text style={{marginTop:20 , color:"#92A0A9" , lineHeight:20}}  >When you use our website, we may automatically collect and store information about your Technical Data and Usage Data for the purposes of research and analysis.

Some of this information is collected using cookies and similar tracking technologies. If you want to find out more about the types of cookies we use, why, and how you can control them, please see our Cookies Policy.

</Text>
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

    width: "100%",
   borderRadius: 3,
   
flexDirection:"column",
 
justifyContent:"center",
alignItems:"flex-start",

},
});