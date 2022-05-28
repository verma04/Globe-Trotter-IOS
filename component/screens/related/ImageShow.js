import React from 'react'
import { View, Text } from 'react-native'
import ImageView from 'react-native-image-view';
const ViewItems = ({route}) => {
  const {data} = route.params
  const images = [
    {
        source: {
            uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
        },
        title: 'Paris',
        width: 806,
        height: 720,
    },
];
    const [visible, setIsVisible] = React.useState(false);
    console.log(data)
    return (
     
 <ImageView
  images={images}
  imageIndex={0}
  visible={visible}
  onRequestClose={() => setIsVisible(false)}
/>
   
    )
}

export default ViewItems
