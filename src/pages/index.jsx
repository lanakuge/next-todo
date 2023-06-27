import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [hamburger, setHamburger] = useState(false);
  const feature = [
    {
      title: "Easy Task Management",
      desc: "Create, update, and prioritize tasks effortlessly. Ouruser-friendly interface allows you to quickly add new tasks, set due dates, and mark them as complete.",
    },
    {
      title: "Flexible Task Organization",
      desc: "Categorize your tasks into lists or create custom tags to organize them according to your preferences.",
    },
    {
      title: "Personalized Dashboard",
      desc: "Customize your dashboard to display the information that matters most to you.",
    },
    {
      title: "Collaborative Workspaces",
      desc: "Collaborate seamlessly with friends, family, or colleagues. Share task lists, assign tasks to team members, and track progress together.",
    },
    {
      title: "Mobile Accessibility",
      desc: "Access your to-do lists on the go. Our responsive design ensures that you can manage your tasks from any device, whether it's your smartphone, tablet, or computer.",
    },
  ];
  const technologies = [
    { name: "ReactJS", link: "/technologies/react.png" },
    { name: "Vercel", link: "/technologies/vercel.svg" },
    { name: "Tailwind CSS", link: "/technologies/tailwind.png" },
    { name: "PostgreSQL", link: "/technologies/postgresql.png" },
    { name: "JWT", link: "/technologies/jwt.png" },
    { name: "Supabase", link: "/technologies/supabase.png" },
    { name: "NodeJS", link: "/technologies/node.png" },
    { name: "Webpack", link: "/technologies/webpack.png" },
    { name: "Google", link: "/technologies/google.png" },
    { name: "Freepik", link: "/technologies/freepik.png" },
  ];

  function hamburgerHandler() {
    const navResponsive = document.getElementById("nav-responsive");
    const checkboxHamburger = document.getElementById("hamburger");
    setHamburger(!hamburger);
    if (hamburger == false) {
      checkboxHamburger.checked = true;
      navResponsive.classList.add("-translate-y-0");
      navResponsive.classList.remove("-translate-y-56");
    } else {
      checkboxHamburger.checked = false;
      navResponsive.classList.remove("-translate-y-0");
      navResponsive.classList.add("-translate-y-56");
    }
  }

  return (
    <>
      {/* Navbar */}
      <div className="backdrop-blur-lg bg-stone-950/70 sticky top-0 z-40">
        <div className="container flex flex-wrap justify-between">
          <div className="m-4 flex items-center font-bold">
            <Link
              className="px-4 py-2 text-xl rounded-lg text-stone-50"
              href=".">
              Lana<span className="text-indigo-400">Task</span>
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
              href="#"
              scroll={false}>
              Dashboard
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#features"
              scroll={false}>
              Features
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#"
              scroll={false}>
              Pricing
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
              href="#"
              scroll={false}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div
        id="nav-responsive"
        className="container fixed top-0 flex flex-wrap text-center -translate-y-56 duration-500 backdrop-blur-lg bg-stone-950/70 z-30">
        <div className="w-full h-[76px] bg-black">.</div>
        <div className="w-full m-2">
          <Link
            className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
            href="#"
            scroll={false}
            onClick={hamburgerHandler}>
            Dashboard
          </Link>
        </div>
        <div className="w-full m-2">
          <Link
            className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
            href="#features"
            scroll={false}
            onClick={hamburgerHandler}>
            Features
          </Link>
        </div>
        <div className="w-full m-2">
          <Link
            className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
            href="#"
            scroll={false}
            onClick={hamburgerHandler}>
            Pricing
          </Link>
        </div>
        <div className="w-full m-2">
          <Link
            className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
            href="#"
            scroll={false}
            onClick={hamburgerHandler}>
            Login
          </Link>
        </div>
      </div>
      {/* Content */}
      <div className="container flex flex-wrap my-16 scroll-m-16">
        <div className="sm:w-1/2 w-full px-4">
          <p className="text-7xl font-extrabold text-stone-50 my-4 sm:text-left text-center">
            Welcome to Lana<span className="text-indigo-400">Task</span>
          </p>
          <p className="text-stone-50 mt-4 mb-8 sm:text-left text-center">
            Stay organized and boost your productivity with our intuitive and
            feature-rich to-do list tool.{" "}
            <span className="lg:inline hidden">
              Whether you're managing personal tasks, organizing projects, or
              collaborating with a team, our platform has you covered.
              Streamline your workflow, set priorities, and never miss a
              deadline again.
            </span>
          </p>
          <div className="sm:text-left text-center">
            <Link
              href="#"
              className="px-4 py-2 rounded-lg font-bold text-stone-950 bg-indigo-400">
              Try it for free
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-4 flex justify-center sm:justify-end items-center sm:mt-0 mt-8">
          <div className="w-4/5 flex justify-center">
            <Image
              src="/landingpage-img.png"
              alt="Landing Page Image"
              width="400"
              height="400"
              priority={true}
            />
          </div>
        </div>
      </div>
      {/* feature */}
      <div className="container my-32 sm:px-0">
        <p
          id="features"
          className="font-bold text-indigo-400 text-center text-4xl mb-4 scroll-mt-24">
          Features
        </p>
        <div className="flex flex-wrap text-stone-50 justify-evenly px-16">
          {feature.map((data, index) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
                <p className="font-semibold text-indigo-400 text-center lg:text-left">
                  {data.title}
                </p>
                <p className="text-center lg:text-left">{data.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="container my-32 sm:px-0">
          <p className="font-bold text-indigo-400 text-center text-4xl mb-8 scroll-mt-24">
            Technologies
          </p>
          <div className="flex flex-wrap text-stone-50 justify-evenly px-16">
            {technologies.map((data, index) => {
              return (
                <div
                  className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center p-4 group relative"
                  key={index}>
                  <Image
                    src={data.link}
                    alt={data.name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full sm:w-3/4 lg:w-2/4 h-auto"
                    priority={true}
                  />
                  <span className="absolute top-10 scale-0 transition-all rounded -translate-y-14 bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                    {data.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
