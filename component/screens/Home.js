import React from "react";
import { View, ImageBackground  ,Button, Text, StyleSheet  , Image} from "react-native";
import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Loading from "./Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width ;
import DropShadow from "react-native-drop-shadow";
import ActionBarImage2 from "../shared/ActionBarImage2";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  
  const HOMEPAGE_QUERY = ` query GetItems {
    getItems {
      id
      uniqID
      name
      img
      description
      createdAt
      slug
    }
  
  }`
   
 
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10
    }
  })




  
  const errorMessage = (error) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }

  const set = () => {
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
    
  
  if (loading) return   <Loading/>


  return (
    <View style={{flex:1, backgroundColor:colors.borderColor}} >
 


    <ScrollView>
    <View style={styles.containerStyle}>
 <View style={styles.center}>

      {data.getItems.map(data => 
      <>

{/* {(() => {
     if(data.name === "Yacht Charters" ) {
      <TouchableOpacity  key={data.id}
 
     
     
     
      onPress={()=> navigation.navigate('Explore', {  name:"Explore" ,    data: data  }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>



<ImageBackground
      style={styles.logo}
       resizeMode="cover"
    
      source={{
          
         uri: data.img}}
      >
      
      <View style={styles.layer}>     
      <View style={styles.text}>
      <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
      </View>
      </View>
      </ImageBackground>
      </TouchableOpacity>
    }
        if (data.name == "Hotel") {
          return (
            <TouchableOpacity  key={data.id}
     
         
         
         
            onPress={()=> navigation.navigate('Explore', {  name:"Explore" ,    data: data  }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

   
   
   <ImageBackground
            style={styles.logo}
             resizeMode="cover"
          
            source={{
                
               uri: data.img}}
            >
            
            <View style={styles.layer}>     
            <View style={styles.text}>
            <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
            </View>
            </View>
            </ImageBackground>
            </TouchableOpacity>
          )
        }  else if(data.name === "Villa") {
          return (
            <TouchableOpacity  key={data.id}
     
         
         
         
            onPress={()=> navigation.navigate('Explore', {  name:"Location" ,    data: data  }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

   
   
   <ImageBackground
            style={styles.logo}
             resizeMode="cover"
          
            source={{
                
               uri: data.img}}
            >
            
            <View style={styles.layer}>     
            <View style={styles.text}>
            <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
            </View>
            </View>
            </ImageBackground>
            </TouchableOpacity>
          )
        }
      
      })()} */}

{(() => {

if (data.name === "Hotel") {
  return (

    
    <TouchableOpacity  key={data.id}
     
         
         
         
    onPress={()=> navigation.navigate('Explore', {  name:"Explore" ,    data: data  }) } style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}>


<ImageBackground
    style={styles.logo}
     resizeMode="cover"
  
    source={{
        
       uri: data.img}}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
    <View style={styles.layer}>     
    <View style={styles.text}>
    <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
    </View>
    </View>
    </LinearGradient>
    </ImageBackground>
    </TouchableOpacity>
  )
}

 else if (data.name === "Villa") {
  return (
    <TouchableOpacity  key={data.id}
     
         
         
         
    onPress={()=> navigation.navigate('Location', {  name:"Location" ,    data: data  }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>



<ImageBackground
    style={styles.logo}
     resizeMode="cover"
  
    source={{
        
       uri: data.img}}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
    <View style={styles.layer}>     
    <View style={styles.text}>
    <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,   fontFamily:"Cushingstd"}}>{data.name}</Text>
    </View>
    </View>
    </LinearGradient>
    </ImageBackground>
    </TouchableOpacity>
  )
}

else  if (data.name === "Jet Charters") {
  return (
    <TouchableOpacity  key={data.id}

 
 
 
    onPress={()=> navigation.navigate('JetList', {  name:data.name , slug:data.slug   }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>



<ImageBackground
    style={styles.logo}
     resizeMode="cover"
  
    source={{
        
       uri: data.img}}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
    <View style={styles.layer}>     
    <View style={styles.text}>
    <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
    </View>
    </View>
    </LinearGradient>
    </ImageBackground>
    </TouchableOpacity>
  )
}

else  if (data.name === "Yacht Charters") {
  return (
    <TouchableOpacity  key={data.id}

 
    onPress={()=> navigation.navigate('Location', {  name:"Location" ,    data: data  }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>



<ImageBackground
    style={styles.logo}
     resizeMode="cover"
  
    source={{
        
       uri: data.img}}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
    <View style={styles.layer}>     
    <View style={styles.text}>
    <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
    </View>
    </View>
    </LinearGradient>
    </ImageBackground>
    </TouchableOpacity>
  )
}


      else  if (data.name === "Bespoke Trips") {
          return (
            <TouchableOpacity  key={data.id}
     
         
         
         
            onPress={()=> navigation.navigate('BospokeList', {  name:data.name , slug:data.slug }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

       
       
       <ImageBackground
            style={styles.logo}
             resizeMode="cover"
          
            source={{
                
               uri: data.img}}
            >
                <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
            
            <View style={styles.layer}>     
            <View style={styles.text}>
            <Text style={{color:'white', paddingLeft:10,fontWeight:'700', fontSize:18,  fontFamily:"Cushingstd"}}>{data.name}</Text>
            </View>
            </View>
            </LinearGradient>
            </ImageBackground>
            </TouchableOpacity>
          )
        }
        else    {
          return (
            <TouchableOpacity  key={data.id}
     
         
         
         
            onPress={()=> navigation.navigate('List', {  name:data.name ,  }) } style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

       
       
       <ImageBackground
            style={styles.logo}
            
             imageStyle={{ borderRadius: 10,
              width: "100%",
              borderWidth: 2,
              borderColor: "white",
              shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
            }}
            source={{
                
               uri: ""}}
            >  <LinearGradient
            // Background Linear Gradient
            colors={['transparent', '#000000']}
            style={styles.logo}
          >
          
            
            <View style={styles.layer}>     
            <View style={styles.text}>
            <Text style={{fontFamily: "font" , fontSize:18  }}   >{data.name}</Text>
            </View>
            </View>
            </LinearGradient>
            </ImageBackground>
            
            </TouchableOpacity>
          )
        }
      })()}
  
 
         </>
      
      )


      }
   
 



</View>
</View>
    </ScrollView>
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