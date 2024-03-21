import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authReducer";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="d-flex justify-content-end">
      <div className="">
        {/*USER */}
        {/*LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          {user ? (
            <div className="">
              <span className="me-2 border bg-warning p-2 rounded-1">
                Hello Bassem
              </span>
              <HiOutlineLogout
                onClick={onLogout}
                style={{ fontSize: "xx-large", cursor: "pointer" }}
              />
            </div>
          ) : (
            <div className="">
              <span className="me-2 border bg-warning p-2 rounded-1">
                Hello Guest
              </span>
              <HiOutlineLogin
                style={{ fontSize: "xx-large", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
