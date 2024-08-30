import { TbTruckDelivery } from "react-icons/tb";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const Sidebar = () => {
  const { toggle, setToggle } = useContext(SidebarContext);

  const handleToggle = () => {
    return setToggle((curr) => !curr);
  };

  return (
    <div
      className={classNames(
        !toggle ?
          "w-9 bg-neutral-800 text-gray-300 px-3 py-3 flex flex-col":
        " bg-neutral-800 text-gray-300 w-60 p-3 flex flex-col"
      )}
    >
      <div className="flex items-center font-semibold justify-center">
        <button onClick={handleToggle} className={classNames("text-green-600")}>
          <TbTruckDelivery />
        </button>
        <p
          className={classNames(
            toggle
              ? "text-green-600 pl-2 text-xxsm lg:text-sm md:text-xsm"
              : "w-0 pl-0 overflow-hidden hidden text-green-600 text-xxsm lg:text-sm md:text-xsm"
          )}
        >
          DISTRIBUCIONES
        </p>
        <p
          className={classNames(
            toggle ? "" : "w-0 p-0 overflow-hidden hidden",
            "bg-green-900 px-1 text-xxsm lg:text-sm md:text-xsm"
          )}
        >
          MADRID
        </p>
      </div>

      <div
        className={classNames(
          "relative flex-1 py-8 flex flex-col gap-0.5 group"
        )}
      >
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div
        className={classNames(
          "flex flex-col gap-0.5 pt-2 border-t border-neutral-700"
        )}
      >
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <Link to={"/login"}>
          <div
            className={classNames(
              "text-red-500 cursor-pointer",
              "flex items-center gap-2 font-light py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"
            )}
          >
            <span>
              <HiOutlineLogout />
            </span>
            <span className={`${!toggle && "hidden"}`}>

            Logout
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  const { toggle } = useContext(SidebarContext);

  return (
    <Link
      to={item.path}
      className={classNames(
        !toggle && "justify-center",
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        "relative flex items-center gap-2 font-light px-0 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base "
      )}
    >
      <span className="text-xl">{item.icon}</span>

      {!toggle ? (
        <div className="hidden">{item.label}</div>
      ) : (
        <div>{item.label}</div>
      )}
    </Link>
  );
};
