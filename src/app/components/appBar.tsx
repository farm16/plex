"use client";
import React, { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";

const pages = {
  home: {
    path: "/",
    label: "Home",
  },
  about: {
    path: "/about-us",
    label: "About",
  },
  services: {
    path: "/services",
    label: "Services",
  },
  contact: {
    path: "/contact-us",
    label: "Contact Us",
  },
};

const pagesArray = Object.values(pages);

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const router = useRouter();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
      <div
        // maxWidth="xl"

        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "rgba(246, 247, 250, 1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          style={{
            color: "rgba(101,106,111,1)",
            marginRight: "7px",
          }}
        >
          {"Reserve or learn more at"}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgba(101,106,111,1)",
            textDecoration: "underline",
            fontWeight: "700",
          }}
        >
          {"1-800-555-5555"}
        </Typography>
      </div>
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "white",
        }}
      >
        <Toolbar disableGutters>
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={60}
            onClick={() => router.push("/")}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pagesArray.map(({ label, path }, index) => (
              <Button
                key={index}
                onClick={() => router.push(path)}
                sx={{
                  textTransform: "capitalize",
                  mx: 3,
                  color: "black",
                  display: "block",
                }}
              >
                {label ?? ""}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                textTransform: "none",
                borderRadius: "30px",
              }}
            >
              Book Now
            </Button>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pagesArray.map(({ label, path }, index) => (
                <MenuItem key={index} onClick={() => router.push(path)}>
                  <Typography sx={{ textAlign: "center" }}>
                    {label ?? ""}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: "none",
                    borderRadius: "30px",
                  }}
                >
                  Book Now
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
