import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../themes/theme";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../containers/LanguageMenu";

import "../containers/MyApp.css";

const projectArtemis: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : darkTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          <Grid container alignContent="center" alignItems="center" justify="space-between">
            <Typography variant="h6">{t("Project Artemis")}</Typography>
            <Typography variant="caption">Apollo Client Dev Tool</Typography>
            <Grid item>
              <LanguageMenu />
              <Tooltip title={t("Toggle Dark Mode")}>
                <IconButton onClick={darkMode.toggle}>
                  {darkMode.value ? <Brightness3Icon /> : <WbSunnyIcon />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <img className="logo" alt="logo" src={darkMode.value
            ? "https://i.pinimg.com/564x/e1/6b/ae/e16baed2c9260aee9b70bcedb510b95f.jpg" //tslint:disable-line
            : "https://i.pinimg.com/564x/e1/6b/ae/e16baed2c9260aee9b70bcedb510b95f.jpg" //tslint:disable-line
          } style={{ paddingTop: "10%" }} />
          <Typography variant="caption" style={{ position: "absolute", bottom: "10px" }}>
            {t("Date", { date: new Date() })}
          </Typography>
        </Grid>
      </div>
    </MuiThemeProvider >
  );
};

export default projectArtemis;