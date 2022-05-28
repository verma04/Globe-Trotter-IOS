import React from 'react'
import { View , StyleSheet, Pressable } from "react-native"
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Text } from 'react-native-paper'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'

import {
  useTheme,


} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
const CarouselCards = ({data , title , navigation , active}) => {
  
   const data1 = data.filter(t => t.title !== active.title)

 
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  
  const check = () => {
  

    console.log("dsds")

    var valueAtIndex1 = data1[index];

   

    navigation.navigate('ViewItem', { name: valueAtIndex1.title , data:valueAtIndex1 , title:title , all:data }) 

  }

  

  return (


  
    <View style={styles.Style} >
      <View style={{justifyContent:"flex-start" ,  marginBottom:10, width:ITEM_WIDTH}}   ><Text  style={{fontSize:22  , textTransform:"capitalize" ,     fontFamily: "font" ,   }} >Related {active.items.name + "s"}</Text></View>
      
      <Carousel
 layout={'default'}
 onPress={()=> check()}
        ref={isCarousel}
        data={data1}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
  
  <View  style={{position:"absolute", top:45, width:"20%"  , right:30 }} >
<View style={styles.layer}>   
<Pressable        onPress={()=> check()} style={styles.text}>
  <Text style={{fontFamily: "font" }}>View</Text>
  <FontAwesome5 name="greater-than" size={10} color="black" />
  </Pressable>
  </View>
</View>
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />  */}
    </View>

  )
}


const styles = StyleSheet.create({
    Style : {
      marginTop:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:80,
        

        
        position:"relative"

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
      height: "75%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    layer : {

        height: 40,
        width: "100%",
 
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
 alignItems:"center",
    },
    text : {
      backgroundColor:"rgba(255, 255, 255, 0.80)",
        height: "60%",
        width: "90%",
     borderRadius:2,
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"space-evenly",
 alignItems:"center",
 flexDirection:"row"
    },
    stretch: {
      width: 55,
      height: 200,
      resizeMode: 'stretch',
    },
    box: {
    marginTop:20,
   backgroundColor:"#E8E8E8",
   width: 150,
   height: 150,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
  borderRadius: 20,
      alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
 alignItems:"center",
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    container: {
      flex: 1,
    },
   
  });


export default CarouselCards