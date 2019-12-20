import * as React from "react";
import { MuiThemeProvider, Tab } from "@material-ui/core";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../themes/theme";

//value={this.state.value}
// onChange={(newValue) => this.setState({ value: newValue })}
// onRequestSearch={() => doSomethingWith(this.state.value)}

import "../Styles/styles.css"
// <div id="searchBar">
//{/* <SearchBar

///></div>   */}
const Header: React.FC = () => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : darkTheme;
  return (
    <MuiThemeProvider theme={theme}>
        <span id="header">
          <a><Tab label="Download" /></a> 
          <a href="https://github.com/ArtemisLabsLLP/Artemis-dev-tool"><Tab label="Contribute" /></a>
          <a href="https://www.patreon.com/artemislabs"> <Tab label="Donate" /> </a>
          <a href="https://medium.com/artemis-labs-open-source"> <Tab label="Media"/> </a>      
       </span>
    </MuiThemeProvider>
  );
};


export default Header;