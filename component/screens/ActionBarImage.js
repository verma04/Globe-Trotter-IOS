
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
const ActionBarImage = ({navigation}) => {

  return (
      <TouchableOpacity style={{marginRight:10}} onPress={() => navigation.goBack()} >
 <MaterialIcons name="arrow-back-ios" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default ActionBarImage;