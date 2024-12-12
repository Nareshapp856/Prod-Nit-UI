import UserLogo from "./topnav/UserLogo";

function TopNav() {
  return (
    <div className="m-3 mx-8">
      <div className="cursor-pointer">
        <UserLogo />
      </div>
    </div>
  );
}

export default TopNav;
