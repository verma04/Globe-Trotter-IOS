import React from 'react'

import Constants from 'expo-constants';
import { Dimensions } from "react-native";

import {
  useTheme,


} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text,   Image, StyleSheet , ImageBackground} from 'react-native'
import HTML from 'react-native-render-html';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width;
var deviceWidth = Dimensions.get('window').width;
var width2 = Dimensions.get('window').width/1;
import ActionBarImage2 from './ActionBarImage2';
export default function AmProfile({ route, navigation })  {
  const { colors } = useTheme();
  const tagsStyles = {
    h1: {
      color: '#6728C7',
      textAlign: 'center',
      marginBottom: 10
    },
    img: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20
    },
    p: {
      paddingTop:10,
      color:"#92A0A9" ,
      textAlign:"left",
      fontFamily:"Cushingstd" ,
    },
    iframe : {
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 20
    }
  }
    const { name , data } = route.params;

  
    return (
    

<View style={{flex:1, backgroundColor:colors.borderColor}}>

<ActionBarImage2  navigation={navigation}  title={data.name}/>
<ScrollView>
              <View style={styles.center}>
     
              <View style={styles.box }    >
 
 
    
           
      <View style={  styles.layer }>   
     
      <View style={ styles.image }>   

  
   

             <ImageBackground
          style={styles.image}
        resizeMode="cover"
       

      source={{
          
         uri: data.img}}
         
    >
    <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.image}
      >

      </LinearGradient>

    </ImageBackground>
           </View>

       
     <View style={styles.text  }>
      
         <Text style={styles.head} >{data.name}  </Text>
         <Text style={{  color:"white",fontFamily: "BasisGrotesque"}} >{data.designation}  </Text>
        </View>
        
      
        
      

  
     </View>
     {console.log(data.quote , " ")}
     {data.quote == null || " " ?
(
null
)
:
(
  <View style={  styles.textBot }  >

  <Text style={{paddingRight:10, color:"white",}} > </Text>
  <Text style={{   color:"#FEA20B", textAlign:"center" , fontStyle:'italic' } } >“{data.quote}”</Text>
  
  <Text style={{paddingLeft:10 , color:"white"}}>
  </Text>
     </View>
)


}
   
   
   {data.travel.length > 0 && 

<View  style={  styles.textBot2 }  >
<Text  style={{fontFamily:"Cushingstd", fontSize:18,   color:"white"}} >Travel Tip</Text>
{data.travel.map(set =>
<Text style={{ fontFamily: "BasisGrotesque",     color:"#92A0A9" , paddingTop:7}}>{set.tip}</Text>  
)

}
</View>


   }


  

   <View style={  styles.textBot2 }  >

<Text  style={styles.head} >Little About me</Text>

<HTML source={{ html:  data.description  }} 
      tagsStyles={tagsStyles}
      contentWidth={width2} />

   </View>
   

   <View style={  styles.textBot3 }  >
{data.content.map((set, key) =>
 <View  style={styles.left}   >
   <Text style={{fontWeight:"bold", fontSize:18 , fontFamily:"Cushingstd" , color:"white" , textAlign:"left"}} >{set.label}</Text>
   <Text style={{textAlign:"left" , fontFamily: "BasisGrotesque",  color:"#92A0A9" , paddingTop:7 }}>{set.description}</Text>
   </View>

)

}

   </View>
       </View>

       {data.recommendation.length === 0 ?
  (
null
  )
  :
  (

       <Text  style={{fontSize:22, fontFamily:"Cushingstd"  , color:colors.icon , marginTop:25}} > {`${data.name}'s`}  Recommendation</Text>
  )
}
       


<View  style={{width:deviceWidth , marginTop:20, height:280,  flexDirection:"column",  justifyContent:"center", alignItems:"center"}}>
      
 
      <View  style={{width:"100%" , height:"70%", flexDirection:"row",  justifyContent:"space-between", alignItems:"center"}}>
      <ScrollView
      style={{width:"100%", height:"100%"}}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
      >

{data.recommendation.map(data =>
  <TouchableOpacity onPress={()=> navigation.navigate('ViewItemAm', { data:data , title:data.name }) }  style={{width:200  , marginLeft:20, flexDirection:"column" , justifyContent:"space-evenly"}}>
<Image
     
        source={{uri: data.image}}
        style={{ width: "100%" ,   height:"80%" , resizeMode:"cover"  }}
      />
  
      <View  style={{  height:"20%" , width:"100%" , justifyContent:"center", alignItems:"center"  }} >
        <View style={{width:'90%'  , justifyContent:"center", alignItems:"center"  }} >   
        <Text style={{color:"#92A0A9" , fontSize:15 , textAlign:"center"  , marginTop:10 }}  >{data.name}</Text>
     
        </View>
      </View>

</TouchableOpacity>

)

}




      </ScrollView>
      </View>


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
        width: "100%",
      marginTop:20
    },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      color:"white",
    },
    center: {
      marginTop:20,
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "row",
      flexWrap: "wrap",

      
      
    },
  
    image: {
      width: width,
   
      height: 200,
     
      alignItems: "center",
      textAlign: "center",
      
    justifyContent:"center",
 alignItems:"center",
 position: 'relative',
 borderBottomLeftRadius:20
    },
    logo: {
        zIndex: 1,
       
      width: width,
      height: 200,
   position: 'absolute',
     
       
   
       
    
    },
    layer : {
    
      
        width: "80%",

        alignItems: "center",
      textAlign: "center",
      flexDirection:"column",
    justifyContent:"center",
 alignItems:"center",
    },
   
    text : {
      borderLeftWidth: 3,
      borderLeftColor: "#FEA20B",
     height: 40,
        width: width/1.1,
   marginTop:30,

        alignItems: "center",
      textAlign: "center",
     flexDirection:"column",
    justifyContent:"center",
 alignItems:"flex-start",
 paddingLeft:10,


    },
 
    head: {
     

       fontSize:20,
       fontWeight:"bold",
       fontFamily:"Cushingstd",
       color:"white",
       textAlign:"left"
    } ,

    box: {
    marginTop:10,
    width: width,


 
  borderRadius: 20,
      alignItems: "center",
      textAlign: "center",
     flexDirection:"column",
    justifyContent:'center',
 alignItems:'center',
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
 
    container: {
      flex: 1,
    },
    textBot: {

      
      alignItems: "center",
      textAlign: "center",
     flexDirection:"row",
    justifyContent:'space-evenly',
 alignItems:'center',
 width : "90%" ,
 marginBottom:50,
 marginTop:50,
padding: 20,
 backgroundColor:"#041825",
    },
    textBot2: {
      marginTop:20,
      alignItems: "flex-start",
      flexDirection:"column",
         justifyContent:'flex-start',
     
 width : "90%" ,

 marginBottom:20,
    },
    textBot3: {

      alignItems: "flex-start",
 flexDirection:"column",
    justifyContent:'flex-start',
 alignItems:'center',

 width : "90%" ,
 marginBottom:20,
    },

    left: {
      paddingRight:10,
      width: "100%",
 
    justifyContent:"center",
    display: 'flex',
    flexDirection:"column",
    alignItems:"flex-start",
    marginBottom:15,
   
    },
    right: {
      paddingLeft:10,
     
      width: "40%",
     
        }
   
  });
