import React, { useState , useEffect } from "react";
import { View, ImageBackground  ,Button, Text, StyleSheet  , Alert ,  Image, TouchableNativeFeedback, Pressable} from "react-native";
import { AntDesign , Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';;
import { useQuery , useMutation } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width ;
import DropShadow from "react-native-drop-shadow";
import Loading from "../screens/Loading";
const Home = ({ list , state , loading }) => {

    const [wish, setWish] = React.useState(list)
    const REMOVEWISH = `
mutation Mutation($userid: ID, $title: String) {
  removeWishlist(userid: $userid, title: $title) {
    userid
    title
  }
}`


    const [removewwish , {data:data3, loading:load4}] = useMutation(REMOVEWISH)



  const createTwoButtonAlert = async  (title) =>  {
  const data = {
    userid:state,
    title:title,
  }
  const  fin = wish.filter(t => t.title !== title)


  let toast =  Toast.show(`${title} removed from wishlist` , {
    duration: Toast.durations.LONG,
    position:Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,

  });

  Alert.alert('My Favourite', 'Do you want to remove Favourite?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: (title) =>  {
  
       
  
     removewwish({variables:data})

  
     setWish(fin)
    

   
      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 2500);
       
  }
    
  },

  ]) };
 
 


  return (
 
     
 <>
      {loading ? 
      (
        <Loading/>
      ):
      (
        <ScrollView

        >
        <View style={styles.center}>

        {wish.map(data => 
        <>
  
   
       
       
       
  
  
  
  
      
      <TouchableOpacity  key={data.id}
       
           
       
           
   style={[styles.box, styles.shadowProp]}>
  
  
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
      <TouchableOpacity onPress={() =>createTwoButtonAlert(data.title)} style={styles.layer2}>     
      <View style={styles.text2}>

      <AntDesign name="heart" size={24} color="#FEA20B" />
      
      </View>
      </TouchableOpacity>
      <View style={styles.layer}>     
      <View style={styles.text}>
        
      <Text style={{fontFamily: "Cushingstd", marginLeft:10, fontSize:18 , color:"white"}}>{data.title}</Text>
      <Text style={{fontFamily: "BasisGrotesque", marginLeft:10  , fontWeight:'700',color:"white" }}>{data.category}</Text>
      </View>
      </View>
      </LinearGradient>
      </ImageBackground>
      </TouchableOpacity>
    
  
   
    
   
           </>
        
        )
  
  
        }
     
   
  
  
  
  </View>
  </ScrollView>
      )

      

      }

</>
  
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
 justifyContent:"space-between",
alignItems:"center",
  },
  layer2 : {

    height: 40,
    width: "100%",

    alignItems: "center",
  textAlign: "center",
 
justifyContent:"center",
alignItems:"flex-end",

marginRight:30,
},
  layer : {

      height: "25%",
      width: "100%",
      marginBottom:10,
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

  text2: {
  
    borderColor: "white",
 
    shadowOffset: { width: 1, height: 1 },
    borderRadius:3,

      height: "60%",
      width: "10%",
    marginLeft:320,
      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"space-evenly",
alignItems:"center",
flexDirection:"row",
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
   
    borderRadius:10,
  

 width: width,
 height: 170,


 
 
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