import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
import { FontAwesome5 , AntDesign  , Entypo } from '@expo/vector-icons'; 
const CarouselCardItem = ({ item, index }) => {

  return (
    <View style={styles.container} key={index}>
   <ImageBackground
   
      resizeMode="cover"
      imageStyle={{ borderRadius: 10}}
        source={{ uri: item.imgUrl }}
        style={styles.image}
      >
      <View  style={styles.recommended} >

  
<Entypo  name="location-pin" size={10} style={{paddingRight:5}} color= "#0994CF" />
  <Text  style={{color:"#0994CF"}} > {item.location} </Text>
</View>
      <View style={styles.text}>
  <Text  style={{paddingLeft:20 , fontWeight:"bold"}}>{item.name}</Text>
  <Text style={{paddingLeft:20}}>{item.location}</Text>
</View>
</ImageBackground>
    
    </View>
  )
}
const styles = StyleSheet.create({
  text : {
    backgroundColor:"rgba(255, 255, 255, 0.80)",
    height: "20%",
    marginBottom:10,
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "flex-start",
  textAlign: "center",
  flexDirection:'column',
 
justifyContent:"center",
  
},
recommended: {
  position: 'absolute',
  top: 10,
  left: 10,
  padding: 5,
  borderTopLeftRadius:10,
  borderBottomRightRadius:10,
  backgroundColor:"rgba(255, 255, 255, 0.80)",
  alignItems: "center",
  justifyContent:"center",
alignItems:"center",
flexDirection:"row"
 },
  container: {
  
    marginTop: 10,
    marginBottom: 20,
 
    borderRadius: 8,
    width: ITEM_WIDTH,
  
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
   
  },
  image: {
   
    height: "100%",
    position: 'relative',
    borderRadius:50,
    alignItems: "center",
 justifyContent:"flex-end",
alignItems:"center",
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 10,
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
