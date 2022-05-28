

import React from 'react';
import {
    View,
    Text,
  
    Dimensions,
    StyleSheet,
   
   
} from 'react-native';


import LinearGradient from 'expo-linear-gradient';
import {   Image , Pressable} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
var width = Dimensions.get('window').width;
export default function SplashScreen({navigation}) {

    const { colors } = useTheme();
    const paperTheme = useTheme();
    console.log(paperTheme.dark)
  const  container = {
      flex: 1,
      color:"white",
      backgroundColor: "#051C2C",
      justifyContent:"flex-end",
      alignItems:"center",
      flexDirection:"column",
    }

const    text = {
      color: colors.splashColor,
      fontWeight:"900",
      fontSize:20,
       fontFamily:"BasisGrotesque"
     
  }
 const button = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 4,
     width: width/1.5,
    color: "#151e2f",
    marginBottom:10,
    fontFamily:"font",
    backgroundColor: "#051C2C",

    borderWidth: 1,
    borderColor:  "#50606B",
  }

   const term  = {
     marginTop:30,

    color:"#FEA20B",
  
   
}
    return (
              <View style={container}>
        
     
        <View
            style={[styles.footer, {
                backgroundColor: "#051C2C",
            
            }]}
           
        >

<View   style={{position:"absolute" , top:0 , backgroundColor:'#041825', width:"90%" , justifyContent:"center" , alignItems:"center", height:350, borderBottomLeftRadius:200,  borderBottomRightRadius:200}}  >
<Image
        style={styles.logo}
        resizeMode="cover"
        imageStyle={{ borderRadius: 20}}
      source={{
          
         uri: colors.darklogo}}
    ></Image>
</View>

   <View>
   <Pressable  onPress={()=> navigation.navigate('SignInScreen')} style={[button , {
     backgroundColor:'#041825' , borderColor:"#041825" , borderWidth:2,
   }]} >
      <Text style={text}>Login</Text>
    </Pressable>
    <Pressable  onPress={()=> navigation.navigate('SignUpScreen')} style={button} >
      <Text style={text}>SignUp</Text>
    </Pressable>


    <View style={styles.line} >

<View
style={{
borderBottomColor: "#50606B",
borderBottomWidth: 1,
height :1 ,
width: "100%",

}}
/>

<Text 
style={{
color: "white",
 textAlign:"center",
 marginTop:-12,
 backgroundColor:colors.splashbg,
 width: "20%",
 fontSize:20


}}

>or</Text>
</View>
  

  

    <View style={styles.bottom} >

    <Text style={styles.art}  >The art of travel</Text>


    <Text  style={term}>Term and conditions</Text>
    </View>
   </View>
   
   


        </View>
    
      </View>
    )
}


const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;

const styles = StyleSheet.create({



  footer: {
        width: "90%",
        height: "100%",
        backgroundColor: "red",
        justifyContent:"flex-end",
        alignItems:"center",
        flexDirection:"column",
        paddingBottom:200,
position: 'relative',
 
 

    
   
      
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  bottom : {
    width: width/1.5,
    justifyContent:"center",
    alignItems:"center",
  },
  art : {
    color: "white",
    fontSize: 30,
      fontFamily:"font",

      textAlign:"center"

  },


  line : {
marginBottom:20,
marginTop:20,
justifyContent:"center",
alignItems:"center",
flexDirection:'column'
  },



  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
