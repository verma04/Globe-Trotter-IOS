import React from "react";
import { View, ImageBackground  ,Button, StyleSheet  , Image, Pressable} from "react-native";
import {
  useTheme,


} from 'react-native-paper';

import Loading from "../screens/LoadingCalender";
import { useQuery } from 'graphql-hooks'
import { Dimensions } from "react-native";
import Toast from 'react-native-root-toast';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import moment from "moment";
import { Text } from "react-native-paper";
var width = Dimensions.get('window').width /2.4;
var fullwidth = Dimensions.get('window').width ;
const EventSub = ({ navigation , route }) => {
  const { name } = route.params;

  const { colors } = useTheme();
  const [state, setstate] = React.useState(moment().format("MMMM"))

  const HOMEPAGE_QUERY = `query GetCalenderItemsBySubCategory($id: String) {
    getCalenderItemsBySubCategory(id: $id) {
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
      category
    }
  }`
   

  console.log(name)
 
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY    ,{ 
     variables: {
    id: name
  }
})

console.log(data)

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
for (i = 0; i < 6; i++) {
  months.push(moment().add(i, 'months'));
}



  return (
<View style={{flex:1, backgroundColor:colors.borderColor}} >
    <ScrollView>

 <View style={styles.center}>
 <View  style={styles.date} > 
 {months.map(set => 
 <>
 {data.getCalenderItemsBySubCategory.filter(t => moment(t.date).format("MMMM") === moment(set).format("MMMM")).length === 0 ? 
 (
   null
 )
 : (
  <Pressable onPress={()=> setstate(moment(set).format("MMMM"))}  >

  <Text  style={  state  === moment(set).format("MMMM") ? {backgroundColor:"#fea20a" , fontFamily:"font", fontSize:15 , padding:16 , paddingLeft:20 , paddingRight:20,  borderRadius:10,color:"white" } : { fontSize:15 , padding:16 , fontFamily:"font", paddingLeft:20 , paddingRight:20,  borderRadius:10,color:colors.text } }   >{moment(set).format("MMMM").slice(0,3).toUpperCase()}</Text>
    
    
  {/* filter(t => moment(t.date).format("MMMM") === moment(set).format("MMMM") ) */}
     
  
       </Pressable>
 )

 }
  
     </>
   )

   }

<View   >
{data.getCalenderItemsBySubCategory.filter(t => moment(t.date).format("MMMM") === state).map(set => 
      


     
      <TouchableOpacity    key={set.id}  style={styles.box}>


<View style={styles.logo}>
        <View   style={styles.time} >
        <Text style={{fontWeight:"bold"}}>{moment(set.date).format(" DD  ")}</Text>
        <Text>{moment(set.date).format("dddd ").slice(0,3).toUpperCase()}</Text>
        </View>
      
      
      <View style={styles.layer}>   

<TouchableOpacity style={{ minHeight: 150,
      width: fullwidth * 0.8,

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",}}  onPress={() => navigation.navigate('CalenderEvent', { name: set.title ,  data:set  }) }>
        <Image
       
        source={{ uri: set.img[0].img }}
        style={styles.image}
      />  
    </TouchableOpacity>
      <View style={styles.text}>
      <Text style={{fontSize:20,  fontFamily:"font"}} >{set.title}</Text>

      <Text style={{marginBottom:10 , fontSize:18,  fontFamily:"font",}}>{set.location}</Text>

      <Text style={{fontWeight:"bold", fontSize:17,  fontFamily:"BasisGrotesque",}} >Eent Overview</Text>
      {set.content.map(t=> 
      <>
      {t.description.includes('Site') ?
      (
        <Text  onPress={() => Linking.openURL('http://google.com')} style={{ fontFamily:"BasisGrotesque" , marginTop:5, width:"110%" }} >{t.description}   </Text>
      )
      :
      (
        <Text style={{ fontFamily:"BasisGrotesque" , marginTop:5, width:"110%" }} >{t.description}</Text>
      )

      }
  
     </>
      )

      }
    
{/*       
      <View style={{marginTop:10  , width:"100%" , flexDirection:"row" , justifyContent:"space-between"  }}>
      
          <Text style={{ fontFamily:"BasisGrotesque"}} >Beginning</Text>
          <Text style={{color: "#0994CF" ,  fontFamily:"BasisGrotesque"}}>{moment(JSON.parse(set.starTime)).format('h:mm a')}</Text>
          </View>
      <View style={{width:"100%"  , display:"flex" , flexDirection:"row" , justifyContent:"space-between" ,  fontFamily:"BasisGrotesque" }}>
     
         <Text style={{ fontFamily:"BasisGrotesque",}}>End</Text>
         <Text style={{color: "#0994CF" ,  fontFamily:"BasisGrotesque",}} >{moment(JSON.parse(set.endTime)).format('h:mm a')}</Text>
         </View> */}
 
      </View>
      </View>
      </View>
     
      </TouchableOpacity>
    )



  




      }
  </View>

</View>






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
 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
   width: "100%",
    height: "100%"
    
  },
  date: {
   
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
   
    flexWrap: "wrap",
   width: "100%",
    marginBottom: 20
    
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
    width: "110%",
    minHeight: 150,
    borderRadius:50,
    alignItems: "center",
 justifyContent:"space-evenly",
    

 flexDirection: "row",
 marginBottom: 10,
 marginTop: 10,
  },
  layer : {

    minHeight: 150,
      width: "70%",

      alignItems: "center",
    textAlign: "center",
   
  justifyContent:"center",

  },
  text : {

    marginTop:10,
     
     
      width: "90%",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: "flex-start",
    textAlign: "center",
   
  justifyContent:"flex-start",

  },
  stretch: {
    width: "100%",
    height: 150,
    resizeMode: 'stretch',
  },
  box: {
    backgroundColor:"#0c1b2a",

 width: fullwidth,
 
 marginTop:50,

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
export default EventSub;