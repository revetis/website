import * as React from "react";
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

function Header() {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleDrawer = (status) => () => {
    setOpen(status);
  };

  const menuItems = [
    { key: "Home", link: "/" },
    { key: "About", link: "/#about" },
    { key: "Blog", link: "/blogs" },
    { key: "Projects", link: "/projects" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        background: "transparent",
        borderBottom: "1px solid #6a1b9a",
      }}
    >
      <Container maxWidth="xl">
        <div className="header">
          {/* Logo + Mobile Drawer */}
          <div className="header__logo flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="logo h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Drawer Button (Mobile Only) */}
            <div className="md:hidden">
              <IconButton
                className="text-white"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon className="text-white" />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <div
                  className="w-64 h-full bg-gradient-to-b from-purple-700 to-purple-900 text-white flex flex-col"
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <div className="p-4 text-2xl font-semibold border-b border-purple-500">
                    {t("Menu")}
                  </div>
                  <List className="flex-1">
                    {menuItems.map((item, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          component="a"
                          href={item.link}
                          className="hover:bg-purple-600 transition-colors"
                        >
                          <ListItemText
                            primary={t(item.key)}
                            primaryTypographyProps={{ className: "text-lg" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <div className="p-4 text-sm text-center text-purple-300 border-t border-purple-600">
                    © {new Date().getFullYear()} Revetis. All rights reserved.
                  </div>
                </div>
              </Drawer>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="header__navigation hidden md:flex">
            <ul className="header__nav-list font-medium text-lg">
              {menuItems.map((item, i) => {
                const isActive = item.link.startsWith("#")
                  ? location.hash === item.link
                  : location.pathname === item.link;
                return (
                  <li
                    key={i}
                    className={`header__nav-item text-gray-300 hover:text-purple-300 transition-all ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    <a href={item.link}>{t(item.key)}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}

export default Header;
