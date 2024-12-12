import { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";

import userplaceholder from "../../../assets/userplaceholder.png";

function UserLogo() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <img
          src={userplaceholder}
          width={40}
          height={40}
          className="rounded-full w-[40px] h-[40px] border-gray-400 border-2"
          alt="user"
        />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <Typography>Welocme Home</Typography>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserLogo;
