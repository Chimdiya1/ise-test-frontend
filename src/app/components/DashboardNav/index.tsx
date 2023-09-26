import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { deleteCookie } from "cookies-next";
interface Props {
  navOpen?: boolean;
  setNavOpen: (x: boolean) => void;
}
export default function DashboardNav({ setNavOpen }: Props) {
  return (
    <div className="flex flex-col items-start w-full p-3 px-5 lg:pr-20 mt-auto mr-auto mb-auto ml-auto justify-between bg-[#e2e2e29c]  max-w-screen-2xl md:flex-row">
      <div className="flex w-full md:w-1/2 lg:w-4/12 items-center">
        <AiOutlineMenu
          className="text-3xl mr-3 md:hidden cursor-pointer"
          onClick={() => setNavOpen(true)}
        />
        <div className="flex w-full ">
          <div className="relative w-full">
            <FiSearch className="absolute top-[30%] left-6 text-base text-[#999999]" />
            <input
              type="text"
              placeholder="Search"
              className="border-[.5px] border-[#e2e2e230] bg-white px-14 py-2 rounded-3xl placeholder:text-sm w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 self-end mt-2 lg:mt-0">
        <BsBell className="text-xl font-semibold cursor-pointer" />
        <div className="rounded-full bg-violet-600 text-xs md:text-base text-white w-5 h-6 md:w-10 md:h-10 flex items-center justify-center md:font-bold uppercase">
          CA
        </div>
        <p
          className=" text-red-400 cursor-pointer"
          onClick={() => {
            deleteCookie("token");
            window.location.href = "/auth/login";
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
}
