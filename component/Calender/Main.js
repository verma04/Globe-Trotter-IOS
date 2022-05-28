import React from "react";
import { View, ImageBackground  ,Button, Text, StyleSheet  , Image, ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Loading from "../screens/Loading";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { TouchableOpacity } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width;
import { useTheme } from 'react-native-paper';
import ActionBarImage2 from "./ActionBarImage2";
const Home = ({ navigation }) => {
  const { colors } = useTheme();
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
   
 
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)
  if (loading) return   <Loading/>
  console.log(data)

  
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
    
    <View style={{flex:1, backgroundColor:colors.borderColor}} >

<ActionBarImage2  navigation={navigation}  title={"Calendar"}/>
<ScrollView>

 <View style={styles.center}>

       {data.allCalender.map(set => 
      
<>
{set.category.length  === 0 ?
(

  <TouchableOpacity  key={set.id}   onPress={() =>
    navigation.navigate('Events', { name: set.title ,  data:set  }) } style={[styles.box ,{
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
  <Text  style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >{set.title}</Text>
  </View>
  </View>
  </LinearGradient>
  </ImageBackground>
  </TouchableOpacity>
)
:
(

  <TouchableOpacity  key={set.id}   onPress={() =>
    navigation.navigate('CalenderCategory', { name: set.title ,  category:set.category  }) } style={[styles.box ,{
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
  <Text  style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >{set.title}</Text>
  </View>
  </View>
  </LinearGradient>
  </ImageBackground>
  </TouchableOpacity>
)

}
     

            </>
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
    borderWidth: 1,
      

    backgroundColor:"#0c1b2a",

   width: width,
   height: 200,
      

      alignItems: "center",
      textAlign: "center",
     
    justifyContent:"center",
 alignItems:"center",

     
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