import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';;
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const setMode = mode => {
        AsyncStorage.setItem('theme', mode)
        setTheme(mode)
     
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = AsyncStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);
    return [theme, themeToggler]
};