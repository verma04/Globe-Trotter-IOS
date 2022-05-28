import React from 'react'

import ImageView from 'react-native-image-view';

import { Animated, View, StyleSheet, ImageBackground, Dimensions, ScrollView , Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
var width = Dimensions.get('window').width;
const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]
// const CarouselCards = ({img}) => {
//   const [index, setIndex] = React.useState(0)
//   const isCarousel = React.useRef(null)
//   const [visible, setIsVisible] = React.useState(false);

//   const data = img.map(t => ({imgUrl:t.img}))
//   const vis = img.map(t => ({source:{uri:t.img}, title:t.url , width:806, height:720})) 
//   console.log(data)

//   return (
//     <View style={styles.containerStyle} >
//       <TouchableOpacity   onPress={()=> setIsVisible(true)}>
//       <Carousel
// layout={'default'}
//         layoutCardOffset={9}
//         ref={isCarousel}
//         data={data}
//         renderItem={CarouselCardItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         onSnapToItem={(index) => setIndex(index)}
//         useScrollView={true}
//         enableMomentum={false}
//         lockScrollWhileSnapping
//         autoplay
//          loop
//         autoplayInterval={3000}
        
//       />

      
//       </TouchableOpacity>
  


//     </View>

//   )
// }



const CarouselCards = ({img , location}) =>  {
  const [visible, setIsVisible] = React.useState(false);
 const numItems = images.length
 const itemWidth = (FIXED_BAR_WIDTH / numItems) - ((numItems - 1) * BAR_SPACE)
 const animVal = new Animated.Value(0)
 
const vis = img.map(t => ({source:{uri:t.img}, title:t.url , width:806, height:720})) 
 
console.log(location)
 
let imageArray = []
  let barArray = []
  img.forEach((image, i) => {
    console.log(image, i)
    const thisImage = (
      < >
   
      <ImageBackground
        key={`image${i}`}
        source={{uri: image.img}}
        imageStyle={{  borderRadius:10 }}
        style={{ width: width/1.1 ,   height: "100%" }}
      >
 <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
<View style={{ display:"flex", justifyContent:"flex-start" , flexDirection:"row" , alignItems:"center" ,padding:1 , width:"35%", color:"white", borderRadius:20,  margin:10  ,backgroundColor:"#FFF0D8" , }} >
<Image
    style={{width: 10, height:10 , marginLeft:5, marginRight:5 }}
   source = {
      {
  uri:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1639460813/cseypoyqdr9vfnahwwbz.png'
     }
   }
  />
<Text   style={{ color:"#D27C4A"  }} >
 

  
  {location}</Text>

  </View>
    </LinearGradient>






    </ImageBackground>

      </>


    )
    imageArray.push(thisImage)

    const scrollBarVal = animVal.interpolate({
      inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
      outputRange: [-itemWidth, itemWidth],
      extrapolate: 'clamp',
    })

    const thisBar = (
      <View
        key={`bar${i}`}
        style={[
          styles.track,
          {
            width: 5,
            marginLeft: i === 0 ? 0 : BAR_SPACE,
          },
        ]}
      >
        <Animated.View

          style={[
            styles.bar,
            {
              width: 5,
              transform: [
                { translateX: scrollBarVal },
              ],
            },
          ]}
        />
      </View>
    )
    barArray.push(thisBar)
  })

return (
  <TouchableOpacity
    style={styles.container}
    flex={1}
    onPress={()=> setIsVisible(true)}
  >
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={10}
      pagingEnabled
      onScroll={
        Animated.event(
          [{ nativeEvent: { contentOffset: { x: animVal } } }]
        )
      }
    >



      {imageArray}
   
<View
      style={styles.skip}
    >
     
    </View>
    </ScrollView>
    <View
      style={styles.barContainer}
    >
      {barArray}
    </View>

    {visible ? 
 (
  <ImageView
  images={vis}
  imageIndex={0}
  visible={visible}
  
  onRequestClose={() => setIsVisible(false)}
/>
 )
 :
 (
null
 )

 }
  </TouchableOpacity>
)

}




const styles = StyleSheet.create({
  
  container: {
    marginTop:10,
 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius:20,
    width: width/1.1,
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 10,
    flexDirection: 'row',
    left: 50,
  },
 
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 4,
    borderRadius:12,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 4,
    borderRadius:12,
 
    position: 'absolute',
    left: 6.8,
    top: 0,
  },
})


export default CarouselCards









