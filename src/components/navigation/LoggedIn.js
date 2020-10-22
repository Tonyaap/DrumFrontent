import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <button className="button1" onClick={() => dispatch(logOut())}>
        Logout
      </button>

      <Nav.Item style={{ color: "white" }}>Welcome Back: {user.name}</Nav.Item>
    </>
  );
}
