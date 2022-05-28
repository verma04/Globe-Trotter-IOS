import React, { useEffect , useRef } from 'react'
import { View, Image, StyleSheet , Pressable, ImageBackground, Button} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ImageView from 'react-native-image-view';
import Slider from '../Items/Slider'
import Loading from '../Loading';
import { Dimensions } from "react-native";

import { useMutation, useQuery } from 'graphql-hooks'
import Ac from '../../shared/ActionBarImage'
import Svg, {
  Circle,
  Ellipse,
  G,

  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,

  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
const windowHeight = Dimensions.get('window').height;
import {
  Text,


} from 'react-native-paper';
var perf =`<!DOCTYPE html><html lang="en"><head> <script>window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 8000944,playbookUuid: 'de6e08a0-1384-45bb-89a2-ea045dc5df4a',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();</script><script src="https://leadbooster-chat.pipedrive.com/assets/loader.js" async></script></head><body></body></html>`
import { Ionicons } from '@expo/vector-icons';
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import { AntDesign } from '@expo/vector-icons'; 
var width = Dimensions.get('window').width;
var width2 = Dimensions.get('window').width/1.1;
import HTML from 'react-native-render-html';
import {
  useTheme,


} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';;

import Wishlist from './Wishlist';
import Webview from './WebView';

import RBSheet from "react-native-raw-bottom-sheet";
import ActionBarImage from './ActionBarImage';

const ViewItems = ({route , navigation}) => {
  const refRBSheet = useRef();

  navigation.setOptions({ title:  route.params.name })

  const { colors } = useTheme();

  const [state, setstate] = React.useState('')
  const [wish, setWish] = React.useState([])
  const VIEW = `
  query Query($id: ID, $userid: ID) {
    viewConciergeItems(id: $id, userid: $userid) {
      count
    }
  }`
  const WISH = `
  mutation AddWishlist($userid: ID, $id: ID, $img: String, $title: String, $category: String) {
    addWishlist(userid: $userid, id: $id, img: $img, title: $title, category: $category) {
      userid
      id
      img
      title
      category
    }
  }`
  const GETWISH = `
  query Query($id: ID) {
    getWishlsit(id: $id) {
      userid
      id
      img
      title
      category
      _id
    }
  }`


  const HOMEPAGE_QUERY = `
  query GetConciergeDecription($id: String) {
    getConciergeDecription(id: $id) {
      description
      id
      category
      subCategory
      img {
        img
      }
      title
      content {
        id
        label
        description
      }
      status
      uniqID
      items {
        id
        name
      }
      slug
      location
      views
      brochure
    }
  }
  `
  const REMOVEWISH = `
  mutation Mutation($userid: ID, $title: String) {
    removeWishlist(userid: $userid, title: $title) {
      userid
      title
    }
  }`

 React.useEffect(() => {


setIsVisible(false)
    
  if(data4) {
    setWish(data4 && data4.getWishlsit)
  }

  
   func()

  
 }, [state])


 

const func = async () => {
  const phoneNumber = await  AsyncStorage.getItem("userToken")

  setstate(JSON.parse(phoneNumber).id)
 

}





  const {data , all , title , bc} = route.params


  

  const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      id: data.id
    }
  })
  const { loading:loading2, error:error2, data:data4 } = useQuery(GETWISH, {
    variables: {
      id: state
    }
  })




  

  const  { data:dat , error:err} = useQuery( VIEW, {
    variables: {
      id:data.id,
      userid:state
    }
  })




 
  const [addwish , {data:data2, loading:load}] = useMutation(WISH)
  const [removewwish , {data:data3, loading:load4}] = useMutation(REMOVEWISH)





  const addwishlist = (set) => {

    const data = {
      userid:state,
      id:set.id,
      img:set.img[0].img,
      title:set.title,
      category:set.items.name
    }
       
    addwish({variables:data})

 
  }


  const  removewishlist = (set) => {

    const data = {
      userid:state,
      title:set.title,
    }
       
    removewwish({variables:data})

 
  }

 

    const [visible, setIsVisible] = React.useState(false);
    const [pro, setPro] = React.useState(false);
    let React_Native_Rating_Bar = [];
    const [Max_Rating, setMax_Rating] = React.useState(5);
    const [Default_Rating, setDefault_Rating] = React.useState(2.5);
    const  Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    //Empty Star. You can also give the path from local
     const Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  
     const CONTENT = `
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.0635400053675!2d76.33017635122694!3d32.2025184810567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b51208f0bfd2f%3A0x98dd162c6cd724ff!2sAmakein%20Technologies!5e0!3m2!1sen!2sin!4v1639457139912!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
     `;
     const tagsStyles = {
       h1: {
         color: "white",
         textAlign: 'center',
         fontFamily: "font" ,
         fontWeight:"1000",
    
       },
       h2: {
        color: "white",
        fontFamily: "font" ,
        fontWeight:"1000",
       },
       h3: {
        color: "white",
        fontFamily: "font" ,
       },
       img: {
      height:400,
      width: width/1.15,
      
       },
       br: {
         display: "none"
       },
       p: {
        width: width/1.1,
         color: "#92A0A9",
         fontSize:15,
         fontFamily:"BasisGrotesque",
       },
       iframe : {
        width: width/1.1,
        marginLeft: 'auto',
        marginRight: 'auto',
    
       },

       ul: {
        width: width/1.1,
        color: "#92A0A9",
        listStyleType:"disc"
      },
      
    br: {
display: "none",
      },
       li: {
        width: width/1.2,
        fontSize:15,
        lineHeight:25,
        color: "#92A0A9",
   
        listStyleType: "none",
   
        
        fontFamily:"BasisGrotesque",
        

        
       },

       





     
      
     
    }   
      
   
      
   

     if(loading|| loading2) {
       return(
        <Loading/>
       )
     }
 

 

    return (
      <>

<View style={{flex:1, backgroundColor:colors.borderColor,    justifyContent: 'center',
        alignItems: 'center',
         position: "relative",}} >

{bc ?
(
  <Ac  navigation={navigation}/>
)
:
(
  <ActionBarImage  navigation={navigation}/>
)

}
          
   
           <View style={{position:"absolute" , top:20 , right:20}} >

{loading ? 
(
null
)
:
(
 <Wishlist  data={data4 && data4.getWishlsit} title={data1.getConciergeDecription.title} data1={data1.getConciergeDecription} state={state}/>
)

}



</View>

   <Pressable  onPress={() => refRBSheet.current.open()}  style={[styles.button ,{backgroundColor:colors.brandColor , flexDirection:"row"}]} >
   <Svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.05 11.8055C18.05 7.53139 15.2047 3.94816 11.4042 3.03448C10.8668 2.90528 10.45 2.44786 10.45 1.89514V1.75554C10.45 1.23087 10.0247 0.805542 9.5 0.805542C8.97533 0.805542 8.55 1.23087 8.55 1.75554V1.89513C8.55 2.44786 8.13325 2.90528 7.59583 3.03448C3.79535 3.94816 0.95 7.53139 0.95 11.8055C0.95 12.9101 1.84543 13.8055 2.95 13.8055H16.05C17.1546 13.8055 18.05 12.9101 18.05 11.8055ZM0 15.8055C0 15.2533 0.447715 14.8055 1 14.8055H18C18.5523 14.8055 19 15.2533 19 15.8055C19 16.3578 18.5523 16.8055 18 16.8055H1C0.447715 16.8055 0 16.3578 0 15.8055Z" fill="white"/>
</Svg>

      <Text style={styles.text1}>Enquire here</Text>
    </Pressable>

   

    
<ScrollView
   showsVerticalScrollIndicator={false}
   showsHorizontalScrollIndicator={false}
>

<View style={styles.container}>

<Slider   img={data1.getConciergeDecription.img} location={data1.getConciergeDecription.location}/> 
         
         <View style={styles.containerTop}>
   
         <View style={styles.left}>
   <View
    style={{borderLeftWidth: 3, borderLeftColor: "#FEA20B",
    paddingLeft:10,}}
   >
<Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}}  >{data1.getConciergeDecription.title}  </Text>

   </View>
         

   <View style={styles.leftbottom}>
    
             
        

