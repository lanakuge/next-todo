import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <div className="flex divide-x divide-stone-50/50">
        <div className="flex flex-wrap w-1/6 mx-4 my-3 max-h-full">
          <div className="text-left w-full">
            <Link
              className="text-xl rounded-lg text-stone-50 font-bold"
              href="/">
              Lana<span className="text-indigo-400">Task</span>
            </Link>
            <p className="text-xs text-stone-50/80">
              Enchant your productivity
            </p>
          </div>
          <hr className="my-6 w-full border-stone-50/50" />
          <div className="w-full flex border border-stone-50/50 rounded-lg px-3 py-2">
            <div className="flex justify-center items-center w-1/5">
              <Image
                src="/profile.svg"
                alt="Profile"
                width="30"
                height="30"
                className="m-auto fill-white"
                priority={true}
              />
            </div>
            <div className="w-4/5 flex flex-wrap px-3">
              <p className="text-sm font-semibold w-full">Jon Snow</p>
              <p className="text-xs font-light w-full">jon@gmail.com</p>
            </div>
          </div>
          <hr className="my-6 w-full border-stone-50/50" />
          <div className="w-full flex flex-wrap">
            <div className="w-full flex flex-wrap mb-6">
              <div className="w-full font-bold">
                <p className="text-indigo-400">Menu</p>
              </div>
              <div className="w-full px-4">
                <p className="mt-2">Overview</p>
                <p className="mt-2">Task List</p>
                <p className="mt-2">Calendar</p>
                <p className="mt-2">Settings</p>
              </div>
            </div>
            <div className="w-full flex flex-wrap">
              <div className="w-full font-bold">
                <p className="text-indigo-400">List</p>
              </div>
              <div className="w-full px-4">
                <p className="mt-2">Personal</p>
                <p className="mt-2">Design</p>
                <p className="mt-2">Project</p>
                <p className="mt-2">School</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-auto order-last">
            <button className="bg-red-600 text-stone-950 w-full border border-transparent rounded-md py-1 font-semibold duration-200 active:scale-105 hover:border-red-600 hover:text-red-600 hover:bg-stone-950 focus:border-red-600 focus:text-red-600 focus:bg-stone-950 mt-auto">
              Logout
            </button>
          </div>
        </div>
        <div className="flex w-5/6">woke</div>
      </div>
    </>
  );
}
