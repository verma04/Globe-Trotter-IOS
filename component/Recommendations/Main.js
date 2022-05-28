import React from 'react'
import {
  useTheme,
  

} from 'react-native-paper';
import { View , Text , Image, StyleSheet , ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from "react-native";
var width = Dimensions.get('window').width;
export default function Main({navigation}) {
  const { colors } = useTheme();
  return (

    <View style={{flex:1, backgroundColor:colors.borderColor}} >
           <View style={styles.center}>

           <TouchableOpacity onPress={()=> navigation.navigate('Ambasssdors')}  style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}>


           <ImageBackground
      style={styles.logo}
      imageStyle={{ borderRadius: 10}}
      resizeMode="cover"
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220120-ei00y-bulk'}}
    >
    
<View style={styles.layer}>     
<View style={styles.text}>
  <Text  style={{color:'white', paddingLeft:10, fontSize:18, textTransform:'uppercase', fontFamily:"BasisGrotesqueBold"}}>Ambassador Recommendations</Text>

</View>
</View>
</ImageBackground>

</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Costomer')}  style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}>


<ImageBackground
      style={styles.logo}
      imageStyle={{ borderRadius: 10}}
      resizeMode="cover"
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220120-zqp4g-bulk'}}
    >
    
<View style={styles.layer}>     
<View style={styles.text}>
<Text  style={{color:'white', paddingLeft:10, fontSize:18, textTransform:'uppercase', fontFamily:"BasisGrotesqueBold"}}>Customer Recommendations</Text>

</View>
</View>
</ImageBackground>

</TouchableOpacity>
               </View>
        </View>
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
    position: 'relative',

    alignItems: "center",
 justifyContent:"flex-end",
alignItems:"center",
  },
  recommended: {
   position: 'absolute',
   top: 10,
   left: 10,
   padding: 5,
   borderTopLeftRadius:10,
   borderBottomRightRadius:10,
   backgroundColor:"rgba(255, 255, 255, 0.80)",
   alignItems: "center",
   justifyContent:"center",
 alignItems:"center",
 flexDirection:"row"
  },
  layer : {

      height: "25%",
      width: "100%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
paddingBottom:5,
  },
  text : {
    borderWidth: 1,
    borderColor: "white",

    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    borderRadius:3,

      height: "100%",
      width: "90%",
      marginBottom:10,
      borderRadius: 3,
      alignItems: "center",
      textAlign: "center",
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
    backgroundColor: '#fff'
 ,
 borderWidth: 1,
 borderColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  1,
        shadowRadius: 3,
        elevation: 14,
 shadowColor: "#000000",
 shadowOpacity: 0.8,
 shadowRadius: 2,
 shadowOffset: {
   height: 1,
   width: 1
 },
    borderRadius:10,
  marginTop:20,

 width: width/1.1,
 height: 180,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,

    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  container: {
    flex: 1,
  },
 
});