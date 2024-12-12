import { connect } from "react-redux";
import { useNavigate } from "react-router";

import userplaceholder from "../../../../assets/userplaceholder.png";
import { logout as logoutAction } from "../../../../redux/slices/user/userSlice";
import { resetLoginState } from "../../../../redux/slices/user/loginSlice";

function ProfileComponent({ userName, logout, resetLoginStateDispatch }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    resetLoginStateDispatch();
    logout();
    navigate("/login");
  };

  return (
    <>
      <div>
        <div className="flex items-center space-x-3 py-2 px-3 pb-0 text-[#070707] relative">
          <img
            src={userplaceholder}
            width={40}
            height={40}
            className="rounded-full border-gray-400 border-2"
            alt="user"
          />

          <div className="max-w-[180px]">
            <p className="font-bold text-ellipsis overflow-hidden">
              {userName}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div className="me-8 text-center text-sm h-[1.6rem] flex align-middle justify-center w-20 bg-blue-800 bg-opacity-[.14] hover:bg-opacity-[.18] rounded border-b-[#070707] border-opacity-[.14] border-b cursor-pointer">
            <button onClick={handleLogout}>logout</button>
          </div>
        </div>
      </div>

      <div className="m-2 text-sm px-3 py-2">
        <p>
          Role: <strong className="text-sm font-[600]">FACULTY</strong>
        </p>
      </div>
    </>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
});

const mapDispatch = {
  logout: logoutAction,
  resetLoginStateDispatch: resetLoginState,
};

const Profile = connect(mapState, mapDispatch)(ProfileComponent);

export default Profile;

// import { connect } from "react-redux";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { IconButton, Button, Menu, MenuItem } from "@mui/material";
// import { useState } from "react";
// import userplaceholder from "../../../assets/userplaceholder.png";
// import { motion } from "framer-motion";
// import { logout as logoutAction } from "../../../redux/slices/user/userSlice";
// import { resetLoginState } from "../../../redux/slices/user/loginSlice";

// function ProfileComponent({ userName, logout, resetLoginStateDispatch }) {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     resetLoginStateDispatch();
//     logout();
//     handleClose();
//   };

//   return (
//     <div className="relative w-full">
//       <div className="mx-2 my-2 flex items-center space-x-3 bg-gray-50 rounded-lg py-2 px-3 text-[#070707] relative">
//         <img
//           src={userplaceholder}
//           width={40}
//           height={40}
//           className="rounded-full border-gray-400 border-2"
//           alt="user"
//         />

//         <div className="max-w-[162px]">
//           <p className="font-bold text-ellipsis overflow-hidden">{userName}</p>
//         </div>

//         <div className="absolute right-1">
//           <IconButton onClick={handleClick}>
//             {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </div>
//       </div>

//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         MenuListProps={{ onMouseLeave: handleClose }}
//         component={motion.div}
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.2 }}
//       >
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }

// const mapState = (state) => ({
//   userName: state.user.userName,
// });

// const mapDispatch = {
//   logout: logoutAction,
//   resetLoginStateDispatch: resetLoginState,
// };

// const Profile = connect(mapState, mapDispatch)(ProfileComponent);

// export default Profile;
