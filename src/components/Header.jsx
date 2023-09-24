import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Products", url: "/products" },
    { text: "Services", url: "/services" },
    { text: "About Us", url: "/about" },
    { text: "Contact Us", url: "/contact" },
    { text: "ToDo", url: "/todo" },
  ];

  return (
    <header className=" bg-slate-600">
      <nav className="flex justify-between items-center max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto py-4 mb-8">
        <Link to="/" className="font-bold text-3xl">
          TechHub
        </Link>
        <ul
          className={`duration-700 gap-12 items-center text-lg lg:flex lg:static absolute right-6 md:right-10 text-right p-6 rounded-xl max-lg:space-y-4 min-[0px]:max-lg:bg-slate-300 min-[0px]:max-lg:dark:bg-slate-600 ${
            navOpen ? "top-20" : "-top-64"
          }`}
        >
          {navLinks.map((link, id) => (
            <li key={id}>
              <NavLink to={link.url}>{link.text}</NavLink>
            </li>
          ))}
        </ul>

        <button className="px-8 py-3 bg-slate-500 text-slate-200 font-medium text-xl rounded-xl hidden lg:block  border border-slate-500 hover:border-slate-800 ">
          Explore Now
        </button>

        <button
          className="text-3xl border border-slate-700 dark:border-slate-200 px-2 py-1 rounded-md lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
