import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native"
import {
  useTheme,


} from 'react-native-paper';
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = SLIDER_WIDTH/1.15;
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 , AntDesign  , Entypo } from '@expo/vector-icons'; 
const CarouselCardItem = ({ item, index , navigation }) => {
  
  return (
    <View  style={styles.container} key={index}>

      
   <ImageBackground
   
      resizeMode="cover"
      imageStyle={{ borderRadius: 5}}
        source={{ uri: item.img[0].img }}
        style={styles.image}
      >
      
{item.location.length > 100 ?
  (
    null
  )
  : (
    <View  style={styles.recommended} >

  
<Entypo  name="location-pin" size={10} style={{paddingRight:5}} color= "#0994CF" />
    <Text  style={{color:"#0994CF"}} > {item.location} </Text>
    </View>
  )

  }
 

      <View style={styles.text}>
  <Text  style={{paddingLeft:20 , fontWeight:"bold"}}>{item.title}</Text>
  {item.location.length > 100 ?
  (
    null
  )
  : (
    <Text style={{paddingLeft:20}}>{item.location} </Text>
  )

  }

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
    borderRadius: 3,
 
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
   position: "relative",
  },
  image: {
    borderWidth: 1,
   
           shadowColor: '#000',
           shadowOffset: { width: 1, height: 1 },
           shadowOpacity:  1,
           shadowRadius: 3,
           elevation: 14,
      borderRadius:10,
    height: "100%",
    position: 'relative',
    borderRadius:10,
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
