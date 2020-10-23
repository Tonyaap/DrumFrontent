import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <span>
        <ul className="welcome" style={{ color: "white" }}>
          Welcome Back: {user.name}
        </ul>
        <button className="logoutbutton" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </span>
    </>
  );
}
