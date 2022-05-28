import React from "react";
import { View, ImageBackground  ,Button, Text, StyleSheet  , Image} from "react-native";

import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { TouchableOpacity } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width ;
import {
  useTheme,


} from 'react-native-paper';
import ActionBarImage2 from "./ActionBarImage2";
import { LinearGradient } from "expo-linear-gradient";
const CalenderCategory = ({ navigation ,  route}) => {
  
  const { colors } = useTheme();
  const { name , category } = route.params;

  const HOMEPAGE_QUERY = `query AllCalender {
    allCalender {
      id
      img
      title
      createdAt
      slug
      category {
        id
        img
        category
      }
    }
  }`
   
 
  
  
  

  return (
    
<View style={{flex:1, backgroundColor:colors.borderColor}} >

<ActionBarImage2  navigation={navigation}  title={route.params.name}/>
 <View style={styles.center}>

       {category.map(set => 
      


     
            <TouchableOpacity  key={set.id}   onPress={() =>
              navigation.navigate('EventSub', { name: set.category ,  data:set  }) } style={[styles.box ,{
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
            <Text style={{color:'white', paddingLeft:10, fontSize:18,  fontWeight:'700', textTransform:'uppercase', fontFamily:"BasisGrotesqueBold"}} >{set.category}</Text>
            </View>
            </View>
            </LinearGradient>
            </ImageBackground>
            </TouchableOpacity>
          )
      
  

        
      
      


            }



</View>
    </View>
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
   width: "100%",
    marginBottom: 150
    
  },
  logo: {
    width: "100%", 
    height: "100%",

    alignItems: "center",
 justifyContent:"flex-end",

  },
  layer : {

    height: "40%",
    width: "100%",
marginBottom:20,
    alignItems: "center",
  textAlign: "center",
 
justifyContent:"flex-end",

},
  text : {

    borderLeftWidth: 3,
    borderLeftColor: "#FEA20B",

    
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 14,
    
      height: "40%",
      width: "90%",
    
     
  flexDirection:"column",
   
  justifyContent:"center",
alignItems:"flex-start",

  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
  },
  box: {
    backgroundColor:"#0c1b2a",
    borderWidth: 1,
    borderColor: "white",
           shadowColor: '#000',
           shadowOffset: { width: 1, height: 1 },
           shadowOpacity:  1,
           shadowRadius: 3,
           elevation: 14,
 
    borderRadius: 10,

  marginTop:20,

 width: width,
 height: 200,
 

    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"space-between",

   
  },
  container: {
    flex: 1,
  },
 
});
export default CalenderCategory ;