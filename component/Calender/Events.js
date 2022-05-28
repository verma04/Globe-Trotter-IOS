import React from "react";
import { View, ImageBackground  ,Button, StyleSheet  , Image, Pressable } from "react-native";
import { Linking } from 'react-native';

import Loading from "../screens/LoadingCalender";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import moment from "moment";
import { Text } from "react-native-paper";
import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import ActionBarImage2 from "./ActionBarImage2";
var width = Dimensions.get('window').width /2.4;
var height = Dimensions.get('window').height;
var fullwidth = Dimensions.get('window').width ;
const Home = ({ navigation , route }) => {
  const { data:data1 } = route.params;
  const { colors } = useTheme();

  const [state, setstate] = React.useState(moment().format("MMMM"))

  const HOMEPAGE_QUERY = ` query AllCalenderItems($id: String) {
    allCalenderItems(id: $id) {
      id
      img {
        img
      }
      title
      content {
        id
        label
        description
      }
      status
      description
      date
      event
      slug
      starTime
      endTime
      location
    }
  }`
   
  console.log(data1.id)
 
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY    ,{ 
     variables: {
    id: data1.slug
  }
})


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
 
    
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var today = new Date();
var months = []
 var i;
for (i = 0; i < 11; i++) {
  months.push(moment().add(i, 'months'));
}



  return (
        
<View style={{flex:1, backgroundColor:colors.borderColor}} >

<ActionBarImage2  navigation={navigation}  title={route.params.name}/>
 

 <View style={styles.center}>
 <View  style={styles.date} > 
 

   <View  style={{width:"100%" , height:"100%", flexDirection:"row",  justifyContent:"center", alignItems:"center"}}>
      <ScrollView
      style={{width:"100%", height:"100%"}}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
      >
{months.map(set => 
<>
< >
 {data.allCalenderItems.filter(t => moment(t.date).format("MMMM") === moment(set).format("MMMM")).length === 0 ? 
 
   null
 
 : (

  <Pressable  style={{width:100, height:180  , marginLeft:20, position:"relative" , }} onPress={()=> setstate(moment(set).format("MMMM"))}  >



  <Text  style={  state  === moment(set).format("MMMM") ? {fontSize:15 , padding:10 , paddingLeft:30, fontFamily:"font",  borderRadius:20,color:colors.text , borderWidth:1 , borderColor:"#FEA20B" , color:"#FEA20B" } : { fontSize:15 , paddingLeft:30, padding:10 , fontFamily:"font",   borderRadius:20,color:colors.text , borderWidth:1 , borderColor:"#50606B" } }   >{moment(set).format("MMMM").slice(0,3).toUpperCase()}</Text>
    
    
  {/* filter(t => moment(t.date).format("MMMM") === moment(set).format("MMMM") ) */}
     
  
       </Pressable>
     
 )

 }
 
  
     </>
</>

)

}




      </ScrollView>
      </View>
   



</View>


<View style={{height:"70%"  }}  >

  <ScrollView  style={{height:"100%", marginBottom:70}} >
{data.allCalenderItems.filter(t => moment(t.date).format("MMMM") === state).map(set => 
      


     



 

<TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CalenderEvent', { name: set.title ,  data:set  }) }>
      

       <ImageBackground
            style={styles.logo}
             resizeMode="cover"
         
            source={{
                
            uri: set.img[0].img}}
            >
                 <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >


<View style={styles.layer}>     
            <View style={styles.text}>
            <Text style={{ fontSize:18,  marginLeft:10 ,  color:'white' ,  fontFamily:"Cushingstd"}} >{set.title}</Text>

            </View>
            </View>
        </LinearGradient>
        </ImageBackground>
       

   
     
     
      </TouchableOpacity>
    )



  




      }
      </ScrollView>
  </View>



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
 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
   width: "100%",
   height: height,
   
    
  },
  date: {
    marginTop:20,
  
    height: height/10,
   
 
   width: "100%",

 
    
  },
  list: {
   
 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    flexDirection: "column",
  
    flexWrap: "wrap",
   width: "100%",
    marginBottom: 20
    
  },
  time  : {
      
    width: "10%",
     minHeight:150,  
    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"flex-start",
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
    
      height: "50%",
      width: "90%",
     borderRadius: 3,
     
  flexDirection:"column",
   
  justifyContent:"center",
alignItems:"flex-start",

  },
  stretch: {
    width: "100%",
    height: 150,
    resizeMode: 'stretch',
  },
  box: {
    backgroundColor:"#0c1b2a",
  

 width: fullwidth,
 
height: 200,

    alignItems: "center",
    textAlign: "center",
   
  justifyContent:"space-between",

    shadowOffset: {
      height: 1,
      width: 1
    }
  },

  image: {
    
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "white",
           shadowColor: '#000',
           shadowOffset: { width: 1, height: 1 },
           shadowOpacity:  1,
           shadowRadius: 3,
           elevation: 14,
 
    borderRadius:10,
    width: "90%",
    minHeight: 150,

  },

 
});
export default Home;