import React from 'react'
import { useQuery } from 'graphql-hooks'
import { View, Text  ,  Image, StyleSheet , ImageBackground,} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Dimensions } from "react-native";
import Loading from './Loading';
import { LinearGradient } from 'expo-linear-gradient';
var width = Dimensions.get('window').width;
import { FontAwesome5 , AntDesign } from '@expo/vector-icons'; 
import {
  useTheme,


} from 'react-native-paper';
import ActionBarImage2 from '../shared/ActionBarImage2';
const List = ({route, navigation}) => {
  const { colors } = useTheme();

  const HOMEPAGE_QUERY = `  query GetItemBySubCategory($id: String) {
    getItemBySubCategory(id: $id) {
      id
      category
      subCategory
      img {
        img
      }
      title
      content {
        label
        description
      }
      status
      description
      uniqID
      items {
        id
        name
      }
      location
    }
  
  }`

  const QUERY = `query GetAllRecommendation {
    getAllRecommendation {
      name
      id
      user
      recommendation
    }
  }`




  const { loading, error, data:fin } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      id: route.params.name
    }
  })


  const {  data:data1  , loading:loading1} = useQuery(QUERY, {})
  if (loading) return   <Loading/>
  if (error) return  <Text>Something Bad Happened</Text>
  if (loading1) return   <Loading/>

    return (
      <View style={{flex:1, backgroundColor:colors.borderColor}} >

<ActionBarImage2 navigation={navigation} title={route.params.name} />
                 <ScrollView>
     
            <View style={styles.containerStyle}>
            <View style={styles.center}>
              {fin.getItemBySubCategory.sort((a, b) => a.title.localeCompare(b.title)).map(data =>

<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('ViewItem', { name: data.title , data:data , title:route.params.name , all:fin.getItemBySubCategory }) }  style={[styles.box ,{
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
        colors={['transparent', '#1F2322']}
        style={styles.logo}
      >
    
    {(data1.getAllRecommendation.find(set => set.name === data.title ))?
(
<>
  {(() => {
    if ((data1.getAllRecommendation.find(set => set.name === data.title ).recommendation) === "recommended") {
      return (
        <View  style={styles.recommended} >

        <FontAwesome5 name="user-check" size={10} style={{paddingRight:5}} color="#339AF0" />
          <Text  style={{color:"#339AF0" , textTransform:"capitalize" , fontFamily:"BasisGrotesqueBold"}} >{(data1.getAllRecommendation.find(set => set.name === data.title ).recommendation)} by {(data1.getAllRecommendation.find(set => set.name === data.title ).user)} </Text>
        </View>
      )
    } else if ((data1.getAllRecommendation.find(set => set.name === data.title ).recommendation) === "favourite") {
      return (
        <View  style={styles.recommended} >

  
        <AntDesign name="star" size={10} style={{paddingRight:5}} color="#FAB005" />
          <Text  style={{color:"#FAB005" , textTransform:"capitalize" , fontFamily:"BasisGrotesqueBold"}} > {(data1.getAllRecommendation.find(set => set.name === data.title ).user)}`s   {(data1.getAllRecommendation.find(set => set.name === data.title ).recommendation)} </Text>
        </View>
      )
    } else {
      return (
        <View  style={styles.recommended} >

        <FontAwesome5 name="user-check" size={10} style={{paddingRight:10}} color="#FD5B5B" />
          <Text  style={{color:"#FD5B5B" , textTransform:"capitalize" , fontFamily:"BasisGrotesqueBold"}} >{(data1.getAllRecommendation.find(set => set.name === data.title ).recommendation)} by {(data1.getAllRecommendation.find(set => set.name === data.title ).user)} </Text>
        </View>
      )
    }
  })()}
  </>
 
)
:
(
  null
)

}

<View style={styles.layer}>   




<View style={styles.text}>
  <Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:17,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}}>{data.title}  </Text>
  <Text  style={{fontFamily: "BasisGrotesque" , fontSize:15,  marginLeft:10 ,fontWeight:"700",  color:'#92A0A9' }}>{data.location} </Text>
</View>
</View>
</LinearGradient>
</ImageBackground>

</TouchableOpacity>
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
 height: 200,

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

export default List
