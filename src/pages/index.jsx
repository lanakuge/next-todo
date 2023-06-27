import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [hamburger, setHamburger] = useState(false);

  function hamburgerHandler() {
    const navResponsive = document.getElementById("nav-responsive");
    setHamburger(!hamburger);

    if (hamburger == false) {
      navResponsive.classList.add("flex");
      navResponsive.classList.remove("hidden");
    } else {
      navResponsive.classList.remove("flex");
      navResponsive.classList.add("hidden");
    }
  }

  return (
    <>
      {/* Navbar */}
      <div className="backdrop-blur-lg bg-stone-950/70 sticky top-0 z-40 shadow-lg">
        <div className="container flex flex-wrap justify-between">
          <div className="m-4 flex items-center font-bold">
            <Link
              className="px-4 py-2 text-xl rounded-lg text-stone-50"
              href=".">
              lana<span className="text-indigo-400">Task</span>
            </Link>
          </div>
          <div className="m-4 px-4 items-center font-semibold gap-2 sm:hidden flex">
            <input type="checkbox" id="hamburger" onClick={hamburgerHandler} />
            <label htmlFor="hamburger" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          <div className="m-4 items-center font-semibold gap-2 sm:flex hidden">
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#">
              Feature
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#">
              Pricing
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#">
              Login
            </Link>
          </div>
        </div>
        <div
          id="nav-responsive"
          className="container hidden flex-wrap text-center">
          <div className="w-full m-2">
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#">
              Feature
            </Link>
          </div>
          <div className="w-full m-2">
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#">
              Pricing
            </Link>
          </div>
          <div className="w-full m-2">
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#">
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="container flex my-16">
        <div className="w-1/2 px-4">
          <p className="text-7xl font-extrabold text-stone-50 my-4">
            Welcome to Lana<span className="text-indigo-400">Task</span>
          </p>
          <p className="text-stone-50 mt-4 mb-8">
            Stay organized and boost your productivity with our intuitive and
            feature-rich to-do list tool. Whether you're managing personal
            tasks, organizing projects, or collaborating with a team, our
            platform has you covered. Streamline your workflow, set priorities,
            and never miss a deadline again.
          </p>
          <Link
            href="#"
            className="px-4 py-2 rounded-lg font-bold text-stone-950 bg-indigo-400">
            Try it for free
          </Link>
        </div>
        <div className="w-1/2 px-4 flex justify-center">
          <Link href="https://storyset.com/growth">
            <Image
              src="/landingpage-img.png"
              alt="Landing Page Image"
              width="400"
              height="400"
              priority={true}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
