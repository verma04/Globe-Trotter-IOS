import * as React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {lightColors, darkColors} from './colorThemes';

export const ThemeContext = React.createContext({
    isDark: false,
    colors: lightColors,
    setScheme: () => {},
});

export const ThemeProvider = (props) => {
    // Getting the device color theme, this will also work with react-native-web
    const colorScheme = useColorScheme(); // Can be dark | light | no-preference

    /*
    * To enable changing the app theme dynamicly in the app (run-time)
    * we're gonna use useState so we can override the default device theme
    */
    const [isDark, setIsDark] = React.useState(colorScheme === "dark");

    console.log(isDark)
    // Listening to changes of device appearance while in run-time
    React.useEffect(() => {
        var date = new Date();
        if(date.getHours() > 19 || date.getHours() < 6){
            setIsDark(colorScheme === "light");
            console.log("light")
        }
        else {
            setIsDark(colorScheme === "dark");
            console.log("light")
        
        }
    
    }, [colorScheme]);

  
    const data = new Date().getHours()

   
    const defaultTheme = {
        isDark,
        // Chaning color schemes according to theme
        colors: isDark ? darkColors : lightColors,
        // Overrides the isDark value will cause re-render inside the context.  
        setScheme: (scheme) => setIsDark(scheme === "dark"),
    };

    console.log( )


  return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);