import React from 'react'
import { View, Text  , StyleSheet} from 'react-native'
import Shimmer from "./Shimmer";
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
import {useTheme} from '../../ThemeContext';

var width = Dimensions.get('window').width;
const AmLoading = () => {



    const {colors, isDark} = useTheme();
 

    return (
          <View style={styles.containerStyle}>
              <View style={styles.center}>
              <View
  
         
        style={ styles.box }    >
 
 
    
           
      <View style={styles.layer  }>   
      <View style={ styles.image }>   
      <Shimmer  width={150} height={150}
      
             style={styles.logo}
             
           />  
           </View>
     <View style={styles.text }>
         <Text style={styles.head} >  </Text>
         <Text> </Text>
 
        
      
     </View>
  
     </View>
     
       </View>
                  </View>

                  <View style={styles.center}>
              <View
  
         
        style={ styles.box1 }    >
 
 
    
           
      <View style={styles.layer1  }>   
      <View style={ styles.image }>   
      <View
             style={styles.logo}
             
           />  
           </View>
     <View style={styles.text }>
         <Text style={styles.head} >  </Text>
         <Text> </Text>
 
        
      
     </View>
  
     </View>
     
       </View>
                  </View>
                  </View>
    )
}

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
    blockText1:{

    },
    image: {
      width: "40%",
      height: "100%",
      backgroundColor:"#e2f2ff",
      alignItems: "center",
      textAlign: "center",
      flexDirection:"row-reverse",
    justifyContent:"center",
 alignItems:"center",
 borderRadius:50,
    },
    logo: {
      
      width: "90%",
      height: "90%",
      borderRadius:50,
      borderWidth: 2,
      borderColor: "thistle",
      borderRadius: 50,
    
    },
    layer : {
      backgroundColor:"#e2f2ff",
        height: "100%",
        width: "70%",

        alignItems: "center",
      textAlign: "center",
      flexDirection:"row",
    justifyContent:"center",
 alignItems:"center",
    },
    layer1 : {
      backgroundColor:"#e2f2ff",
        height: "100%",
        width: "70%",

        alignItems: "center",
      textAlign: "center",
      flexDirection:"row-reverse",
    justifyContent:"center",
 alignItems:"center",
    },
    text : {
     
        height: "60%",
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
      textAlign: "center",
     flexDirection:"column",
    justifyContent:"center",
 alignItems:"flex-start",
 marginLeft:20
    },
    text1 : {
     
      height: "60%",
      width: "90%",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: "center",
    textAlign: "center",
   flexDirection:"column",
  justifyContent:"center",
alignItems:"flex-end",
marginRight:20
  },
    head: {
       fontSize:20,
       fontWeight:"900",
    } ,

    box: {
    marginTop:50,
    width: width,
   height: 120,
      
      shadowOpacity: 0.8,
      shadowRadius: 2,
  borderRadius: 20,
      alignItems: "center",
      textAlign: "center",
     flexDirection:"column",
    justifyContent:'flex-start',
 alignItems:'flex-end',
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    box1: {
      marginTop:20,
      width: width,
     height: 120,
        
        shadowOpacity: 0.8,
        shadowRadius: 2,
    borderRadius: 20,
        alignItems: "center",
        textAlign: "center",
       flexDirection:"column",
      justifyContent:'flex-start',
   alignItems:'flex-start',
        shadowOffset: {
          height: 1,
          width: 1
        }
      },
    container: {
      flex: 1,
    },
   
  });

export default AmLoading
