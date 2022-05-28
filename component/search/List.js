import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StyleSheet, Image , ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
var width = Dimensions.get('window').width;
import { useMutation, useQuery } from 'graphql-hooks'
var height = Dimensions.get('window').height;
import { Fontisto , Entypo , FontAwesome } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import Loading from '../screens/Loading';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
export default function List({data1, search}) {
  const { colors } = useTheme();
    const navigation = useNavigation(); 
  return (
      <>
{data1.length === 0 
?
(
null
)
:
(
<>

{data1.map(data =>
<>

{(() => {
  if (data.category ==="concierge") {
    return (
      <TouchableOpacity
      style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}
      
    onPress={()=> navigation.navigate('ViewItem', { data: JSON.parse(data.des) }) }
      >



        

       
      
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
  
        
        source={{
          
          uri: JSON.parse(data.des).img}}
    
      >
              <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
      <View style={styles.layer}>   
      
      
      
      
      <View style={styles.text}>
      <Text style={{fontFamily: "Cushingstd" , paddingLeft:10, fontSize:18, fontWeight:"700",  color:'white'}}>{JSON.parse(data.des).title}  </Text>
      {/* <Text style={{paddingLeft:10 , fontFamily:"Cushingstd"}}>{data.location} </Text> */}
      </View>
      </View>

      </LinearGradient>
      
      
      </ImageBackground>
      
     
     

      
      
      </TouchableOpacity>
    )
  }
  else if (data.category ==="calender") {
    return (
      <TouchableOpacity

    onPress={()=> navigation.navigate('CalenderS', { data: JSON.parse(data.des) }) }
      style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}
      
     
      >
      
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
  
        
        source={{
          
          uri: JSON.parse(data.des).img}}
    
      >
              <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
      <View style={styles.layer}>   
      
      
      
      
      <View style={styles.text}>
      <Text style={{fontFamily: "Cushingstd" , paddingLeft:10, fontSize:18, fontWeight:"700",  color:'white' , fontWeight:'700'}}>{JSON.parse(data.des).title}  </Text>
      {/* <Text style={{paddingLeft:10 , fontFamily:"Cushingstd"}}>{data.location} </Text> */}
      </View>
      </View>

      </LinearGradient>
      
      
      </ImageBackground>
      
     
     

      
      
      </TouchableOpacity>
    )
  } else  if ((data.category ==="offers")){
    return (
      <TouchableOpacity
      style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}
      

    onPress={()=> navigation.navigate('OfferS', { data: JSON.parse(data.des) }) }
     
      >
      
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
  
        
        source={{
          
          uri: JSON.parse(data.des).img}}
    
      >
              <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
      <View style={styles.layer}>   
      
      
      
      
      <View style={styles.text}>
      <Text style={{fontFamily: "Cushingstd" , paddingLeft:10, fontSize:18, fontWeight:"700",  color:'white' , fontWeight:'700'}}>{JSON.parse(data.des).title}  </Text>
      {/* <Text style={{paddingLeft:10 , fontFamily:"Cushingstd"}}>{data.location} </Text> */}
      </View>
      </View>

      </LinearGradient>
      
      
      </ImageBackground>
      
     
     

      
      
      </TouchableOpacity>
    )
  }

  else  if ((data.category ==="journal")){
    return (
      <TouchableOpacity
      onPress={()=> navigation.navigate('JournalSearch', { data: JSON.parse(data.des) ,  slug: JSON.parse(data.des).title.replace(/^_+|_+$/g,'-') }) }
      style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}
      
     
      >
      
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
   
        
        source={{
          
          uri: JSON.parse(data.des).img}}
    
      >
              <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
      <View style={styles.layer}>   
      
      
      
      
      <View style={styles.text}>
      <Text style={{fontFamily: "Cushingstd" , paddingLeft:10, fontSize:18, fontWeight:"700",  color:'white' , fontWeight:'700'}}>{JSON.parse(data.des).title}  </Text>
      {/* <Text style={{paddingLeft:10 , fontFamily:"Cushingstd"}}>{data.location} </Text> */}
      </View>
      </View>

      </LinearGradient>
      
      
      </ImageBackground>
      
     
     

      
      
      </TouchableOpacity>
    )
  }
  else  {
    return (
      <TouchableOpacity
      style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}
      
     
      >
      
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
  
        
        source={{
          
          uri: JSON.parse(data.des).img}}
    
      >
              <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
      <View style={styles.layer}>   
      
      
      
      
      <View style={styles.text}>
      <Text style={{fontFamily: "Cushingstd" , paddingLeft:10, fontSize:18, fontWeight:"700",  color:'white' , fontWeight:'700'}}>{JSON.parse(data.des).title}  </Text>
      {/* <Text style={{paddingLeft:10 , fontFamily:"Cushingstd"}}>{data.location} </Text> */}
      </View>
      </View>

      </LinearGradient>
      
      
      </ImageBackground>
      
     
     

      
      
      </TouchableOpacity>
    )
  }
})()}
</>



)}

</>
)

}

    
        </>
  );
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
  logo: {
    width: "100%",
    height: "100%",
 
    alignItems: "center",
 justifyContent:"flex-end",
alignItems:"center",
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
    
      height: "60%",
      width: "90%",
     borderRadius: 3,
     
  flexDirection:"column",
   
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

    borderWidth: 1,
    

  
  

 width: width,
 height: 200,
    

    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",

backgroundColor:"#0c1b2a",
   
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 14,
  },
  container: {
    flex: 1,
  },
 
});