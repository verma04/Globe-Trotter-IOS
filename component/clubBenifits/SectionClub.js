import React , {  useRef} from "react";
import RBSheet from "react-native-raw-bottom-sheet";
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
import { View ,  ImageBackground  ,Button,  StyleSheet  , Image, Pressable} from "react-native";

import { useTheme } from 'react-native-paper';
import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import HTML from 'react-native-render-html';
import Webview from "../screens/ViewItems/WebView";
var width2 = Dimensions.get('window').width/1;
var width = Dimensions.get('window').width/1.1 ;
import { LinearGradient } from 'expo-linear-gradient';

const windowHeight = Dimensions.get('window').height;
const SectionClub = ({route, navigation}) => {
  const refRBSheet = useRef();
    const { data } = route.params;

    const { colors } = useTheme();

    const tagsStyles = {
      h1: {
        color: '#6728C7',
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
        color: colors.icon,
      },
      iframe : {
       marginLeft: 'auto',
       marginRight: 'auto',
       marginTop: 20
      }
    }
    // const HOMEPAGE_QUERY = `
    // query GetOneAppJournal($slug: String) {
    //   getOneAppJournal(slug: $slug) {
    //       des
    //     des2
    //     des3
    //   }
    // }`
    
 


    // const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY, {
    //   variables: {
    //     slug: data.slug
    //   }
    // })
  
    // console.log(data1)
    return (
        <View  style={{flex:1 , position:"relative" ,backgroundColor:colors.borderColor}}>


<View style={{width:width2, justifyContent:'center', alignItems:"center" ,zIndex:1000 , position:"absolute" , bottom:10 }}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.button}>
            <Text style={{color:'white' ,     fontFamily:"font",  fontSize:20,}} >Enquire Here</Text>
          </TouchableOpacity>

       
          </View>
             <ScrollView>
    <View style={styles.containerStyle}>
    <View style={styles.center}>
   


      
         
   
   
        
               <View  key={data.id}   style={styles.box}>
      
      
      <ImageBackground
               style={styles.logo}
                resizeMode="cover"
         
               source={{
                   
                  uri: data.img}}
               >
           
               
               <View style={styles.layer}>     
               <View style={styles.text}>
             
               </View>
               </View>
            
               </ImageBackground>

               </View>
          

               <View style={styles.containermid} >

               <Text style={{ fontSize:17,   fontFamily:"font"}} >{data.name}</Text>
       

</View>


         

          <View style={styles.containermid} >

          <Text style={{fontSize:15,marginBottom:10 , fontFamily:"font"    }}>Know More</Text>
          <Text style={{ fontFamily:"BasisGrotesque"}} >
         {data.para}
           </Text>

          </View>
    


      <View style={styles.buttons}>
      
      </View>
   
   
   </View>
       </View>
       </ScrollView>

       <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={windowHeight/1.15}
        customStyles={{
          wrapper: {
           
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
  <Webview/>

      </RBSheet>
        </View>
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
      justifyContent: "space-evenly",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",

     width: "100%",
      marginBottom: 30
      
    },
    logo: {
      width: "100%",
      height: 170,

      alignItems: "center",
   justifyContent:"flex-end",
   backgroundColor:"#ffffff",
    },
    layer : {
  
        height: "25%",
        width: "100%",
  
        alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
  
    },
    text : {
        marginBottom:1,
        height: "60%",
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "flex-end",
      textAlign: "right",
     
    justifyContent:"flex-start",
  
    },
    stretch: {
      width: "100%",
      height: 210,
      resizeMode: 'stretch',
    },
    box: {
      borderRadius:50,
    marginTop:20,
   
   width: width,

      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
  
      alignItems: "center",
      textAlign: "center",
     
    justifyContent:"space-evenly",
  
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    container: {
      flex: 1,
    },
   
  
    containermid: {
      marginTop:20,
      justifyContent: 'center',
      alignItems:"flex-start",
      flexDirection:"column",
       width: width/1.02,
       
   
    
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
   
      width: width/1.1,
     
  

      backgroundColor: '#FEA20B',
     
    },
  });

export default SectionClub
