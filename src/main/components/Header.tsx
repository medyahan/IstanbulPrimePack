import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  useTheme,
  Theme,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import headerData from "../data/headerData";
import React from "react";

const Header = () => {
  const location = useLocation();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: "none", py: 1, borderRadius: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img src={headerData.logo} alt="Istanbul Prime Pack Logo" style={{ height: 80 }} />
        </Box>

        {/* Masaüstü Menü */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0, alignItems: "center" }}>
          {headerData.menuItems.map((item, index) =>
            item.subMenu ? (
              <Box key={index}>
                <Button
                  onClick={(event) => handleMenuOpen(event, index)}
                  sx={menuButtonStyle(theme)}
                  endIcon={<ArrowDropDownIcon />}
                >
                  {item.label}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={openMenuIndex === index}
                  onClose={handleMenuClose}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      component={Link}
                      to={subItem.path}
                      sx={isActive(subItem.path) ? activeMenuStyle(theme) : menuItemStyle(theme)}
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button
                key={index}
                component={Link}
                to={item.path}
                sx={isActive(item.path) ? activeMenuStyle(theme) : menuButtonStyle(theme)}
              >
                {item.label}
              </Button>
            )
          )}

          {/* Teklif Al Butonu */}
          <Button
            variant="contained"
            component={Link}
            to={headerData.quoteButton.path}
            sx={quoteButtonStyle(theme)}
          >
            {headerData.quoteButton.label}
          </Button>
        </Box>

        {/* Hamburger Menü (Mobil için) */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleMobileMenu}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Hamburger Menü İçeriği */}
        <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
          <Box sx={{ width: 280, p: 2 }}>
            <List>
              {headerData.menuItems.map((item, index) => (
                <Box key={index}>
                  {item.subMenu ? (
                    <>
                      <ListItemButton
                        onClick={() => handleSubMenuToggle(index)}
                        sx={menuButtonStyle(theme)}
                      >
                        {item.label}
                        {openSubMenu === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </ListItemButton>

                      <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                        {item.subMenu.map((subItem, subIndex) => (
                          <ListItemButton
                            key={subIndex}
                            component={Link}
                            to={subItem.path}
                            sx={isActive(subItem.path) ? activeMenuStyle(theme) : menuItemStyle(theme)}
                          >
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        ))}
                      </Collapse>
                    </>
                  ) : (
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      sx={isActive(item.path) ? activeMenuStyle(theme) : menuButtonStyle(theme)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  )}
                </Box>
              ))}

              <ListItemButton
                component={Link}
                to={headerData.quoteButton.path}
                sx={quoteButtonStyle(theme)}
              >
                <ListItemText primary={headerData.quoteButton.label} />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

// Stiller
const menuButtonStyle = (theme: Theme) => ({
  color: theme.palette.text.primary,
  fontWeight: "bold",
  textTransform: "none",
  fontSize: "0.9rem",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
});

const activeMenuStyle = (theme: Theme) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  borderLeft: "4px solid",
  fontSize: "0.9rem",
  borderColor: theme.palette.primary.main,
  bgcolor: theme.palette.action.hover,
});

const menuItemStyle = (theme: Theme) => ({
  color: theme.palette.text.primary,
  fontWeight: "500",
  "&:hover": {
    bgcolor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
});

const quoteButtonStyle = (theme: Theme) => ({
  bgcolor: theme.palette.primary.main,
  color: "black",
  fontWeight: "bold",
  borderRadius: theme.shape.borderRadius,
  paddingX: "16px",
  "&:hover": {
    bgcolor: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
  },
});

export default Header;
