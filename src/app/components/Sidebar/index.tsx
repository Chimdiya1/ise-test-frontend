import { AiOutlineClose } from "react-icons/ai";
import SidebarLink from "../SidebarLink";

interface Props {
  navOpen: boolean;
  setNavOpen: (x: boolean) => void;
  name:string;
  email:string
}
export default function Sidebar({ navOpen, setNavOpen,name,email }: Props) {
  return (
    <>
      {navOpen && (
        <div className={`w-[210px] text-gray-200 bg-black h-full py-4 fixed z-20 md:hidden`}>
          <AiOutlineClose
            className="text-white cursor-pointer text-3xl mb-3 ml-auto mr-3"
            onClick={() => setNavOpen(false)}
          />
          <h4 className="text-center font-semibold text-xl">Ise Africa</h4>
          <div className="mx-auto flex w-full flex-col items-center mt-6 px-3 text-sm">
            <div className="w-28 h-28 bg-white rounded-full mb-4"></div>
            <p>{name}</p>
            <p>fortunechimdiya@gmail.com</p>
          </div>
          <div className="mt-12 flex flex-col">
            <SidebarLink text="Courses" url="/dashboard/overview" isActive />
            <SidebarLink text="My Lists" url="/dashboard/members" />
            <SidebarLink text="WishList" url="/dashboard/apps" />
            <SidebarLink text="Settings" url="/dashboard/settings" />
          </div>
        </div>
      )}
      {
        <div
          className={`w-[210px] text-gray-200 bg-black h-screen py-4 fixed  z-20 hidden md:block`}
        >
          <h4 className="text-center font-semibold text-xl">Ise Africa</h4>
          <div className="mx-auto flex w-full flex-col items-center mt-6 px-3 text-sm">
            <div className="w-28 h-28 bg-white rounded-full mb-4"></div>
            <p>{name}</p>
            <p>{email}</p>
          </div>
          <div className="mt-12 flex flex-col">
            <SidebarLink text="Courses" url="/dashboard/overview" isActive />
            <SidebarLink text="My Lists" url="/dashboard/members" />
            <SidebarLink text="WishList" url="/dashboard/apps" />
            <SidebarLink text="Settings" url="/dashboard/settings" />
          </div>
        </div>
      }
    </>
  );
}
