import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
  Box,
} from "@mui/material";
import DrawerComp from "../DrawerComp/DrawerComp";

const Contained = styled(Box)`
  // display: flex;
  // justify-content: center;
`;
const ContactBtn = styled(Button)`
  width: 140px;
  font-size: small;
  margin-left: 40px;
  border-radius: 30px;
`;
const Image = styled("img")({
  width: "120px",
  display: "flex",
  padding: "20px 45px 20px 0",
  marginLeft: "40px",
});

const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <Contained>
      <AppBar
        sx={{
          background: "white",
          height: " 80px",
          position: "absolute",
          left: "0",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <Toolbar>
          <Image src={logo} alt="icon" />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{
                  color: "black",
                  fontSize: "x-small",
                }}
                // indicatorColor="secondary"
                // textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Why Arbisoft" />
                <Tab label="What we do" />

                <Tab label="Our products" />
                <Tab label="Our Work" />
                <Tab label="Inside Arbisoft" />
                <Tab label="Career" />
              </Tabs>
              <ContactBtn variant="contained">Contact us</ContactBtn>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Contained>
  );
};

export default NavBar;
