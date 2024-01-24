import Link from "next/link";
import { GiDonut } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="sticky top-0 max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="text-xl" href="/">
            Hello Donuts
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <GiDonut className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