<Text  style={{fontFamily: "BasisGrotesque" , fontSize:17 ,fontWeight:"700",  color:'#92A0A9' }} >{data1.getConciergeDecription.location}  </Text>
    </View>
   
 
   </View>


  


   </View>
   {data1.getConciergeDecription.content.length === 0 ?
(
null
)
: (
<View style={styles.containermid}>

    

{data1.getConciergeDecription.content.map(content => 

<View style={{margin:5 , justifyContent:"space-evenly" , paddingTop:20,  paddingBottom:20, paddingLeft:10,  backgroundColor:"#041825",  alignItems:"center",  width:width/1.1 , flexDirection:"row"  , borderRadius:10}}  >  
<Text style={{ paddingLeft:15 , fontWeight:'bold' , marginRight:20  ,  color:"#92A0A9", fontFamily:"BasisGrotesque", width:"45%"  , textTransform:"capitalize"}}  >{content.label}</Text>

<Text style={{ paddingRight:15  ,  color:"white",   width: "45%" ,   fontFamily:"BasisGrotesque", textAlign:"right"  ,  }}  >{content.description} </Text>
</View> 




)

}




</View>
)

}







<View style={styles.containermid}>

{/* <RenderHtml
   contentWidth={width2}
     html={data1.getConciergeDecription.description } 
   tagsStyles={tagsStyles}
 

 /> */}


