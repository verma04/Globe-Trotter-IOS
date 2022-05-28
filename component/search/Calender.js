import React, {useRef} from "react";


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

import { useTheme } from 'react-native-paper';
import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import HTML from 'react-native-render-html';
import Webview from "../screens/ViewItems/WebView";
import { LinearGradient } from "expo-linear-gradient";
import ActionBarImage2 from "./ActionBarImage2";
var width2 = Dimensions.get('window').width/1;
var width = Dimensions.get('window').width/1.1 ;
const windowHeight = Dimensions.get('window').height;
export default function Calender({route , navigation}) {
    const { colors } = useTheme();

    const tagsStyles = {
        h1: {
          color: '#6728C7',
          textAlign: 'white',
          marginBottom: 10
        },
        h2 : {
          color: 'white',
      
          marginBottom: 10
        },
        h3 : {
          color: 'white',
          textAlign: 'center',
          marginBottom: 10
        },
        img: {
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 20
        },
        p: {
          fontFamily:"Roboto_400Regular",
          color: colors.icon,
        },
        iframe : {
         marginLeft: 'auto',
         marginRight: 'auto',
         marginTop: 20
        }
      }
    const { data } = route.params;
    const refRBSheet = useRef();

    const HOMEPAGE_QUERY = `query GetCalenderItemsSaerch($title: String) {
        getCalenderItemsSaerch(title: $title) {
          id
          img {
            img
          }
          title
          content {
            id
            label
            description
          }
          status
          description
          date
          event
          slug
          starTime
          endTime
          location
          category
        }
      }`
    console.log(data)
      const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY    ,{ 
        variables: {
            title: data.title
     }
    })
    console.log(data1)
    
    if(loading) return <Loading/>
  return (
    <View  style={{flex:1, backgroundColor:colors.borderColor,    justifyContent: 'center',
    alignItems: 'center',
     position: "relative",}}  >

<ActionBarImage2  navigation={navigation}  title={route.params.name}/>

<Pressable  onPress={() => refRBSheet.current.open()}  style={[styles.button ,{backgroundColor:colors.brandColor}]} >
 
 <Text style={styles.text1}>Enquire here</Text>
</Pressable>

         <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
         >
<View style={styles.containerStyle}>
<View style={styles.center}>

  
     


    
           <View  style={[styles.box ,{
          borderColor:colors.borderColor
        } ]}>
  
  
  <ImageBackground
           style={styles.logo}
            resizeMode="cover"
   
            imageStyle={{ borderRadius: 10}}
           source={{
               
              uri: data1.getCalenderItemsSaerch.img[0].img}}
           >
              <LinearGradient
    // Background Linear Gradient
    colors={['transparent', '#000000']}
    style={styles.logo}
  >
           
           <View style={styles.layer}>     
           <View style={styles.text}>
         
           </View>
           </View>
           </LinearGradient>
           </ImageBackground>

           </View>
      

      <View style={styles.containermid} >

<Text  style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"  }}  >Event Overview</Text>
{data1.getCalenderItemsSaerch.content.map(t=> 
 <Text  style={{justifyContent:"center" ,  height:20, marginTop:10, alignItems:"center" , flexDirection:"row"}} > <Text style={{fontSize:7 , color: "#fea20a" }} >{'\u2B24'}</Text> {t.description}</Text>
  )

  }

      </View>


     

      <View style={styles.containermid} >

      <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"   }}>Know More</Text>
      
<HTML source={{ html:data1.getCalenderItemsSaerch.description}} 
tagsStyles={tagsStyles}
contentWidth={width2} />


      </View>



  <View style={styles.buttons}>
  
  </View>


</View>
   </View>
   </ScrollView>
   <RBSheet
    ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={true}
    height={windowHeight/1.15}
    
    backgroundColor={colors.borderColor}
    customStyles={{
      wrapper: {
       
        backgroundColor: "transparent="
      },
      draggableIcon: {
        backgroundColor: "#000"
      }
    }}
  >
<Webview/> 

  </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",

     width: "100%",
      marginBottom: 30
      
    },
    logo: {
      width: "100%",
      height: 200,
   
      alignItems: "center",
   justifyContent:"flex-end",
 
    },
    layer : {
  
        height: "25%",
        width: "100%",
  
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
  
    },
    text : {
        marginBottom:1,
        height: "60%",
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "flex-end",
      textAlign: "right",
     
    justifyContent:"flex-start",
  
    },
    stretch: {
      width: "100%",
      height: 210,
      resizeMode: 'stretch',
    },
    text1: {
      fontSize: 20,
      lineHeight: 21,
     
      letterSpacing: 0.25,
      color: 'white',
      fontFamily: "font" ,
    },
     button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: width/1.2,
      position: 'absolute',
      bottom: 15,
      fontSize:30,
      zIndex:1000,
      backgroundColor: '#339AF0',
     
    },
    box: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: "white",
             shadowColor: '#000',
             shadowOffset: { width: 1, height: 1 },
             shadowOpacity:  1,
             shadowRadius: 3,
             elevation: 14,
   
      borderRadius:10,
    marginTop:20,
   
   width: width2,

      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
  
      alignItems: "center",
      textAlign: "center",
     
    justifyContent:"space-evenly",
  
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    container: {
      flex: 1,
    },
   
  
    containermid: {
      marginTop:20,
      justifyContent: 'center',
      alignItems:"flex-start",
      flexDirection:"column",
       width: width/1.02,

       marginBottom:20,
       
   
    
    },
  });