import React from 'react'

import Shimmer from "./Shimmer";
import {
  useTheme,


} from 'react-native-paper';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from "react-native";
var width = Dimensions.get('window').width;
import Loading  from './Loading';
const Loadings = () => {



    const {colors} = useTheme();
  
 
  

    return (
   <Loading/>
    )
}

const styles = StyleSheet.create({
 
      containerStyle : {
       flex: 1,
      
        justifyContent: 'center',
        alignItems: 'center',
      
  
        textAlign: "center",
        flexDirection: "column",
    
      },
       
      
    
  
  


    box: {
      borderRadius:50,
 
  
   width: width/1.15,
  
     

    },

    box1: {
      borderRadius:50,
    
  
   width: width/1.15,
  
     
 
    },


    box2: {
      borderRadius:50,
   
  
   width: width/1.15,
  
  
    },
   
  });

export default Loadings
