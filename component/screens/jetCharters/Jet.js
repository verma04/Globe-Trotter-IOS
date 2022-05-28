import React from 'react'
import { useQuery } from 'graphql-hooks'
import { View, Text  ,  Image, StyleSheet , ImageBackground,} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Dimensions } from "react-native";
import Loading from '../Loading';
import {
  useTheme,


} from 'react-native-paper';
var width = Dimensions.get('window').width;
import { FontAwesome5 , AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import ActionBarImage2 from '../../shared/ActionBarImage2';
const BospokeList = ({route, navigation}) => {
  const { colors } = useTheme();

  const HOMEPAGE_QUERY = `  query GetConciergeItems($id: ID) {
    getConciergeItems(id: $id) {
      id
      img {
        img
      }
      title
      location
    }
  }`


console.log(route.params.slug)
  const { loading, error, data:fin } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      id: route.params.slug
    }
  })



  if (loading) return   <Loading/>
  if (error) return  <Text>Something Bad Happened</Text>
  
 
    return (
      <View style={{flex:1, backgroundColor:colors.borderColor}} >

<ActionBarImage2 navigation={navigation} title="Jet Charters" />
                 <ScrollView>
     
            <View style={styles.containerStyle}>
            <View style={styles.center}>
             
         

         {fin.getConciergeItems.filter(t => t.title==="Light").map(data =>
<>


<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('ViewItem', { name: data.title , data:data  }) }  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
      style={styles.logo}
      resizeMode="cover"
     
      source={{
          
         uri: data.img[0].img}}
    >

      
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >

      
    
    


<View style={styles.layer}>   




<View style={styles.text}>
   <Text style={{paddingLeft:10 , fontFamily:"Cushingstd" , fontSize:18,  fontWeight:'bold' , color:"white"  }}>{data.title}  </Text>
  <Text style={{paddingLeft:10, fontWeight:'700', color:'#92A0A9',   fontFamily:"BasisGrotesque"}}>{data.location} </Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>







</>
              )

              }


{fin.getConciergeItems.filter(t => t.title==="Mid Size").map(data =>
<>


<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('ViewItem', { name: data.title , data:data  }) }  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
      style={styles.logo}
      resizeMode="cover"
     
      source={{
          
         uri: data.img[0].img}}
    >

      
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >

      
    
    
  

<View style={styles.layer}>   




<View style={styles.text}>
   <Text style={{paddingLeft:10 , fontFamily: "BasisGrotesqueBold" , fontSize:18,  fontWeight:'bold' , color:"white"  }}>{data.title}  </Text>
  <Text style={{paddingLeft:10, fontWeight:'700', color:'#92A0A9',   fontFamily:"BasisGrotesqueBold"}}>{data.location} </Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>







</>
              )

              }

{fin.getConciergeItems.filter(t => t.title==="Long Range").map(data =>
<>


<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('ViewItem', { name: data.title , data:data  }) }  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
      style={styles.logo}
      resizeMode="cover"
     
      source={{
          
         uri: data.img[0].img}}
    >
  <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      

      
    
    


<View style={styles.layer}>   




<View style={styles.text}>
   <Text style={{paddingLeft:10 , fontFamily: "BasisGrotesqueBold" , fontSize:18,  fontWeight:'bold' , color:"white"  }}>{data.title}  </Text>
  <Text style={{paddingLeft:10, fontWeight:'700', color:'#92A0A9',   fontFamily:"BasisGrotesqueBold"}}>{data.location} </Text>
</View>
</View>
</LinearGradient>

</ImageBackground>
</TouchableOpacity>







</>
              )

              }
              {fin.getConciergeItems.filter(t => t.title==="Ultra Long Range").map(data =>
<>


<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('ViewItem', { name: data.title , data:data  }) }  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
      style={styles.logo}
      resizeMode="cover"
     
      source={{
          
         uri: data.img[0].img}}
    >

      
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >

      
    
    


<View style={styles.layer}>   




<View style={styles.text}>
   <Text style={{paddingLeft:10 , fontFamily: "BasisGrotesqueBold" , fontSize:18,  fontWeight:'bold' , color:"white"  }}>{data.title}  </Text>
  <Text style={{paddingLeft:10, fontWeight:'700', color:'#92A0A9',   fontFamily:"BasisGrotesqueBold"}}>{data.location} </Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>







</>
              )

              }
              {fin.getConciergeItems.filter(t => t.title==="Head of State").map(data =>
<>


<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('ViewItem', { name: data.title , data:data  }) }  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
      style={styles.logo}
      resizeMode="cover"
     
      source={{
          
         uri: data.img[0].img}}
    >

      
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >

      
    
    


<View style={styles.layer}>   




<View style={styles.text}>
  <Text style={{paddingLeft:10 , fontFamily: "BasisGrotesqueBold" , fontSize:18,  fontWeight:'bold' , color:"white"  }}>{data.title}  </Text>
  <Text style={{paddingLeft:10, fontWeight:'700', color:'#92A0A9',   fontFamily:"BasisGrotesqueBold"}}>{data.location} </Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>







</>
              )

              }
       
 

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
export default BospokeList