<HTML source={{ html:data1.getConciergeDecription.description}} 
   tagsStyles={tagsStyles}
   contentWidth={width2} />



 </View>
 
   {data1.getConciergeDecription.brochure ? 
   (
    <View style={styles.containermid}>
<Pressable  onPress={()=>navigation.navigate("ViewPdf")} style={[ {padding:5 , fontSize:10} ,{backgroundColor:colors.brandColor}]} >
     
     <Text style={{fontSize:15, color:"white", padding:2, fontFamily:"font"}}>View Brouchue</Text>
   </Pressable>
   </View>
   )
   :
   (
null
   )

   }


<RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={windowHeight/1.15}
        
        backgroundColor={colors.borderColor}
        customStyles={{
          wrapper: {
           
            backgroundColor: "transparent="
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
  <Webview/> 

      </RBSheet>
           

 
{/* {all ? 
(
  <Sliderr data={all} title={title} navigation={navigation} active={data1.getConciergeDecription} />
)
:
(
null
)

} */}



           </View>

      
</ScrollView>
 
         
       
            
            

            </View>
           

{/* {visible ?
(
  <>

<Pressable onPress={()=>setIsVisible(false)} style={{position:"absolute" , height:100,  width:100 , justifyContent:"center", alignItems:"center" ,  top:-10 , left:30, zIndex:10000  ,     elevation: 3}}>

</Pressable>

   <Pressable onPress={()=>setIsVisible(false)} style={{position:"absolute" , height:100,  width:100 , justifyContent:"center", alignItems:"center" ,  top:10 , right:30, zIndex:1000  ,     elevation: 3,backgroundColor: ''}}>

 </Pressable>

  <Webview/> 
 


  </>
)
:
(
  null
)

} */}



            
            </>

    )
}
const styles = StyleSheet.create({
    dd : {
     
      
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
         position: "relative",
      
    },
    containerTop: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"row",
       width: width/1.1,
   
       paddingBottom: 10,
  
    marginBottom:20,
    },

    containermid: {
   
      justifyContent: 'center',
      alignItems:"center",
      flexDirection:"column",
       width: width/1.2,
   
       paddingBottom: 10,
  
       marginBottom:20
    
    },
    left: {
   width: width/1.1,

   paddingTop:30,
   justifyContent: 'center',
        alignItems:"flex-start",
        flexDirection:"column",
      
     

    },

    leftbottom :{

      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"row",     
      borderLeftWidth: 3,
      paddingLeft:10,
      borderLeftColor: "#FEA20B", 
    

    },

    star:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"row",  
    },

    
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: width/1.2,
      position: 'absolute',
      bottom: 15,
      fontSize:30,
      zIndex:1000,
      backgroundColor: '#339AF0',
     
    },
    text1: {
      fontSize: 20,
      lineHeight: 21,
     
      marginLeft:10,
      letterSpacing: 0.25,
      color: 'white',
      fontFamily: "font" ,
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
      height: "100%",
      borderRadius:50,
      alignItems: "center",
   justifyContent:"flex-end",

    },
    layer : {

        height: "25%",
        width: "100%",
 
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",

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

      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    container: {
      flex: 1,
     
      alignItems: "center",
      textAlign: "center",
  
     width: width,
    justifyContent:"center",
    },

    StarImage: {
      width: 20,
      height: 20,
      resizeMode: 'cover',
    },
   
  });
export default ViewItems


