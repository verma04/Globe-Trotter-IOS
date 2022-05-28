import React from 'react'
import { View, Image, StyleSheet , Pressable, ImageBackground, Button,} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ImageView from 'react-native-image-view';

import Loading from '../Loading';
import { Dimensions } from "react-native";
import { useQuery } from 'graphql-hooks'
import {
  Text,


} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import { AntDesign } from '@expo/vector-icons'; 
var width = Dimensions.get('window').width;
var width2 = Dimensions.get('window').width/1.1;
import HTML from 'react-native-render-html';
import {
  useTheme,


} from 'react-native-paper';

const ViewItems = ({route}) => {
  const { colors } = useTheme();
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
    }
  }
`
  const {data} = route.params

  const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      id: data.id
    }
  })



    const [visible, setIsVisible] = React.useState(false);
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
         color: colors.brandColor,
         textAlign: 'center',
    
       },
       h2: {
        color: colors.brandColor,
       },
       h3: {
        color: colors.brandColor,
       },
       img: {
         marginLeft: 'auto',
         marginRight: 'auto',
    
       },
       p: {
         fontFamily:"Roboto_400Regular",
         color: colors.icon,
       },
       iframe : {
        marginLeft: 'auto',
        marginRight: 'auto',
    
       },

       ul: {
        listStyle: "none",
     
      },
      br: {
display: "none",
      },
       li: {

        lineHeight:25,
        color: colors.icon,
      
        paddingLeft: '40',
        

        
       },

       





     
      
     
    }   
      
   
      
   

     if(loading) {
       return(
        <Loading/>
       )
     }
     return (

      <View style={styles.containerStyle}>
     

      <Pressable style={[styles.button ,{backgroundColor:colors.brandColor}]} >
         <Text style={styles.text1}>Enquire here</Text>
       </Pressable>
   
             
               <ScrollView    showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>

   
   
               <View style={styles.container}>
         
               <View style={styles.containerTop}>
         
               <View style={styles.left}>
         <View >
   <Text  style={{fontSize:22  , textTransform:"capitalize" ,     fontFamily: "font" ,   }} >{data1.getConciergeDecription.title}</Text>
   
         </View>
               
   
         {/* <View style={styles.leftbottom}>
         <TouchableOpacity
         style={styles.star}
            >
             <Image
               style={styles.StarImage}
               source={
                    { uri: Star }
                
               }
             />
              <Image
               style={styles.StarImage}
               source={
                    { uri: Star }
                
               }
             />
   
   <Image
               style={styles.StarImage}
               source={
                    { uri: Star }
                
               }
             />
              <Image
               style={styles.StarImage}
               source={
                    { uri: Star }
                
               }
             />
           </TouchableOpacity>
   
           <Text style={{marginLeft:10}}  >5/5</Text>
   
   <Text style={{marginLeft:30}} >235 views</Text>
           </View> */}
   
         
       
         </View>
   
   
         <View>
         
         <TouchableOpacity >
            
            {visible ? 
            (
             <Ionicons onPress={()=>setIsVisible(false)} name="ios-heart-sharp" size={24} color="red" />
            )
            : (
             <AntDesign onPress={()=> setIsVisible(true)} name="hearto" size={24} color="black" />
            )
              
            }
        
   
      
       
           </TouchableOpacity>
   
   
         </View>
   
   
         </View>
         {data1.getConciergeDecription.content.length === 0 ?
  (
 null
  )
  : (
    <View style={styles.containermid}>

          

    {data1.getConciergeDecription.content.map(content => 
    
    <View style={{margin:5 , justifyContent:"flex-start" ,   alignItems:"center",  width:width/1.05 , flexDirection:"row"}}  >  
     <Text style={{fontWeight:'bold' , marginRight:20  ,  fontFamily:"BasisGrotesque", width:"30%"  , textTransform:"capitalize"}}  >{content.label}</Text>
     
     <Text style={{ paddingLeft:20  , width:"70%" ,  fontFamily:"BasisGrotesque", }}  >{content.description} </Text>
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
   
   
   
   
   
   
                 </View>
   
                 
             
               </ScrollView>
               
               
               </View>

    )
}
const styles = StyleSheet.create({
    containerStyle : {
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
       borderBottomWidth :1,
       paddingBottom: 10,
       borderBottomColor: '#DCDCDC',
     height: 100,
    },

    containermid: {
      justifyContent: 'center',
      alignItems:"flex-start",
      flexDirection:"column",
       width: width/1.1,
       borderBottomWidth :1,
       paddingBottom: 10,
       borderBottomColor: '#DCDCDC',
    
    },
    left: {
   width: "90%",
   height: "100%",
   justifyContent: 'center',
        alignItems:"flex-start",
        flexDirection:"column"

    },

    leftbottom :{

      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"row",      

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
     
     
    },
    text1: {
      fontSize: 20,
      lineHeight: 21,
     
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

      marginBottom: 150
      
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
      marginBottom:100,
     
    },

    StarImage: {
      width: 20,
      height: 20,
      resizeMode: 'cover',
    },
   
  });
export default ViewItems



