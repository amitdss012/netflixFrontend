import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../constant/constantAPI";
import { setUser } from "../redux/slice/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.userData.user)

    const dispatch = useDispatch();



    const handleLogout = async () => {
      try {
        const res = await axios.get(`${API}/logout`)
        dispatch(setUser(null))
        if(res.data.success){
          toast.success(res.data.message)
        }
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <nav className="flex justify-between bg-opacity-75 fixed top-0 left-0 right-0 z-50 py-3 px-5">
      <Link to={"/"} className="text-3xl font-bold text-red-600 uppercase">
        Netflix 
      </Link>
        <div>
        {
          user ? (
            <>
            <button
                className="text-white px-3 py-2 rounded hover:bg-red-600 transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                className="ml-4 text-white px-3 py-2 rounded border bg-red-600 border-red-600 hover:bg-white hover:text-black transition duration-300"
                onClick={() => navigate("/search")}
              >
                <i className="fa-solid fa-magnifying-glass md:hidden"></i>
                <p className="hidden md:block">Search</p>
              </button>
              <button
                className="ml-4 text-white px-3 py-2 rounded border bg-red-600 border-red-600 hover:bg-white hover:text-black transition duration-300"
                onClick={() => navigate("/profile")}
              >
                <i className="fa-regular fa-user md:hidden"></i>
                <p className="hidden md:block">Profile</p>
              </button>
            </>
          ) : (
            <>
              <button
                className="text-white px-3 py-2 rounded hover:bg-red-600 transition duration-300"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
              <button
                className="ml-4 text-white px-3 py-2 rounded border bg-red-600 border-red-600 hover:bg-white hover:text-black transition duration-300"
                onClick={() => navigate("/sign-up")}
              >
               Signup
              </button>
            </>
          )
        }
        </div>
    </nav>
  );
};

export default Navbar;
