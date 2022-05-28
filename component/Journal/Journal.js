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
import { LinearGradient } from "expo-linear-gradient";
import ActionBarImage2 from "./ActionBarImage2";
var width = Dimensions.get('window').width ;
var height = Dimensions.get('window').height ;
const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const HOMEPAGE_QUERY = `query Query {
    getJournal {
      id
      createdAt
      description
      headline
      img
      publisher
      url1
      url2
      url3
      blockImage1
      blockImage2
      blockImage3
      des
      des2
      des3
      status
      slug
    }
  }`
   
 
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)
  if (loading) return   <Loading/>

 
  
  const errorMessage = (error) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }

  const set = (error) => {
    let toast =  Toast.show(errorMessage(error), {
      duration: Toast.durations.LONG,
    });
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 2500);
  }

  if(error) {
    
    return (
      <>
    
      {
    set(error)
  
  }
  </>
  )
  }
    
  
  

  return (
    
    <ScrollView>
    <View style={{flex:1, backgroundColor:colors.borderColor , height:height}}>


<ActionBarImage2  navigation={navigation}  title={"Journal"}/>
 <View style={styles.center}>

       {data.getJournal.map(set => 
      


     
            <TouchableOpacity  key={set.id}   onPress={()=> navigation.navigate('Section', { name:  set.headline , data:set  }) } style={styles.box}>
   
   
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
            <Text  style={{color:"white" , marginLeft:10 , fontSize:18 , fontFamily:"Cushingstd"}} >{set.headline}</Text>
            <Text  style={{ fontSize:15,  marginLeft:10 ,  color:'#92A0A9' , fontFamily:"BasisGrotesque" }} >By-  {set.publisher}</Text>
            </View>
            </View>
            <Text  style={{ fontSize:12,  marginLeft:10 ,  color:'#92A0A9' , position:"absolute", fontFamily:"BasisGrotesque" , bottom:10 , right:10 }} > {moment(set.createdAt).format('ll')}</Text>
        
            </LinearGradient>
            </ImageBackground>

            </TouchableOpacity>
          )
      
  

        
      
      


            }



</View>
    </View>
    </ScrollView>
  );
};

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
   position: "relative",
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
    
      height: "80%",
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
 height: 180,
    

    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
backgroundColor:"#0c1b2a",
   
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
export default Home;