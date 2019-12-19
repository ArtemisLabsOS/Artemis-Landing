import React from "react";
import './about.css'
// import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
// import useDarkMode from "use-dark-mode";
// import Brightness3Icon from "@material-ui/icons/Brightness3";
// import WbSunnyIcon from "@material-ui/icons/WbSunny";
// import { lightTheme, darkTheme } from "../themes/theme";
// import { useTranslation } from "react-i18next";
// import LanguageMenu from "../containers/LanguageMenu";

// import "../containers/MyApp.css";
const About: React.FC = () => {
  return (
    <div>
    <h2>Meet Our Engineering Team</h2>
    <div id='team'>
      <div className ='person'>
        <img className='pro-img' src="" />
        <h4 className='name'>Timothy Jung</h4>
        <p className='single-p'><a href = 'https://github.com/timjj92' target='_blank'>@timjj92</a></p>
      </div>
      <div className ='person'>
        <img className='pro-img' src=""/>
        <h4 className='name'>Justin Lo</h4>
        <p className='single-p'><a href = 'https://github.com/justinnnlo' target='_blank'>@justinnnlo</a></p>
      </div>
      <div className ='person'>
        <img className='pro-img' src="" />
        <h4 className='name'>Seong Choi</h4>
        <p className='single-p'><a href = 'https://github.com/choies921003' target='_blank'>@choies921003</a></p>
      </div>
      <div className ='person'>
        <img className='pro-img' src="" />
        <h4 className='name'>Angie Chang</h4>
        <p className='single-p'><a href = 'https://github.com/angiechangpagne' target='_blank'>@angiechangpagne</a></p>
      </div>
    </div>
  </div>
  );
};

export default About;