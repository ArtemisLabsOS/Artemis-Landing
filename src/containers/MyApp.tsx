import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../themes/theme";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";
import Header from "./Header";
import { Link } from 'react-scroll';

// import NavBar from '..components/NavBar';
 import Intro from '../components/Intro';
 import Features from '../components/Features';
 import About from '../components/About';
 import Setup from '../components/Setup';
 
import "./MyApp.css";
import startingGif from '../../src/assets/gifs/2.gif';

const MyApp: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : darkTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <AppBar position="sticky" color="default" elevation={0}>
        <Header>  </Header>
        
        <Toolbar>
       
          <Grid container alignContent="center" alignItems="center" justify="space-between">
            <Typography variant="h6">{t("Project Artemis:  Client Dev Tool")}</Typography>
            <Typography variant="caption"></Typography>
            <Grid item>
              <LanguageMenu />
            </Grid>
          </Grid>
         
        </Toolbar>
      </AppBar>
       
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
    

    <div id='splash' >
    <img className="logo"  alt="logo" src={darkMode.value
            ? startingGif //tslint:disable-line
            : startingGif //tslint:disable-line
          } style={{ paddingTop: "-67%", width: '67%', marginBottom: "50"}} /> 
          <a href = 'https://chrome.google.com/webstore/detail/'><button style={{ padding: "15" }}>Install</button></a>
          <Link to='content' smooth={true} offset={30} duration={900}>
            <div id='arrow-down'>
              <i className='fas fa-angle-double-down' />
            </div>
          </Link>
        </div>
        <div className='content'>
          <Setup />
          <Features />
          <Intro />
          <About />
        </div>

          {/* <Typography variant="caption" style={{ position: "absolute", bottom: "10px" }}>
            {t("Date", { date: new Date() })}
          </Typography> */}
        </Grid>



      </div>
    </MuiThemeProvider >
    
  );
};

export default MyApp;
