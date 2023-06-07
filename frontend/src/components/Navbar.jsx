import { NavLink } from "react-router-dom";
import ConnectionNavItem from "./navbar/ConnectionNavItem";
import VideosNavItem from "./navbar/VideosNavItem";
import PricingNavItem from "./navbar/PricingNavItem";
import HomeNavItem from "./navbar/HomeNavItem";
import AboutNavItem from "./navbar/AboutNavItem";

export default function Navbar() {
  const navitems = [
    {
      id: 1,
      name: "Home",
      component: <HomeNavItem />,
    },
    {
      id: 2,
      name: "Videos",
      component: <VideosNavItem />,
    },
    {
      id: 3,
      name: "Plans",
      component: <PricingNavItem />,
    },
    {
      id: 4,
      name: "About",
      component: <AboutNavItem />,
    },
    {
      id: 5,
      name: "Account",
      component: <ConnectionNavItem />,
    },
  ];
  return (
    <nav className="fixed bottom-0 flex h-20 w-full justify-between rounded-t-[10px] bg-neutralDarkest md:static md:top-0 md:rounded-none md:px-12 md:py-4">
      <img
        src="../assets/icon/navbar/logo_desktop.svg"
        alt=""
        className="hidden md:block"
      />
      <ul className="flex w-full items-center justify-between px-4 md:justify-end md:gap-x-8">
        {navitems.map((navitem) => (
          <li key={navitem.id}>
            <NavLink to={`/${navitem.name}`}>
              <div className="flex flex-col items-center text-neutral">
                <div className={navitem.id === 5 ? "md:block" : "md:hidden"}>
                  {navitem.component}
                </div>
                <span
                  className={
                    navitem.id === 5
                      ? "font-sans text-xs md:hidden"
                      : "font-sans text-xs md:block md:font-header md:text-lg md:font-extrabold"
                  }
                >
                  {navitem.name}
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
