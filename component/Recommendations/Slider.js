import React from 'react'
import { View , StyleSheet } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'


const CarouselCards = ({data ,  navigation }) => {

 
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  const set = data.map(t => ({imgUrl:t.image , location:t.location, name:t.name}))

   const check = () => {
  

    var valueAtIndex1 = data1[index];

  

    navigation.navigate('ViewItem', { name: valueAtIndex1.title , data:valueAtIndex1  }) 

  }

  return (
    <View style={styles.containerStyle} >
      <Carousel
 layout={'default'}
     
        ref={isCarousel}
        data={set}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
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
      height: "75%",
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    layer : {

        height: "25%",
        width: "100%",
 
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
 alignItems:"center",
    },
    text : {
        backgroundColor:"white",
        height: "60%",
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
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