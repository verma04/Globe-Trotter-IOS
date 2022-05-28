import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Pressable , ImageBackground } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = SLIDER_WIDTH
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
const CarouselCardItem = ({ item, index }) => {



  return (
    <>
    
<TouchableOpacity style={styles.container} key={index}>

<ImageBackground
      
        
  source={{ uri: item.img }}
  style={styles.image}
><LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.image}
      >


</LinearGradient>


</ImageBackground>

  

</TouchableOpacity>
   


  
    

    </>
  )
}
const styles = StyleSheet.create({
  container: {


    backgroundColor: 'white',

    width: ITEM_WIDTH,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  
  }, 
  image: {
    
    width: ITEM_WIDTH,
    height: 170,
  
  },
  layer : {

    
    width: "100%",

    alignItems: "center",
  textAlign: "center",
 
justifyContent:"center",
alignItems:"center",
},
text : {
  paddingBottom:10,
  

  borderWidth: 1,
 
  backgroundColor:"rgba(255, 255, 255, 0.80)",
    paddingTop:10,
    
    width: "90%",

    alignItems: "center",
  textAlign: "center",
 flexDirection:'row',
justifyContent:"flex-start",
alignItems:"center",
},
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem
