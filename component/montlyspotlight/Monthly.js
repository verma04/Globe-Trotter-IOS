import React from "react";

import {

  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,

} from 'react-native-paper';
import { View ,  ImageBackground  ,Button,  StyleSheet  , Image, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
var width = Dimensions.get('window').width ;
import { useTheme } from 'react-native-paper';
import Header from "../shared/header";
import Header2 from "../shared/header2";
const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const HOMEPAGE_QUERY = `query Query {
  
      getMontlySpotlight {
        id
        img
        offer
        description
        date
        link
      
    }
  }`
   
 
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)



  
  const errorMessage = (error) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }

  const set = (error) => {
    let toast =  Toast.show(errorMessage(error), {
      duration: Toast.durations.LONG,
    });
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 2500);
  }

  if(error) {
    
    return (
      <>
    
      {
    set(error)
  
  }
  </>
  )
  }
    
  
  

  return (
    
<View style={{flex:1, backgroundColor:colors.borderColor}} >


  {loading ? 
  (
<Loading/>
  )
  :
  (
    <View style={styles.center}>

    {data.getMontlySpotlight.map(set => 
   

<View style={{width:width , justifyContent:"center", alignItems:"center"}}>
  
         <TouchableOpacity  key={set.id}   onPress={()=> navigation.navigate('OfferView', { name:  set.offer, data:set  }) } style={[styles.box ,{
           borderColor:colors.borderColor
         } ]}>


<ImageBackground
         style={styles.logo}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10}}
         source={{
             
            uri: set.img}}
         >
         
         <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
      <View style={styles.layer}> 
      <View style={styles.text}> 
      <Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} >{set.offer}</Text>
      <Text style={{fontFamily: "BasisGrotesque" , fontSize:17,  marginLeft:10 ,fontWeight:"700",  color:'#92A0A9' }}>{moment( JSON.parse(set.date)).format('LL')} </Text>
  
         </View>  
       
         </View>
         </LinearGradient>
         </ImageBackground>
         </TouchableOpacity>


       
      



</View>
       )
   


     
   
   


         }



</View>
  )

  }

    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
    
  },
  center: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",

    marginBottom: 100
    
  },
  logo: {
    width: "100%",
    height: "100%",
    
    alignItems: "center",
 justifyContent:"flex-end",
alignItems:"center",
  },
  layer : {

      height: "30%",
      width: "100%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
  },
  text : {
    borderLeftWidth: 3,
    borderLeftColor: "#FEA20B",


    
      height: "60%",
      width: "90%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"flex-start",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
  },
  box: {
   



 width: width,
 height: 190,

 backgroundColor:"#0c1b2a",
 
 borderWidth: 1,

        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  1,
        shadowRadius: 3,
        elevation: 14,
 shadowColor: "#000000",
 shadowOpacity: 0.8,
 shadowRadius: 2,
 shadowOffset: {
   height: 1,
   width: 1
 }
  },
  container: {
    flex: 1,
  },
 
});
export default Home;