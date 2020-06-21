import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

function ThemeButton(props)
{
    let [darkTheme, setDarkTheme] = useContext(ThemeContext);
    return(
        <button onClick={() => setDarkTheme(!darkTheme)}>Apply { !darkTheme ? 'Dark' : 'Light'} Theme</button>
    );
}

export default ThemeButton;