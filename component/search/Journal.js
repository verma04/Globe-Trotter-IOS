import React from "react";

import {

  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,

} from 'react-native-paper';
import { View ,  ImageBackground  ,Button,  StyleSheet  , Image} from "react-native";

import { useTheme } from 'react-native-paper';
import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import HTML from 'react-native-render-html';
var width2 = Dimensions.get('window').width;
var width = Dimensions.get('window').width/1.1 ;

import { Video, AVPlaybackStatus } from 'expo-av';
import { LinearGradient } from "expo-linear-gradient";
import ActionBarImage2 from "./ActionBarImage2";

const Section = ({route, navigation}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const { colors } = useTheme();

  const tagsStyles = {
    h1: {
      color: "white",
      textAlign: 'center',
      marginBottom: 10
    },
    img: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20
    },
    p: {
      fontFamily:"Roboto_400Regular",
      color:'#92A0A9'
    },
    iframe : {
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 20
    },
    h3: {
      color: "white",
    },
    h2: {
      color: "white",
    }
  }
  const HOMEPAGE_QUERY = `
  query getTitleJournal($slug: String) {
    getTitleJournal(slug: $slug) {
      blockImage1
      blockImage2
      blockImage3
      des
      des2
      des3

    }
  }`



  const { data , slug } = route.params;

  console.log(data)

  const title = data.title




  const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      slug:   data.title
    }
  })

  console.log(data1)

  


  if(loading) {
    return (
      <Loading/>
    )
  }


  return (
    <ScrollView>
<View style={{flex:1, backgroundColor:colors.borderColor}}>
<ActionBarImage2  navigation={navigation}  />
    <View style={styles.center}>

    <TouchableOpacity  key={data.id}   style={styles.box}>


<ImageBackground
         style={styles.logo}
          resizeMode="cover"

         source={{

            uri: data.img}}
         >

         </ImageBackground>
         <View style={styles.layer}>     
      <View style={styles.text}>
      <Text  style={{color:"white" , marginLeft:10 , fontSize:18 , fontFamily:"Cushingstd"}} >{data.title}</Text>
      <Text  style={{ fontSize:17,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >By-  {data.publisher}</Text>
      </View>
      <Text  style={{ fontSize:12,  marginLeft:10 ,  color:'#92A0A9' , position:"absolute", fontFamily:"BasisGrotesque" , bottom:10 , right:10 }} > {moment(data.createdAt).format('ll')}</Text>
      </View>
         </TouchableOpacity>





         <View style={styles.containermid}>

{/* <RenderHtml
      contentWidth={width2}
        html={data1.getConciergeDecription.description }
      tagsStyles={tagsStyles}


    /> */}

<HTML source={{ html:  data1.getTitleJournal.des  }}
      tagsStyles={tagsStyles}
      contentWidth={width2} />

    </View>


 

    <View style={styles.containermid}>

{/* <RenderHtml
      contentWidth={width2}
        html={data1.getConciergeDecription.description }
      tagsStyles={tagsStyles}


    /> */}

<HTML source={{ html:  data1.getTitleJournal.des1  }}
      tagsStyles={tagsStyles}
      contentWidth={width2} />

    </View>

<View style={styles.containermid}>

{/* <RenderHtml
      contentWidth={width2}
        html={data1.getConciergeDecription.description }
      tagsStyles={tagsStyles}


    /> */}




<HTML source={{ html:  data1.getTitleJournal.des2  }}
      tagsStyles={tagsStyles}
      contentWidth={width2} />

    </View>

    


    




  








   </View>
       </View>
       </ScrollView>
  )
}




const styles = StyleSheet.create({
  containerStyle : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',


  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
   width: width2,
    marginBottom: 30

  },
  logo: {
    width: width2,
    height: 170,
   
    alignItems: "center",
 justifyContent:"flex-end",
 backgroundColor:"#E8E8E8",
  },
  layer : {
    position: "relative",
       height: "33%",
       width: width,
 
       alignItems: "center",
     textAlign: "center",
    
   justifyContent:"center",

   },
   text : {
 
     borderLeftWidth: 3,
     borderLeftColor: "#FEA20B",
 
     
     shadowOpacity:  0.4,
     shadowRadius: 3,
     elevation: 14,
     

       width: "100%",
      borderRadius: 3,
      
   flexDirection:"column",
    
   justifyContent:"center",
 alignItems:"flex-start",
 
   },
  stretch: {
    width: "100%",
    height: 210,
    resizeMode: 'stretch',
  },
  box: {
    borderRadius:10,
  marginTop:20,

 width: width,
 height: 250,


    alignItems: "center",
    textAlign: "center",

  justifyContent:"space-evenly",

  },
  container: {
    flex: 1,
  },

  bottom: {
    width: "100%",
    height: 60,

  },
  containermid: {
    justifyContent: 'center',
    alignItems:"flex-start",
    flexDirection:"column",
     width: width/1,
     borderBottomWidth :1,
     paddingBottom: 10,
     borderBottomColor: '#DCDCDC',

  },
});

export default Section
