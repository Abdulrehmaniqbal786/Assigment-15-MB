import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Custom_Button } from "./Custom_Button";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { set_user_auth } from "../store/slices/user_data_slice";
import Logo from '../assets/logo.jpg'

const Navbar_Component = () => {
  const user_data = useSelector((store) => store.user_data);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout_handle = () =>{
    signOut(auth).then((res)=>{
        dispatch(set_user_auth(false))
        navigate('/login')
        console.log('logout ho gya...!')
    })

  }
  return (
    <div className="bg-sunsetOrange h-20 px-3 flex items-center justify-between">
      <div className="text-3xl flex text-white font-bold">
        <img width={70} src={Logo} alt="" /><h3 className="mt-3">Ye's ToDos</h3>
      </div>

      <div>
        {user_data.loading ? (
          <CircularProgress color="warning" />
        ) : (
          <div>







            {user_data.isLoggedIn ? (
              <div className="space-x-6  mr-5 flex  text-white font-medium">
                <Typography className="text-black mt-20">ABDUL-REHMAN</Typography>
                <Custom_Button  onClick={logout_handle}  >
                    Logout
                </Custom_Button>
              </div>
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Navbar_Component };