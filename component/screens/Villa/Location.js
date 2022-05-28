import React from "react";
import { View,   Image, Text,StyleSheet, ImageBackground} from 'react-native'
import Loading from "../LoadingRound";
import { useQuery } from 'graphql-hooks'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from "react-native"
import ActionBarImage2 from "../../shared/ActionBarImage2";
var width = Dimensions.get('window').width ;
const Location = ({route, navigation}) => {

  const { colors } = useTheme();
  const HOMEPAGE_QUERY = `query GetCategory($getCategoryId: String) {
    getCategory(id: $getCategoryId) {
      category {
        id
        items
        category
        img
        createdAt
        subCategory {
          id
          categoryName
          img
        }
      }
  
    }
  }`
   
 
  const { loading, error, data:data1 } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      getCategoryId: route.params.data.uniqID
    }
  })
  if (loading) return   <Loading/>
  if (error) return  <Text>Something Bad Happened</Text>


  const { data } = route.params;
  return (



    <View style={{flex:1, backgroundColor:colors.borderColor}} >
         <ActionBarImage2 navigation={navigation} title="Location" />
<ScrollView>
       <View style={styles.center}>
{data1.getCategory.category.sort((a, b) => a.category.localeCompare(b.category)).map(data => 
<TouchableOpacity key={data.id}  onPress={()=> navigation.navigate('VillaList', { name: data.category   }) }  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>
   <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
<ImageBackground
        style={styles.logo}
        resizeMode="cover"
        
        source={{
            
           uri: data.img}}
      >
      
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
 <View style={styles.layer}>     
<View style={styles.text}>
    <Text style={{ paddingLeft:10, fontWeight:'700', color:'white', fontSize:18,    fontFamily:"Cushingstd"}} >{data.category}</Text>
</View>
</View>
</LinearGradient>

</ImageBackground>
</LinearGradient>


</TouchableOpacity>
)


}
    

           </View>
           </ScrollView>
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
    justifyContent: "space-around",
    alignItems: "flex-start",
    textAlign: "center",
    width: Dimensions.get('window').width,
    flexWrap: "wrap",
  flexDirection:"row",
  
    marginBottom: 50

    
  },
  logo: {
    width: width,
    height: "100%",

    alignItems: "center",
 justifyContent:"flex-end",

  },
  
  layer : {

      height: "30%",
      width: "100%",

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
   
  


 width: width,
 height: 180,

 backgroundColor:"#0c1b2a",
 borderWidth: 1,

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
 }
  },
  container: {
    flex: 1,
  },
 
});
export default Location;