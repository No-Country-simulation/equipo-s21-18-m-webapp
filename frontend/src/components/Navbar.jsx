import { Link } from "react-router-dom";
import Logo from "../logo/Logo"

export default function Navbar() {
  return (
    <>
      <div className="w-full h-16 px-8 flex items-center justify-between font-inter text-[0.875rem] font-medium leading-tight border-b-[1px] border-[#e5e7eb]">
        <div className="flex gap-6 items-center">
          <Link to={"/"} className="flex items-center">
            <Logo width={"1.5rem"} height={"1.5rem"}/>
            <span className="font-bold mx-2">Fit Lover</span>
          </Link>

          <ul className="flex gap-4">
            <li>
              <Link to={"/exercises"}>Exercises</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/progress"}>Progress</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link to={"/login"} className="h-[2.25rem] px-3 content-center">Login</Link>
          <Link to={"/register"} className="bg-primary text-white h-[2.25rem] px-3 content-center rounded-[6px] ">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
