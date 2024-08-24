import { TbTruckDelivery } from "react-icons/tb";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";



export const Sidebar = () => {



  return (
    <div className={classNames(" bg-neutral-800 text-gray-300 w-60 p-3 flex flex-col")}>
      <div className="flex items-center  font-semibold py-3 border border-gray-400 rounded-md justify-center">
        <button className={classNames("text-green-600")}>
          <TbTruckDelivery />
        </button>
        <p className={classNames("text-green-600 pl-2 text-sm")}>DISTRIBUCIONES</p>
        <p className={classNames("bg-green-900 px-1 text-sm rounded-sm")}>MADRID</p>
      </div>
      <div className={classNames("flex-1 py-8 flex flex-col gap-0.5")}>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className={classNames("flex flex-col gap-0.5 pt-2 border-t border-neutral-700")}>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
          <span>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};
