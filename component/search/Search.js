import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View,  StyleSheet, ImageBackground, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
var width = Dimensions.get('window').width;
import { useMutation, useQuery } from 'graphql-hooks'
var height = Dimensions.get('window').height;
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme , Text } from 'react-native-paper';
import { Fontisto , Entypo , FontAwesome } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import Loading from '../screens/Loading';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import List from './List';
import { MaterialIcons ,MaterialCommunityIcons } from '@expo/vector-icons'; 
const SwitchComponent = ({navigation}) => {
  const { colors } = useTheme();
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");

  const VIEW = `
  mutation Search($search: String) {
    search(search: $search) {
      category
      des
    }
  }
`

const REMOVEWISH = `
mutation Mutation($userid: ID, $title: String) {
  removeWishlist(userid: $userid, title: $title) {
    userid
    title
  }
}`





  const data = [ 
    
    "all" , "concierge" , "journal" , "calender" , "offers"]


    const [searchItems , {data:data1, error, loading}] = useMutation(VIEW)
    const updateSearch = (search) => {
      setSearch(search);
     
      
      searchItems({variables:{search:search}})
    };


    

   
  return (


    <View style={{flex:1, backgroundColor:colors.borderColor , width:width}} >


<MaterialCommunityIcons style={{marginLeft:10}} name="keyboard-backspace" size={30} color="white" onPress={() => navigation.navigate("Home")} />
      <View  style={{ 
        marginTop:Platform.OS === "android" ? 30 : 0,
        justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row' ,   
  }} >
      
      
      <View
       style={{ justifyContent:'center',
       alignItems:'center',
       flexDirection:'row' ,   
       width:'90%' ,
     }}
      >
      
      <SearchBar
       containerStyle={{backgroundColor:colors.borderColor , width:'90%' }}
       inputStyle={{backgroundColor: "#041825" , color:"white"}}
       inputContainerStyle={{backgroundColor: "#041825"}}
leftIconContainerStyle={{backgroundColor: "#041825" , color:"red"}}
       reverseColor="white"
       platform={Platform.OS}
 placeholderTextColor={"white"}
 searchIcon={{color:"#FEA20B"}}
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
      />

</View>
</View>


      {search === '' ?

      (
        <View style={{flex:1, backgroundColor:colors.borderColor}} >
    
            
            <ScrollView>
           
          
           
            <View style={styles.containerStyle}>

            <View  style={styles.list} >

            <ScrollView
      style={{width:"100%", height:"100%"}}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
      >
{data.map(list => 
  <TouchableRipple onPress={()=>setActive(list)} style={active === list ? styles.activeTop  : { justifyContent:"center",
  alignItems:"center",
  marginLeft:10,
  borderRadius:20,
  width: 110,
  color: "#50606B",
    borderWidth:1,
    padding: 7,
    borderRadius:20,
    borderColor:"#50606B"
  }  }>

<Text   style={active === list ? styles.active  : styles.non  } >
  {list}
</Text>
</TouchableRipple>
)

}




      </ScrollView>



</View>

            <View style={styles.center}
             animation="fadeInUpBig"
             >
            <TouchableOpacity onPress={()=> navigation.navigate('Concierge')}  style={[styles.box ,{
              borderColor:colors.borderColor  ,height:200,
            } ]}>


  <ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
        source={{
            
           uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220217-s6vsr-bulk'}}
      >
           <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
      
 <View style={styles.layer}>     
<View style={styles.text}>
<Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} >Travel Concierge</Text>
</View>

</View>
</LinearGradient>

</ImageBackground>
  </TouchableOpacity>
 
  <TouchableOpacity onPress={()=> navigation.navigate('Amabassdors')}  style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>
       

  <ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220217-9mmu6-bulk'}}
    >

<LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
<View style={styles.layer}>     
<View style={styles.text}>
      <Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} >Ambassadors</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Club')} style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

<ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220217-rz3or-bulk'}}
    >
         <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
<View style={styles.layer}>     
<View style={styles.text}>
      <Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} >Club Benefits</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Calender')} style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>

 <ImageBackground
        style={styles.logo}
        resizeMode="cover"
       
      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220217-lx5gb-bulk'}}
    >
       <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#000000']}
        style={styles.logo}
      >
<View style={styles.layer}>     
<View style={styles.text}>
      <Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} > Event Calendars</Text>
</View>
</View>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity   onPress={()=> navigation.navigate('Journal')} style={[styles.box ,{
              borderColor:colors.borderColor
            } ]}>


<ImageBackground
        style={styles.logo}
        resizeMode="cover"
       

      source={{
          
         uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220217-ne30x-bulk'}}
    >

<View style={styles.layer}>     
<View style={styles.text}>
      <Text style={{fontFamily: "BasisGrotesqueBold" , fontSize:18,  marginLeft:10 ,fontWeight:"700",  color:'white' ,  fontFamily:"Cushingstd"}} > The Journal</Text>
</View>
</View>
</ImageBackground>
</TouchableOpacity>


  </View>
            </View>
            </ScrollView>
            
            </View>
      )
      : (
      
        <ScrollView>
  <View style={{width:width , justifyContent:"center" , alignItems:"center"}} >
        <View  style={styles.list} >
      

<ScrollView
style={{width:"100%", height:"100%"}}
horizontal={true}
showsHorizontalScrollIndicator={false}
>
{data.map(list => 
<TouchableRipple onPress={()=>setActive(list)} style={active === list ? styles.activeTop  : { justifyContent:"center",
alignItems:"center",
marginLeft:10,
borderRadius:20,
width: 110,
color: "#50606B",
borderWidth:1,
padding: 7,
borderRadius:20,
borderColor:"#50606B"
}  }>

<Text   style={active === list ? styles.active  : styles.non  } >
{list}
</Text>
</TouchableRipple>
)

}




</ScrollView>




</View>

        {loading ? 
        (
          <View >


            </View>
        )
        :
        (
          <>
      

       <View style={styles.search}>
         
         <Text  style={{fontSize:15 , fontFamily:"font"}}></Text>
         </View>
           <View style={styles.center}>
           
             {active === "all" ?
             (
              <List data1={data1 && data1.search} />
             )
             : (
              <List data1={data1 && data1.search.filter(t=> t.category === active)}  search={search}/>
             )

             }

      


            <Text>
            
            </Text>
            
          </View>

       

       


    



          </>
        )

        }
        
        </View>

        </ScrollView>
      

      )

      }

    </View>
  );
};

