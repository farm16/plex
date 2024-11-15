"use client";

import React, { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";

const pages = {
  // home: {
  //   path: "/",
  //   label: "Home",
  // },
  about: {
    path: "/about-us",
    label: "About Us",
  },
  services: {
    path: "/services",
    label: "Services",
  },
  faq: {
    path: "/faq",
    label: "FAQ",
  },
  contact: {
    path: "/contact-us",
    label: "Get in Touch",
  },
};

const pagesArray = Object.values(pages);

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const router = useRouter();
  const pathname = usePathname();

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
          {"1(347) 433-7602"}
        </Typography>
      </div>
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Image
            src="/logo.png"
            alt="logo"
            width={85}
            height={27}
            onClick={() => router.push("/")}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pagesArray.map(({ label, path }, index) => (
              <Button
                key={index}
                onClick={() => router.push(path)}
                sx={{
                  textTransform: "capitalize",
                  mx: 3,
                  color: "black",
                  display: "block",
                  textDecoration: pathname === path ? "underline" : "",
                  fontWeight: pathname === path ? "700" : "",
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
            <Drawer
              anchor={"top"}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <List>
                {pagesArray.map(({ label, path }, index) => (
                  <ListItem key={index}>
                    <ListItemButton
                      onClick={() => {
                        router.push(path);
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {label ?? ""}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={() => {
                    router.push("/contact-us");
                    handleCloseNavMenu();
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
                </ListItem>
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
