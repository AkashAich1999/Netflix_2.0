import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute flex w-[100%] items-center justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
        user && (
          <div className="flex items-center">
          <IoIosArrowDropdown size="24px" color="white"/>
          <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button className="bg-red-700 text-white px-3 py-2 mx-1 rounded-lg">
              Search Movie
            </button>
            <button onClick={logoutHandler} className="bg-red-700 text-white px-3 py-2 mx-1 rounded-lg">
              Logout
            </button>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Header;
