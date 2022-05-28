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

import { useTheme } from 'react-native-paper';
import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import HTML from 'react-native-render-html';
var width2 = Dimensions.get('window').width/1;
var width = Dimensions.get('window').width/1.1 ;


const CalenderEvent = ({route, navigation}) => {

    const { data } = route.params;

    const { colors } = useTheme();

    const tagsStyles = {
      h1: {
        color: '#6728C7',
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
    // const HOMEPAGE_QUERY = `
    // query GetOneAppJournal($slug: String) {
    //   getOneAppJournal(slug: $slug) {
    //       des
    //     des2
    //     des3
    //   }
    // }`
    
 


    // const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY, {
    //   variables: {
    //     slug: data.slug
    //   }
    // })
  
    // console.log(data1)
    return (
      <View style={{flex:1, backgroundColor:colors.borderColor}} >
             <ScrollView>
    <View style={styles.containerStyle}>
    <View style={styles.center}>
   
      
         
   
   
        
               <View  key={data.id}   style={styles.box}>
      
      
      <ImageBackground
               style={styles.logo}
                resizeMode="cover"
         
               source={{
                   
                  uri: data.img}}
               >
               
              
               </ImageBackground>

               </View>
          

               <View style={styles.containermid} >

               <Text style={{ fontSize:17,  paddingLeft:10,   fontFamily:"font"}} >{data.offer}</Text>
            <Text style={{ paddingLeft:10,   fontFamily:"BasisGrotesque",}} >Date- {moment( JSON.parse(data.date)).format('LL')}</Text>

</View>


         

          <View style={styles.containermid2} >

          <Text style={{fontSize:15,marginBottom:10 , paddingLeft:10,   fontFamily:"font"    }}>Know More</Text>
          <Text style={{ fontFamily:"BasisGrotesque" , paddingLeft:10,  }} >
         {data.description}
           </Text>

          </View>
  


          {data.link ? 
(
<Pressable  onPress={()=> navigation.navigate('View', { name:data.offer, data:{ id: data.link} , title:data.link }) } style={styles.layer  }>     
<View style={[styles.text, {backgroundColor:colors.brandColor}]}>
<Text style={{fontFamily: "BasisGrotesqueBold" ,  fontSize:16, fontWeight:"700",  color:'white', textTransform:'uppercase'}}  >Explore</Text>
</View>
</Pressable>
)
:
(
null
)

}
   
   
   </View>
       </View>
       </ScrollView>
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
      height: 170,

      alignItems: "center",
   justifyContent:"flex-end",
   backgroundColor:"#E8E8E8",
    },
    layer : {
   
           height:60,
           width: "100%",
       zIndex:100,
       top:-10,

       marginTop:10,
           alignItems: "flex-start",
         textAlign: "center",
        
       justifyContent:"center",
       
       width: width,
       },
       text : {
         borderWidth: 1,
         borderColor: "#8e8e93",
     
         shadowColor: '#000',
         shadowOffset: { width: 1, height: 1 },
         shadowOpacity:  0.4,
         shadowRadius: 3,
         elevation: 14,
         
           height: "60%",
           width: "30%",
          borderRadius: 3,
           alignItems: "center",
         textAlign: "center",
        
     
         marginRight:20,
       justifyContent:"center",
     alignItems:"center",
     
       },
    stretch: {
      width: "100%",
      height: 210,
      resizeMode: 'stretch',
    },
    box: {
      borderRadius:50,
    marginTop:20,
   
   width: width2,
   backgroundColor:"#0c1b2a",
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

       borderLeftWidth: 3,
       borderLeftColor: "#FEA20B",

       
   
    
    },
    containermid2: {
      marginTop:20,
      justifyContent: 'center',
      alignItems:"flex-start",
      flexDirection:"column",
       width: width/1.02,



       
   
    
    },
  });

export default CalenderEvent
