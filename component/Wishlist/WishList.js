import React, { useState , useEffect } from "react";
import { View, ImageBackground  ,Button, Text, StyleSheet  , Alert ,  Image, TouchableNativeFeedback, Pressable , RefreshControl} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';;
import { useQuery , useMutation } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity  } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width ;

import List from "./List";
import Header2 from "../shared/header2";
import Loading from "../screens/Loading";
import { useTheme } from "react-native-paper";
const Home = ({ navigation }) => {
  const { colors } = useTheme();

  const [state, setstate] = useState("");

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      changeColor('green');
      setRefreshing(false);
    }, 2000);
  };
  
  const HOMEPAGE_QUERY = ` query GetItems {
    getItems {
      id
      uniqID
      name
      img
      description
      createdAt
      slug
    }
  
  }`

  const GETWISH = `
query Query($id: ID) {
  getWishlsit(id: $id) {
    userid
    id
    img
    title
    category
    _id
  }
}`



const { loading, error, data:data4 } = useQuery(GETWISH, {
  variables: {
    id: state
  }
})

useEffect(() => {

  
   func()

   if( data4) {
    data4 && setWish(data4)
   }

  
 }, [state])
const func = async () => {
  const phoneNumber = await  AsyncStorage.getItem("userToken")

 await setstate(JSON.parse(phoneNumber).id)

  

 

}








  


  

  
  const errorMessage = (error) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }

  const set = () => {
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
    
       {loading ?
       (
        <Loading/>
       )
       :
       (
        <List list={ data4 && data4.getWishlsit}  state={state} loading={loading} />
       )

       }



    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     position:"relative"
    
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
  logo: {
    width: "100%",
    height: "100%",
    borderRadius:50,
    alignItems: "center",
 justifyContent:"space-between",
alignItems:"center",
  },
  layer2 : {

    height: "25%",
    width: "100%",

    alignItems: "center",
  textAlign: "center",
 
justifyContent:"center",
alignItems:"flex-end",

marginRight:30,
},
  layer : {

      height: "25%",
      width: "100%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
  },
  text : {
    borderWidth: 1,
    borderColor: "white",

    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    borderRadius:3,
    backgroundColor:"rgba(255, 255, 255, 0.80)",
      height: 30,
      width: "90%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",
alignItems:"center",
  },

  text2: {
    borderWidth: 1,
    borderColor: "white",
  
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    borderRadius:3,
    backgroundColor:"rgba(255, 255, 255, 0.80)",
      height: "60%",
      width: "60%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"space-evenly",
alignItems:"center",
flexDirection:"row",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
  },
  box: {
   
    borderRadius:10,
  marginTop:20,

 width: width/1.15,
 height: 170,

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
 }
  },
  container: {
    flex: 1,
  },
 
});
export default Home;