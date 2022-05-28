import React, { useEffect } from 'react'
import { View, Image, StyleSheet , Pressable, ImageBackground, Button} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ImageView from 'react-native-image-view';
import Loading from '../Loading';
import { Dimensions } from "react-native";
import Sliderr from './Slider'
import { useMutation, useQuery } from 'graphql-hooks'
import {
  Text,


} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import { AntDesign } from '@expo/vector-icons'; 
var width = Dimensions.get('window').width;
var width2 = Dimensions.get('window').width/1.1;
import HTML from 'react-native-render-html';
import {
  useTheme,


} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';;
import WebView from './WebView';
import data from '../../Recommendations/data';
import Toast from 'react-native-root-toast';

const Wishlist = ({data , title , data1 , state}) => {
  const { colors } = useTheme();
  const WISH = `
  mutation AddWishlist($userid: ID, $id: ID, $img: String, $title: String, $category: String) {
    addWishlist(userid: $userid, id: $id, img: $img, title: $title, category: $category) {
      userid
      id
      img
      title
      category
    }
  }`
  const REMOVEWISH = `
  mutation Mutation($userid: ID, $title: String) {
    removeWishlist(userid: $userid, title: $title) {
      userid
      title
    }
  }`
  const [addwish , {data:data2, loading:load}] = useMutation(WISH)
  const [removewwish , {data:data3, loading:load4}] = useMutation(REMOVEWISH)

  const addwishlist = (set) => {

    let toast =  Toast.show(`${title} added to wishlist` , {
      duration: Toast.durations.LONG,
      position:100,
      shadow: true,
      animation: true,
      hideOnPress: true,
  
    });
  

    const data = {
      userid:state,
      id:data1.id,
      img:data1.img[0].img,
      title:data1.title,
      category:data1.items.name
    }
       
    addwish({variables:data})

    setWish([data, ...wish])


    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 2500);

 
  }


  const  removewishlist = (set) => {

    const data = {
      userid:state,
      title:title,
    }
    console.log(data)
       
    removewwish({variables:data})

    const fin = wish.filter(set => set.title !== title)

    setWish([ ...fin])
    let toast =  Toast.show(`${title} removed from wishlist` , {
      duration: Toast.durations.LONG,
      position:100,
      
      
      shadow: true,
      animation: true,
      hideOnPress: true,
  
    });
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 2500);

  
 
  }


    const [wish, setWish] = React.useState(data)

    
  return (
    <TouchableOpacity >
    {wish === "" ?
    (
      null
    )
    :
    (
      <>

      {wish.filter(t=> t.title === title ).length > 0  ?
      (
        <TouchableOpacity     onPress={()=>removewishlist(data1.getConciergeDecription)}>
       <Ionicons  name="ios-heart-sharp" size={24} color="#FEA20B" />
       </TouchableOpacity>
      )
      :
      (
        <TouchableOpacity  onPress={()=>addwishlist(title)}>
       <AntDesign    name="hearto" size={24} color={colors.text} />
       </TouchableOpacity>
      )

      }
      </>
    )

    }
     
     
{/*       
     // : (
     //  <AntDesign onPress={()=> setIsVisible(true)} name="hearto" size={24} color="black" />
     // )
       
     // } */}
 



    </TouchableOpacity>
  );
};

export default Wishlist;
