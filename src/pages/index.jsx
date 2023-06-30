import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";

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
    { name: "NextJS", link: "/technologies/next.svg" },
    { name: "Vercel", link: "/technologies/vercel.svg" },
    { name: "Tailwind CSS", link: "/technologies/tailwind.png" },
    { name: "PostgreSQL", link: "/technologies/postgresql.png" },
    { name: "JWT", link: "/technologies/jwt.png" },
    { name: "Supabase", link: "/technologies/supabase.png" },
    { name: "NodeJS", link: "/technologies/node.png" },
    { name: "Webpack", link: "/technologies/webpack.png" },
    { name: "Google", link: "/technologies/google.png" },
    { name: "Github", link: "/technologies/github.png" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

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
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400 duration-300"
              href="/dashboard"
              scroll={false}>
              Dashboard
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400 duration-300"
              href="#features"
              scroll={false}>
              Features
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400 duration-300"
              href="#pricing"
              scroll={false}>
              Pricing
            </Link>
            <Link
              className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400 duration-300"
              href="./auth/login"
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
            href="/dashboard"
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
            href="#pricing"
            scroll={false}
            onClick={hamburgerHandler}>
            Pricing
          </Link>
        </div>
        <div className="w-full m-2">
          <Link
            className="px-4 py-2 rounded-lg text-stone-50 hover:text-indigo-400"
            href="./auth/login"
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
              Whether you&apos;re managing personal tasks, organizing projects,
              or collaborating with a team, our platform has you covered.
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
      <hr className="border-stone-800" />
      {/* feature */}
      <div id="features" className="container my-32 sm:px-0 scroll-mt-24">
        <p
          className="font-bold text-indigo-400 text-center text-4xl mb-4"
          data-aos="fade-up">
          Features
        </p>
        <div className="flex flex-wrap text-stone-50 justify-evenly px-16">
          {feature.map((data, index) => {
            return (
              <div
                className="w-full md:w-1/2 lg:w-1/3 p-4"
                key={index}
                data-aos="zoom-in">
                <p className="font-semibold text-indigo-400 text-center lg:text-left">
                  {data.title}
                </p>
                <p className="text-center lg:text-left">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="border-stone-800" />
      {/* technologies */}
      <div className="container my-32 sm:px-0">
        <p
          className="font-bold text-indigo-400 text-center text-4xl mb-8 scroll-mt-24"
          data-aos="fade-up">
          Technologies
        </p>
        <div className="flex flex-wrap text-stone-50 justify-evenly px-16">
          {technologies.map((data, index) => {
            return (
              <div
                className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center p-4 group relative"
                key={index}
                data-aos="zoom-in">
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
      <hr className="border-stone-800" />
      {/* pricing */}
      <div id="pricing" className="container my-32 sm:px-0 scroll-mt-24">
        <p
          className="font-bold text-indigo-400 text-center text-4xl mb-4"
          data-aos="fade-up">
          Pricing
        </p>
        <p
          className="text-stone-50 text-center mb-8 px-6 sm:px-0"
          data-aos="fade-up">
          Start building for free, collaborate with a team, then scale to
          millions of users
        </p>
        <div className="flex flex-wrap text-stone-50 justify-evenly px-16 overflow-x-hidden">
          <div
            className="w-full px-0 md:px-4 lg:px-0 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0"
            data-aos="fade-right">
            <div className="rounded-lg bg-stone-900 shadow-lg px-5 py-4 border border-black">
              <p className="font-semibold text-xl text-stone-50">Free Plan</p>
              <p className="font-extralight text-sm text-stone-50 mb-1">
                Perfect for high school student
              </p>
              <hr className="mb-10 mt-4 opacity-30" />
              <p className="text-5xl font-bold text-stone-50">
                $0<span className="text-sm font-extralight">/month</span>
              </p>
              <hr className="mt-10 mb-4 opacity-30" />
              <ul className="text-stone-50">
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Easy Task Management
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Flexible Task Organization
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Personalized Dashboard
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Collaborative Workspaces
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Unlimited Access
                </li>
                <li className="mb-2">
                  <Image
                    src="x.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Support Developers
                </li>
              </ul>
              <div className="flex justify-center mt-6">
                <Link
                  href="#"
                  className="w-full py-2 rounded-lg text-center font-bold border border-transparent text-stone-950 bg-indigo-400 hover:bg-stone-900 hover:text-indigo-400 hover:border-indigo-400 hover:border duration-150">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div
            className="w-full px-0 md:px-4 lg:px-0 md:w-1/2 lg:w-1/3 xl:w-1/4"
            data-aos="fade-left">
            <div className="rounded-lg bg-stone-900 shadow-lg px-5 py-4 border border-black">
              <p className="font-semibold text-xl text-stone-50">Profesional</p>
              <p className="font-extralight text-sm text-stone-50 mb-1">
                Perfect for worker
              </p>
              <hr className="mb-10 mt-4 opacity-30" />
              <p className="text-5xl font-bold text-stone-50">
                $1<span className="text-sm font-extralight">/month</span>
              </p>
              <hr className="mt-10 mb-4 opacity-30" />
              <ul className="text-stone-50">
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Easy Task Management
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Flexible Task Organization
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Personalized Dashboard
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Collaborative Workspaces
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Unlimited Access
                </li>
                <li className="mb-2">
                  <Image
                    src="check.svg"
                    alt=""
                    width="20"
                    height="20"
                    className="inline mr-1"
                  />
                  Support Developers
                </li>
              </ul>
              <div className="flex justify-center mt-6">
                <Link
                  href="https://saweria.co/lanakuge"
                  target="_blank"
                  className="w-full py-2 rounded-lg text-center font-bold border border-transparent text-stone-950 bg-indigo-400 hover:bg-stone-900 hover:text-indigo-400 hover:border-indigo-400 hover:border duration-150">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-stone-800" />
      {/* footer */}
      <div className="container mt-32 mb-16 sm:px-0">
        <div className="flex flex-wrap text-stone-50 justify-evenly px-16 overflow-y-hidden">
          <div className="lg:w-2/6 w-full flex flex-wrap" data-aos="fade-up">
            <div className="w-full justify-center text-center">
              <Link
                className="px-4 py-2 text-4xl rounded-lg font-black text-stone-50"
                href=".">
                Lana<span className="text-indigo-400">Kuge</span>
              </Link>
            </div>
            <div className="w-full flex justify-evenly mt-4 lg:mt-2 opacity-75">
              <div className="sm:w-[12%] w-1/6">
                <Link href="https://instagram.com/maulananizhar_">
                  <Image
                    src="/social/instagram.svg"
                    alt="Instagram"
                    width="30"
                    height="30"
                    className="m-auto"
                    priority={true}
                  />
                </Link>
              </div>
              <div className="sm:w-[12%] w-1/6">
                <Link href="https://github.com/lanakuge">
                  <Image
                    src="/social/github.svg"
                    alt="Github"
                    width="30"
                    height="30"
                    className="m-auto"
                    priority={true}
                  />
                </Link>
              </div>
              <div className="sm:w-[12%] w-1/6">
                <Link href="https://twitter.com">
                  <Image
                    src="/social/twitter.svg"
                    alt="Twitter"
                    width="30"
                    height="30"
                    className="m-auto"
                    priority={true}
                  />
                </Link>
              </div>
              <div className="sm:w-[12%] w-1/6">
                <Link href="https://youtube.com">
                  <Image
                    src="/social/youtube.svg"
                    alt="YouTube"
                    width="30"
                    height="30"
                    className="m-auto"
                    priority={true}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/6 w-full pl-0 lg:pl-4 text-center lg:text-left mt-8 lg:mt-0 font-light text-stone-50"
            data-aos="fade-up">
            <p className="font-bold mb-2">Product</p>
            <Link
              href="."
              className="hover:text-indigo-400 duration-300 block opacity-75 text-base">
              LanaTask
            </Link>
          </div>
          <div
            className="lg:w-1/6 w-full pl-0 lg:pl-4 text-center lg:text-left mt-8 lg:mt-0 font-light text-stone-50"
            data-aos="fade-up">
            <p className="font-bold  mb-2">Developers</p>
            <Link
              href="https://saweria.co/lanakuge"
              className="hover:text-indigo-400 duration-300 block opacity-75 text-base">
              Support
            </Link>
          </div>
          <div
            className="lg:w-1/6 w-full pl-0 lg:pl-4 text-center lg:text-left mt-8 lg:mt-0 font-light text-stone-50"
            data-aos="fade-up">
            <p className="font-bold  mb-2">Contact</p>
          </div>
          <div
            className="lg:w-1/6 w-full pl-0 lg:pl-4 text-center lg:text-left mt-8 lg:mt-0 font-light text-stone-50"
            data-aos="fade-up">
            <p className="font-bold  mb-2">Company</p>
            <Link
              href="."
              className="hover:text-indigo-400 duration-300 block opacity-75 text-base">
              Terms of Service
            </Link>
            <Link
              href="."
              className="hover:text-indigo-400 duration-300 block opacity-75 text-base">
              Privacy Policy
            </Link>
            <Link
              href="."
              className="hover:text-indigo-400 duration-300 block opacity-75 text-base">
              Support Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
