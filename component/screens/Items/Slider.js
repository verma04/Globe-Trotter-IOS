import React from 'react'

import ImageView from 'react-native-image-view';
import * as Sharing from 'expo-sharing';

import { Animated, View, StyleSheet, ImageBackground, Dimensions, ScrollView , Text, Image, Pressable} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
var width = Dimensions.get('window').width;
const deviceWidth = Dimensions.get('window').width
import { MaterialCommunityIcons } from '@expo/vector-icons';
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10
import { FontAwesome5 , AntDesign } from '@expo/vector-icons'; 
import { Button } from 'react-native-paper';

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
//     <View style={styles.wrapperStyle} >
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

import { FontAwesome } from '@expo/vector-icons';

const CarouselCards = ({img , location}) =>  {
  const [visible, setIsVisible] = React.useState(false);
 const numItems = images.length
 const itemWidth = (FIXED_BAR_WIDTH / numItems) - ((numItems - 1) * BAR_SPACE)
 const animVal = new Animated.Value(0)
 const scroll = React.createRef();
const vis = img.map(t => ({source:{uri:t.img}, title:t.url , width:806, height:720})) 

const handleSharePress = () => {
  Sharing.shareAsync("sds")
};
let imageArray = []
  let barArray = []
  img.forEach((image, i) => {
  
    const thisImage = (
      < >
   
      <ImageBackground
        key={`image${i}`}
        source={{uri: image.img}}

        style={{ width: width ,   height: "100%" }}
      >
      














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
            width: 10,
            marginLeft: i === 0 ? 0 : BAR_SPACE,
          },
        ]}
      >
        <Animated.View

          style={[
            styles.bar,
            {
              width: 10,
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
  <>
  <TouchableOpacity
    style={styles.wrapper}
    flex={1}
    
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

     
   

    </ScrollView>

  
    <View
      style={styles.barContainer}
    >
      {barArray}
    </View>
 

    {/* {visible ? 
 (
  <ImageView
  images={vis}
  imageIndex={0}
  visible={visible}
  style={{width:300}}
  
  onRequestClose={() => setIsVisible(false)}
/>
 )
 :
 (
null
 )

 } */}

 
  </TouchableOpacity>

  </>
)

}









const styles = StyleSheet.create({
  
  wrapper: {
   

  
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,

    position: 'relative',

 
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 30,
    flexDirection: 'row',
    left: "37%",
  },

  recommended: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:"#FFF0D8",
    alignItems: "center",
    justifyContent:"center",
  alignItems:"center",
  flexDirection:"row"
   },
 
   track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 5,
    borderRadius:5,
  width: 10,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 5,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})


export default CarouselCards









