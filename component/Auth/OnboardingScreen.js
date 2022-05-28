import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView , Text} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableOpacity } from 'react-native';
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10
import { AntDesign } from '@expo/vector-icons';


const images = [
  {
    img:"https://globe-trotte.fra1.digitaloceanspaces.com/20220408-oblyb-bulk",
    backImg:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1647258426/osjxabib47q58zhpqxca.png",
    head:"Priority Access",
    para:"As a member of the Globe-Trotter Club, you’ll receive priority access to exclusive events, new product and collection launches as well as lounge access at pur Globe-Trotter Flagship stories.",
  },
  {
    img:"https://globe-trotte.fra1.digitaloceanspaces.com/20220408-xh3ca-bulk",
    backImg:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1647258420/unyxp33lc847mkejxvbv.png",
    head:"Concierge",
    para:"Experience white globe customer service and perfect the art of pretending you’re not a tourist with expert recommendations, no matter what corner of the globe.",
  },
  {
    img:"https://globe-trotte.fra1.digitaloceanspaces.com/20220408-6rmhz-bulk",
    backImg:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1647237872/gsbfzycltb81jogbuoep.png",
    head:"Rental Service",
    para:"Looking for an ‘extra luggage’ for your next adventure? Explore our new rental service and rent a Globe-Trotter or two to take with you on your travels.",
  }
]

export default class OnBoardScreen extends Component {

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)



  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {



    
      const thisImage = (
        <View  key={i} style={{flex:1 , flexDirection:"column", alignItems:"center", justifyContent:"center" , position:"relative" , backgroundColor:"white" , width:deviceWidth }}>

<View
         
          style={{ width: deviceWidth  , flex:1 , height:deviceHeight , backgroundColor:"#051C2C"  ,  alignItems:"center", justifyContent:"flex-start" , flexDirection:"column" }}
        >




<AntDesign  style={{position:"absolute" , zIndex:1000, bottom:90 , right:20 , fontSize:20 ,  color:"#9B9B9B"}} onPress={()=> this.props.navigation.navigate("SplashScreen")} name="arrowright" size={24} color="#9B9B9B" />
      
      <View    style={{ width:"80%",  height:deviceHeight/2 , borderBottomLeftRadius:300 , borderBottomRightRadius:300 , alignItems:"center", justifyContent:"center" , backgroundColor:"#041825"}} >
          <Image
 
 source={{uri:image.img}}
 resizeMode="contain"
 style={{ width:"40%",  height:"40%"}}
/>
</View>



      
      <View style={{width:deviceWidth/1.2 , marginTop:30 }}>
        <Text style={{marginLeft:10 , fontSize:20 , fontFamily:"Cushingstd" , color:"#FFFFFF"}} >{image.head}</Text>

        <Text style={{marginLeft:10  , fontSize:17, fontFamily:"BasisGrotesque" , color:"#92A0A9", marginTop:20}} >{image.para}</Text>
        </View>
        </View>

        </View>
  
      
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
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
                width: this.itemWidth,
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


    const fnc =  this.props.navigation.navigate 
    return (
      <View
        style={styles.container}
        flex={1}
      >
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >

          {imageArray}
 <View
          style={styles.skip}
        >
          {/* <Text style={{backgroundColor: '#fff',color:"#F44",textAlign:"center",alignItems: 'center',
    justifyContent: 'center',}}>skip</Text> */}
        </View>
        
        </ScrollView>
        <View
          style={styles.barContainer}
        >
          {barArray}





          {/* <TouchableOpacity onPress={()=> fnc("HomeScreen")} style={{backgroundColor: '#fff',color:"#F44", zIndex:1000, textAlign:"center",alignItems: 'center', justifyContent: 'center', position:"absolute", right:-50 , top:-80}} >
          <MaterialIcons onPress={()=> fnc("HomeScreen")} name="navigate-next" size={50} color="black" />
       </TouchableOpacity> */}
        
   
        </View>

        
       
        
      </View>
    )
  }
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 100,
    flexDirection: 'row',
  },
  
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 5,
    borderRadius:5,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 5,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})