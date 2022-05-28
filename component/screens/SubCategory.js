import React from 'react'
import { View, Text  ,  Image, StyleSheet , ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from "react-native";
var width = Dimensions.get('window').width;
import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import ActionBarImage2 from '../shared/ActionBarImage2';
const SubCategory = ({route, navigation}) => {

    const { name , sub } = route.params;
    const { colors } = useTheme();
    return (
//         <View style={styles.containerStyle}> 
//            <View style={styles.center}>
// {sub.map(data => 
//    <TouchableOpacity key={data.id} onPress={()=> navigation.navigate('List', { name: data.categoryName  }) }  style={styles.box}>


//    <Image
//          style={styles.logo}
//          source={{
             
//             uri: data.img}}
//        />
       
//    <View style={styles.layer}>     
//    <View style={styles.text}>
//      <Text  style={{fontWeight:"bold" , fontSize:20}}>{data.categoryName}</Text>

//    </View>
//    </View>
   
//    </TouchableOpacity>
// )


// }
        

//                </View>
//         </View>

<View style={{flex:1, backgroundColor:colors.borderColor}} >

  
<ActionBarImage2 navigation={navigation} title={name} />
<ScrollView>

<View style={styles.containerStyle}>
<View style={styles.center}>
{sub.sort((a, b) => a.categoryName.localeCompare(b.categoryName)).map(data =>

<TouchableOpacity key={data.id} onPress={()=> navigation.navigate('List', { name: data.categoryName  }) }  style={[styles.box ,{
      borderColor:colors.borderColor
    } ]}>


<ImageBackground
style={styles.logo}
resizeMode="cover"

source={{

uri:  data.img}}
>
<LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
<View style={styles.layer}>     
<View style={styles.text}>
<Text style={{color:'white', paddingLeft:10, fontWeight:'700' ,fontSize:18,  fontFamily:"Cushingstd"}}  >{data.categoryName}</Text>
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

export default SubCategory
