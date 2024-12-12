import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import userplaceholder from "../../../../assets/userplaceholder.png";
import { logout as logoutAction } from "../../../../redux/slices/user/userSlice";
import { resetLoginState } from "../../../../redux/slices/user/loginSlice";

function ProfileComponent({
  userName,
  batchName,
  logout,
  firstName,
  lastName,
  resetLoginStateDispatch,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    resetLoginStateDispatch();
    logout();
    navigate("/login");
  };

  return (
    <div style={{ position: "relative" }}>
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
      {batchName && (
        <div className="mx-2 mt-2 text-md px-3 py-2 pb-0">
          <p>
            BatchName: <strong className="font-semibold">{batchName}</strong>
          </p>
        </div>
      )}
      {firstName && (
        <p className="mx-2 text-md px-3 py-2 pb-0">
          FristName: <strong className="font-semibold">{firstName}</strong>
        </p>
      )}
      {lastName && (
        <p className="mx-2 text-md px-3 py-2 pb-0">
          LastName: <strong className="font-semibold">{lastName}</strong>
        </p>
      )}
    </div>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  batchName: state.user.batch?.batchName,
});

const mapDispatch = {
  logout: logoutAction,
  resetLoginStateDispatch: resetLoginState,
};

const Profile = connect(mapState, mapDispatch)(ProfileComponent);

export default Profile;
