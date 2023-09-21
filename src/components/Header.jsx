import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Slide, Tab, Tabs, useScrollTrigger } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  NEWS_ROUTE,
  POSTS_ROUTE,
} from "../app/Routes";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const location = useLocation();
  const [value, setValue] = useState(getTabValueFromPath(location.pathname));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getTabValueFromPath(pathname) {
    switch (pathname) {
      case MAIN_ROUTE:
        return "main";
      case POSTS_ROUTE:
        return "posts";
      case NEWS_ROUTE:
        return "news";
      case CONTACTS_ROUTE:
        return "contacts";
      default:
        return "main";
    }
  }

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position="fixed" elevation={0} sx={{ height: "64px" }}>
          <Toolbar>
            <Box
              sx={{
                width: "100%",
              }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary">
                <Tab
                  label="Main"
                  value="main"
                  to={MAIN_ROUTE}
                  component={RouterLink}
                  disableRipple
                />
                <Tab
                  label="Posts"
                  value="posts"
                  to={POSTS_ROUTE}
                  component={RouterLink}
                  disableRipple
                />
                <Tab
                  label="News"
                  value="news"
                  to={NEWS_ROUTE}
                  component={RouterLink}
                  disableRipple
                />
                <Tab
                  label="Contacts"
                  value="contacts"
                  to={CONTACTS_ROUTE}
                  component={RouterLink}
                  disableRipple
                />
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
