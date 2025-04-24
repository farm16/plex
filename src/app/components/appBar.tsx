"use client";

import React, { MouseEvent, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  FormControl,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import SwitchLocale from "./switchLocale";

function ResponsiveAppBar() {
  const t = useTranslations("components.responsiveAppBar");

  const pages = {
    about: {
      path: "/about-us",
      label: t("pages.about"),
    },
    services: {
      path: "/services",
      label: t("pages.services"),
    },
    faq: {
      path: "/faq",
      label: t("pages.faq"),
    },
  };

  const pagesArray = Object.values(pages);

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
      <Container maxWidth="xl" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={45}
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
                {label}
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: 3 }} style={{ display: "flex", alignItems: "center" }}>
            <FormControl
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <SwitchLocale />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/contact-us")}
              style={{ textTransform: "none", borderRadius: "30px" }}
            >
              {t("bookNow")}
            </Button>
          </Box>
          <Box sx={{ marginLeft: "auto", display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                        {label}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem style={{ display: "flex", justifyContent: "center" }}>
                  <SwitchLocale />
                  <Button
                    onClick={() => {
                      router.push("/contact-us");
                      handleCloseNavMenu();
                    }}
                    variant="contained"
                    color="primary"
                    style={{ textTransform: "none", borderRadius: "30px" }}
                  >
                    {t("bookNow")}
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
