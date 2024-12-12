import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

import Profile from "./facultysidenav/Profile";
import brand_logo from "../../../assets/brand_logo.png";
import { useMenuContext } from "../../../context/menuContext";

function FacultySideNav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const { isMenuOpen, toggleMenu } = useMenuContext();

  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dashboard = () => {
    navigate("/");
  };

  const menuDashboard = () => {
    navigate("/");
    toggleMenu();
  };

  return !isSmScreen ? (
    <nav
      className="fixed left-0 top-0 bg-blue-800 bg-opacity-[.04] min-h-screen max-h-screen border-r-blue-400 border-opacity-20 shadow-lg shadow-blue-200 border-[1px] text-[#070707]"
      style={{ width: "280px" }}
    >
      <div className="ms-2 mt-3 mb-3">
        <img src={brand_logo} alt="NareshIT" width={240} height={140} />
      </div>

      <Divider />

      <div className="relative w-full m-2">
        <Profile />
      </div>

      <Divider />

      <Divider />

      <MenuList>
        <Box className="my-3" marginLeft={2}>
          <Typography>Navigation</Typography>
        </Box>
        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }} onClick={dashboard}>
          <List sx={{ paddingBlock: 0, marginBlock: 0.4 }} className="w-full">
            <ListItem
              style={{
                backgroundColor:
                  location.pathname === "/attendance-tracker"
                    ? "rgba(30,64,175,.20)"
                    : null,
              }}
              className="rounded"
            >
              <ListItemAvatar>
                <CalendarMonthIcon />
              </ListItemAvatar>
              <ListItemText primary="AttendanceTracker" />
            </ListItem>
          </List>
        </MenuItem>
      </MenuList>
    </nav>
  ) : (
    <>
      <nav
        className="fixed left-0 top-0 bg-blue-800 bg-opacity-[.04] z-20 min-w-full flex items-center justify-between border-r-blue-400 border-opacity-20 shadow-lg shadow-blue-200 border-[1px] text-[#070707]"
        style={{ width: "280px", height: isSmScreen ? "58px" : "" }}
      >
        <div className="ms-2 mt-4 mb-3">
          <img src={brand_logo} alt="NareshIT" width={160} height={80} />
        </div>

        <div className="me-1">
          <IconButton onClick={toggleMenu}>
            {isMenuOpen ? (
              <MenuOpenIcon sx={{ fontSize: "26px" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "26px" }} />
            )}
          </IconButton>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-14 z-20 bg-blue-800 bg-opacity-[.04] min-w-full border-r-blue-400 border-opacity-20 shadow-lg shadow-blue-200 border-[1px] text-[#070707]"
              style={{ zIndex: 1 }}
            >
              <MenuList className="relative h-screen">
                <MenuItem
                  sx={{ paddingBlock: 0, marginBlock: 0 }}
                  onClick={menuDashboard}
                >
                  <List
                    sx={{ paddingBlock: 0, marginBlock: 0.4 }}
                    className="w-full"
                  >
                    <ListItem className="rounded">
                      <ListItemAvatar>
                        <CalendarMonthIcon />
                      </ListItemAvatar>
                      <ListItemText primary="Attendance Tracker" />
                    </ListItem>
                  </List>
                </MenuItem>
              </MenuList>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default FacultySideNav;
