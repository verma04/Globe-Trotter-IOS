import React from 'react'
import { View , StyleSheet, Pressable , Text} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH  } from './CarouselCardItem'
import data from './data'
import { useQuery } from 'graphql-hooks'
import Toast from 'react-native-root-toast'


import {Ionicons } from '@expo/vector-icons'
const CarouselCards = ({navigation}) => {

  
  const HOMEPAGE_QUERY = `query GetSlider {
    getMontlySpotlight {
      id
      img
      offer
      description
      date
      link
    
  }
}`
   const { loading, error, data:data2 } = useQuery(HOMEPAGE_QUERY    ,{ 

})



  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


if(loading) {
  return (
    null
  )
}

const length = data2.getMontlySpotlight.length


  
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
  

  return (
    <View style={styles.containerStyle} >
      <Carousel
layout={'default'}
        layoutCardOffset={9}
        ref={isCarousel}
        data={data2.getMontlySpotlight}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableMomentum={false}
        lockScrollWhileSnapping
         loop
        autoplayInterval={10000}
      />
<View  style={{ position: "absolute" , bottom:-15}}>
<Pagination
  dotsLength={length}
  activeDotIndex={index}
  carouselRef={isCarousel}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'white'
    
  }}
  inactiveDotOpacity={0.4}
  inactiveDotScale={0.6}
  tappableDots={true}
/>
</View>


<View  style={{position:"absolute", bottom:28, width:"88%"}} >
<View style={styles.layer}>   





<Pressable        onPress={()=> navigation.navigate('ViewItem', { name:data2.getMontlySpotlight[index].headline, data:{ id: data2.getMontlySpotlight[index].link} , title:data2.getMontlySpotlight[index].offer , bc:true }) } style={styles.text}>
  <Text style={{color:'white',fontFamily:"Cushingstd", paddingLeft:10, fontSize:18,  fontWeight:'700'}}>{data2.getMontlySpotlight[index].offer}</Text>

 
  </Pressable>
  </View>
</View>
    </View>

  )
}


const styles = StyleSheet.create({
    containerStyle : {
       
        justifyContent: 'center',
        alignItems: 'center',
     
        position: "relative"
      
    },
    dot: {
  position: "absolute",
  top: 0,
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

    },
    layer : {

  width: "100%",
   

      alignItems: "center",
    textAlign: "center",
    flexDirection:'row',
   
  justifyContent:"flex-start",
  alignItems:"center",
  },
  text : {
    paddingBottom:10,
    
    borderLeftWidth: 3,
    borderLeftColor: "#FEA20B",
  
   
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 14,
    
      paddingTop:10,
      
   
  
      alignItems: "center",
    textAlign: "center",
   flexDirection:'row',
  justifyContent:"flex-start",
  alignItems:"center",
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