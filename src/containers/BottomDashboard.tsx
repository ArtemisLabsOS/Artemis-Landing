import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../themes/theme";
import { useTranslation } from "react-i18next";

const BottomDashboard: React.FC = () => {
    const darkMode = useDarkMode();
    const { t } = useTranslation();
    const theme = darkMode.value ? darkTheme : darkTheme;


    return(
        <MuiThemeProvider theme={theme}>

        </MuiThemeProvider>
    );
};



export default BottomDashboard;