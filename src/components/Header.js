import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };
  const register = () => {
    history.push("/register");
  };
  const product = () => {
    history.push("/");
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
    history.push("/");
  };
  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>

        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={product}
        >
          Back to explore
        </Button>
      </Box>
    );
  } else {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Box>
          {children}
        </Box>
        <Box>
          {localStorage.getItem("username")===null ? (
            <>
              <Button variant="text" onClick={login}>
                LOGIN
              </Button>
              <Button variant="contained" onClick={register}>
                REGISTER
              </Button>
            </>
          ) : (
            <Box className="loginview">
              <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
              <p className="username-text" style={{ margin: "1rem" }}>
                {localStorage.getItem("username")}
              </p>
              <Button variant="text" onClick={logout}>
                LOGOUT
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
};

export default Header;