const styles = StyleSheet.create({
  view: {

    width:width,
   
        
  },
  searchcontainer: {
 backgroundColor: 'white',
 borderWidth: 0, //no effect
 shadowColor: 'white', //no effect
 borderBottomColor: 'transparent',
 borderTopColor: 'transparent'
},
  search: {
    width: width/1.15,
    height: 30,
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "center",
  },
  list: {
    width:width,
    justifyContent:"space-evenly",
    flexDirection: "row",
    height: 40,
    alignItems:"center",



  }
  ,

  layer : {

    position: 'absolute',
    bottom: 10,
    zIndex:1000,
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
  
    height: "100%",
    width: "90%",
   borderRadius: 3,
   
flexDirection:"column",
 
justifyContent:"center",
alignItems:"flex-start",

},
  recommended: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    zIndex:1000,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:"rgba(255, 255, 255, 0.80)",
    alignItems: "center",
    justifyContent:"center",
  alignItems:"center",
  flexDirection:"row"
   },
  center: {
  
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",

    marginBottom: 100,
    marginTop:30,
    
  },
  logo: {
    width: "100%",
    height: "100%",

    alignItems: "center",
 justifyContent:"flex-end",
alignItems:"center",
  },
  non: {
    textTransform:'capitalize',
    fontSize:17,
    
  },
  active: {
    
    textTransform:'capitalize',
    fontSize:17,
  fontWeight:"bold",
  padding: 7,
 

    color: "white",
    
  },
  activeTop : {
    
    justifyContent:"center",
    alignItems:"center",
    marginLeft:10,
    borderRadius:20,
    backgroundColor:"#FEA20B",
    width: 110,
    },
  notFound: {
   height: height/2,

    width:width,
    justifyContent:"center",
    flexDirection: "column",
     alignItems:"center"
  },
  box: {
   position: 'relative',
  


  width: width,
  height: 200,

  backgroundColor:"#0c1b2a",
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
});

export default SwitchComponent;