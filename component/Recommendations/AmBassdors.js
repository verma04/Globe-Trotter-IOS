import React, { useEffect } from 'react'
import { View, Text  ,  Image, StyleSheet , ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios"
import Loading from '../screens/LoadingAm'
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
var width = Dimensions.get('window').width;
import { useQuery } from 'graphql-hooks'
import WebVw from './WebvIew';
import {
  useTheme,


} from 'react-native-paper';
import RenderHtml from 'react-native-render-html';
import ActionBarImage2 from './ActionBarImage2';
export default function Main({navigation}) {
  const { colors } = useTheme();
  const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`
  };
  
 
   const [state, setstate] = React.useState('')  
  

   const HOMEPAGE_QUERY = `query GetAllMobAmbassadors {
    getAllMobAmbassadors {
      description
      id
      img
      name
      createdAt
      slug
      content {
        label
        description
      }
      travel {
        tip
      }
      designation
      quote
      recommendation {
        id
        type
        name
        image
        createdAt
        recommendation
        location
      }
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
       
       <View style={{flex:1, backgroundColor:colors.borderColor}} >

       <ActionBarImage2  navigation={navigation}  title="Ambassadors"/>

          <ScrollView>
              <View style={styles.center}>
       {data. getAllMobAmbassadors.map((set, key )=> 
<>

<TouchableOpacity  onPress={() =>  navigation.navigate('AmProfile', { name: set.name ,  data:set  }) }
        
        key={key}   style={[styles.box ,{
  borderColor:colors.borderColor
} ]}>

<ImageBackground
style={styles.logo}
resizeMode="cover"

source={{

  

uri: set.img}}
>
<LinearGradient
// Background Linear Gradient
colors={['transparent', '#000000']}
style={styles.logo}
>

<View style={styles.layer}>     
<View style={styles.text}>
<Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} >{set.name}</Text>
<Text style={{fontFamily: "BasisGrotesque" , fontSize:15,  marginLeft:10 ,fontWeight:"700",  color:'#92A0A9' }}>{set.designation}</Text>

</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>

      </>
       )

       }
        </View>
        </ScrollView>   
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
 
    alignItems: "center",
 justifyContent:"flex-end",
alignItems:"center",
  },
  layer : {

      height: "33%",
      width: "100%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
  },
  text : {

    borderLeftWidth: 3,
    borderLeftColor: "#FEA20B",

    
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 14,
    
      height: "60%",
      width: "90%",
     borderRadius: 3,
     
  flexDirection:"column",
   
  justifyContent:"center",
alignItems:"flex-start",

  },
  stretch: {
    width: 55,
    height: 200,
    resizeMode: 'stretch',
  },
  box: {

    borderWidth: 1,
    

  
  

 width: width,
 height:200,
    

    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
backgroundColor: '#fff',
   
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 14,
  },
  container: {
    flex: 1,
  },
 
});