import React, { useEffect } from 'react'
import { View, Text  ,  Image, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';
import axios from "axios"
import Loading from '../screens/Loading'
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
var width = Dimensions.get('window').width;
import { useQuery } from 'graphql-hooks'
import WebVw from './WebvIew';
import RenderHtml from 'react-native-render-html';
export default function Main({navigation}) {
  const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`
  };
  
 
   const [state, setstate] = React.useState('')  
  

   const HOMEPAGE_QUERY = `query GetItems {
    allCustomerRecommendations {
      id
      image
      itemId
      location
      name
      quote
      createdAt
    }
  }`
   

//    const fetch = async (isMounted) => {
//     const data =  {
//       query: `
//       query GetAllMobAmbassadors {
//         getAllMobAmbassadors {
//           img
//           description
//           name
//          designation
//         }
//       }
//         `
//     }
 
//   try {
//     const result = await axios.post(`https://1fc2-2405-201-7003-809d-cbb-2d4f-6e2b-542.ngrok.io/graphql/`, data);
//     if (isMounted)  setstate(result.data.data)
//   } catch (error) {
//     console.log(error)
    
//   }
//    }
   
//    useEffect(() => {
//     let isMounted = true;     
//    fetch(isMounted)
//    return () => { isMounted = false }
 
//    }, [])

// if(state === ''){
//   return (
//     <Loading/>
//   )
// }

const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
  variables: {
    limit: 10
  }
})
if (loading) return   <Loading/>
if (error) return  <Text>Something Bad Happened</Text>
  
 
  
    return (
   
        <>
       
              <View style={styles.containerStyle}>
              <View style={styles.center}>
       {data.allCustomerRecommendations.map((set, key )=> 
      <TouchableOpacity
       
      onPress={() =>
        navigation.navigate('AmProfile', { name: set.name ,  data:set  })
      }
        
      key={key}  style={ key % 2 === 0 ? styles.box : styles.box1 }    >


   
          
     <View style={  key % 2 === 0 ? styles.layer : styles.layer1 }>   
     <View style={ styles.image }>   
     <Image
          style={  key % 2 === 0 ? styles.logo : styles.logo1 }
            source={{
                
               uri: set.image}}
          />  
          </View>
    <View style={  key % 2 === 0 ? styles.text : styles.text1 }>
        <Text style={styles.head} >{set.name}  </Text>
        <Text>{set.location}  </Text>
        <Text>{set.quote}  </Text>
     
       
     
    </View>
 
    </View>
    
      </TouchableOpacity>

       )

       }
        </View>
               
  </View>


            
            </>
    )
}


const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      
    },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      color: "black",
    },
    center: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "row",
      flexWrap: "wrap",

      marginBottom: 100
      
    },
    blockText1:{

    },
    image: {
      width: "40%",
      height: "100%",
      backgroundColor:"#e2f2ff",
      alignItems: "center",
      textAlign: "center",
      flexDirection:"row-reverse",
    justifyContent:"center",
 alignItems:"center",
 position: 'relative',
 borderBottomLeftRadius:20
    },
    logo: {
        zIndex: 1,
       position: 'absolute',
      width: "100%",
      height: "100%",
      top: -8,
       left: 20,
      borderWidth: 2,
      borderColor: "thistle",
       borderTopRightRadius:20,
       borderBottomLeftRadius:20
    
    },

    logo1: {
        zIndex: 1,
        position: 'absolute',
       width: "100%",
       height: "100%",
       top: -8,
       right: 20,
        borderWidth: 2,
        borderColor: "thistle",
         borderTopLeftRadius:20,
         borderBottomRightRadius:20
      
      },
    layer : {
      backgroundColor:"#e2f2ff",
        height: "100%",
        width: "70%",

        alignItems: "center",
      textAlign: "center",
      flexDirection:"row",
    justifyContent:"center",
 alignItems:"center",
    },
    layer1 : {
      backgroundColor:"#e2f2ff",
        height: "100%",
        width: "70%",

        alignItems: "center",
      textAlign: "center",
      flexDirection:"row-reverse",
    justifyContent:"center",
 alignItems:"center",
    },
    text : {
     
        height: "60%",
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
      textAlign: "center",
     flexDirection:"column",
    justifyContent:"center",
 alignItems:"flex-start",
 marginLeft:20
    },
    text1 : {
     
      height: "60%",
      width: "90%",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: "center",
    textAlign: "center",
   flexDirection:"column",
  justifyContent:"center",
alignItems:"flex-end",
marginRight:20
  },
    head: {
       fontSize:20,
       fontWeight:"900",
    } ,

    box: {
    marginTop:20,
    width: width,
   height: 120,
      paddingTop:10,
      shadowOpacity: 0.8,
      shadowRadius: 2,
  borderRadius: 20,
      alignItems: "center",
      textAlign: "center",
     flexDirection:"column",
    justifyContent:'flex-start',
 alignItems:'flex-end',
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    box1: {
      marginTop:20,
      width: width,
     height: 120,
     paddingTop:10,
        shadowOpacity: 0.8,
        shadowRadius: 2,
    borderRadius: 20,
        alignItems: "center",
        textAlign: "center",
       flexDirection:"column",
      justifyContent:'flex-start',
   alignItems:'flex-start',
        shadowOffset: {
          height: 1,
          width: 1
        }
      },
    container: {
      flex: 1,
    },
   
  });