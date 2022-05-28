import React from 'react'
import { View, Text , Switch } from 'react-native'
import {useTheme} from '../ThemeContext';
const Toogle = () => {

    const {setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    
    return (
        <Switch value={isDark} onValueChange={toggleScheme}/>
    )
}

export default Toogle
