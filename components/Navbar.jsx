import { GiDonut } from "react-icons/gi";

const Navbar = () => {
  return (
    // <div className="sticky top-0 z-20 flex justify-center mx-auto text-white bg-transparent max-w-7xl navbar">
    <div className="fixed top-0 left-0 right-0 z-30 w-full mx-auto max-w-7xl navbar">
      <div className="w-full navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiDonut className="text-6xl transition duration-300 hover:text-pink-500 focus:text-pink-500" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Donuts</a>
              <ul className="p-2">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Classic</a>
                </li>
                <li>
                  <a>Deluxe</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Drinks</a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Hello Donuts</a>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <details>
              <summary>Donuts</summary>
              <ul className="p-2">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Classic</a>
                </li>
                <li>
                  <a>Deluxe</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Drinks</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="hidden text-6xl navbar-end md:block">
        <GiDonut className="transition duration-300 hover:text-pink-500 focus:text-pink-500 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
