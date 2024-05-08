import { AiFillSchedule, AiFillSetting } from "react-icons/ai";
import { IoIosNotifications, IoIosPeople } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import Router from "next/router";

const UserDashboardLayout = ({ children }) => {
  const handleLogOut = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("userInfoLocal");
    Router.push("/");
  };
  return (
    <div className="bg-[#F4F7FE] h-screen w-screen flex">
      <div className="sidebar w-80 bg-white h-screen px-9 py-12 overflow-hidden">
        <div>
          <Link href="/" passHref={true}>
            <a className="text-[#4318FF] flex flex-col pl-3">
              <span className="text-2xl uppercase font-extrabold">Experts</span>
              <span className="text-xs uppercase font-bold">Portal</span>
            </a>
          </Link>
        </div>
        {/* MENU */}
        <div className="flex flex-col justify-between h-full ">
          <div className="border-t-2 mt-6">
            <ul className="mt-6">
              <li className=" rounded-md text-base font-medium text-gray-500 hover:text-white  hover:bg-indigo-600">
                <Link href="/user-dashboard" passHref={true}>
                  <a className="w-full h-full flex p-3 ">
                    <RiDashboardFill className="w-6 h-6 mr-3" />
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>

              <li className=" rounded-md text-base font-medium text-gray-500 hover:text-white  hover:bg-indigo-600 mt-4">
                <Link href="/user-dashboard/appointments" passHref={true}>
                  <a className="w-full h-full flex p-3 ">
                    <AiFillSchedule className="w-6 h-6 mr-3" />
                    <span>Appointments</span>
                  </a>
                </Link>
              </li>
              <li className=" rounded-md text-base font-medium text-gray-500 hover:text-white  hover:bg-indigo-600 mt-4">
                <Link href="/user-dashboard/patients" passHref={true}>
                  <a className="w-full h-full flex p-3 ">
                    <IoIosPeople className="w-6 h-6 mr-3" />
                    <span>Experts</span>
                  </a>
                </Link>
              </li>
              <li className=" rounded-md text-base font-medium text-gray-500 hover:text-white  hover:bg-indigo-600 mt-4">
                <Link href="/user-dashboard/requests" passHref={true}>
                  <a className="w-full h-full flex p-3 ">
                    <IoIosNotifications className="w-6 h-6 mr-3" />
                    <span>Requests</span>
                  </a>
                </Link>
              </li>
              <li className=" rounded-md text-base font-medium text-gray-500 hover:text-white  hover:bg-indigo-600 mt-4">
                <Link href="/user-dashboard/settings" passHref={true}>
                  <a className="w-full h-full flex p-3 ">
                    <AiFillSetting className="w-6 h-6 mr-3" />
                    <span>Settings</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-12">
            <ul>
              <li className="rounded-md text-base font-medium text-gray-500 hover:text-white  hover:bg-indigo-600">
                <button
                  className="w-full h-full flex p-3 "
                  onClick={handleLogOut}
                >
                  <FiLogOut className="w-6 h-6 mr-3" />
                  <span>Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content w-full px-8 py-12 overflow-auto">{children}</div>
    </div>
  );
};

export default UserDashboardLayout;
