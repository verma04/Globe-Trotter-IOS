import React from 'react'
import { View, Text  ,  Image, StyleSheet , ImageBackground,} from 'react-native'
import Header from '../shared/header'
import Loading from '../screens/Loading'
import Slider from './Slider'
import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width ;
import { Dimensions } from "react-native";
import { StatusBar } from 'expo-status-bar'

const HomeScreen = ({navigation}) => {


  const { colors } = useTheme();
        return (
          <View style={{flex:1, backgroundColor:colors.borderColor}} >
    
            <Header  navigation={navigation}/>
            <ScrollView>
           
       
           
            <View style={styles.containerStyle}>
            <View style={styles.center}
             animation="fadeInUpBig"
             >
            <TouchableOpacity onPress={()=> navigation.navigate('Concierge')}  style={[styles.box ,{
              borderColor:colors.borderColor , width:width ,height:200,
            } ]}>


  <ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
        source={{
            
           uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220408-ai2vg-bulk'}}
      >
         <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
 <View style={styles.layer}>     
<View style={[styles.text , {width:"92%"}]}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Travel Guides & Recommendations
</Text>
    <Text style={{ fontSize:15,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >Book your next adventure</Text>
</View>
</View>

</LinearGradient>
</ImageBackground>
  </TouchableOpacity>
 
  <TouchableOpacity onPress={()=> navigation.navigate('Amabassdors')}  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

  <ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220408-3l4mb-bulk'}}
    >
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      <View style={styles.layer}>     
      <View style={styles.text}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Ambassadors</Text>
    <Text style={{ fontSize:15,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >Insider Travel Tips</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Club')} style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

<ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220408-sa8by-bulk'}}
    >
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
<View style={styles.layer}>     
  
<View style={styles.text}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Club Benefits</Text>
    <Text style={{ fontSize:15,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >Additional perks</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Calender')} style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

 <ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220329-y76fr-bulk'}}
    >
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
<View style={styles.layer}>     
<View style={styles.text}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Event Calendar</Text>
    <Text style={{ fontSize:15,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >Browse Art, Sports & Events</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity   onPress={()=> navigation.navigate('Journal')} style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
        style={styles.logo}
        resizeMode="cover"
       

      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220329-h121y-bulk'}}
    >
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
<View style={styles.layer}>     
<View style={styles.text}>
    <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >Journal</Text>
    <Text style={{ fontSize:15,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >In conversation with...</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>


       
  </View>
            </View>

            <Slider navigation={navigation}/> 
            </ScrollView>
            
            </View>
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

      

      
        height: "60%",
        width: "80%",
    
       
    flexDirection:"column",
     
    justifyContent:"center",
 alignItems:"flex-start",
 
    },
    stretch: {
      width: 55,
      height: 200,
      resizeMode: 'stretch',
    },
    box: {


      

    
    
  
   width: width/2,
   height: 170,
      

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
export default HomeScreen
