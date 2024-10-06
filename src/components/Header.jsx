import { useState } from "react";
import { Link } from "react-router-dom";
import { CgGym, CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="text-black py-4 px-4 fixed left-0 right-0 bg-white z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold flex items-center gap-2">
          <CgGym className="rotate-90" />
          Gymon
        </Link>
        <ul className="hidden md:flex space-x-12 font-medium">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <button className="hidden md:flex bg-black text-white px-8 py-2 text-sm rounded-3xl">
          Join
        </button>
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            {isDrawerOpen ? <CgClose size={24} /> : <CgMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Drawer for mobile view */}
      {isDrawerOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-40 py-4 shadow-md">
          <ul className="flex flex-col items-center space-y-4 font-medium">
            <li>
              <Link to="/" className="hover:underline" onClick={toggleDrawer}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline"
                onClick={toggleDrawer}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline"
                onClick={toggleDrawer}
              >
                Contact
              </Link>
            </li>
            <button className="bg-black text-white px-8 py-2 text-sm rounded-3xl">
              Join
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
