import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavbarTop from "../ui/NavbarTop";
import NewOfferButton from "./NewOfferButton";
import UserOrdersButton from "./UserOrdersButton.js";
import lady_banner from "../../graphics/tempImages/main_banner_lady_cutoff.png";
import sample_profile_picture from "../../graphics/tempImages/sample_profile_picture.png";
import UserSafetyButton from "./UserSafetyButton";
import FormBackground from "../loginPageComponents/FormBackground";
import { Typography } from "@mui/material";

import { CenterFocusStrong, Repeat } from "@mui/icons-material";
import "../ui/style.css";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

class UserTheme extends Component {
  render() {
    return (
      <Container className="userTheme">
        <Box
          sx={{
            width: "100%",
            display: "grid",
          }}
        >
          <Grid alignItems="flex-start">
            <Item>
              <img
                alt="Banner - zdjęcie"
                src={sample_profile_picture}
                width="80%"
                height="80%"
              />
            </Item>
            <Item>
              <Typography variant="h4">Super użytkownik</Typography>
            </Item>
            <Item>
              <Typography variant="h7">Aktywny od: 01.01.2022</Typography>
            </Item>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default UserTheme;
