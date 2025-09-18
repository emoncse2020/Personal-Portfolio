import { SiCodersrank } from "react-icons/si";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 border-b shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to={"/"}
          className="flex justify-center items-center gap-2 text-lg font-bold text-blue-300"
        >
          <SiCodersrank></SiCodersrank>
          <span>Morsalin</span>
        </NavLink>
        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm-text-gray-300">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/projects"}>Projects</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
