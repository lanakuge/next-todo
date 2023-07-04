import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import Checkbox from "@/components/checkbox";

export default function Dashboard() {
  const router = useRouter();
  const test = [1, 2];
  // const test = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  async function refreshToken() {
    try {
      const response = await axiosToken.post(
        `${process.env.HOST}api/auth/token`,
        {},
        { withCredentials: true }
      );
      setToken(response.data.accessToken);
      const decoded = jwt.decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setExpire(decoded.exp);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      router.push("/auth/login");
    }
  }

  const axiosToken = axios.create();

  axiosToken.interceptors.request.use(
    async config => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.post(
          `${process.env.HOST}api/auth/token`,
          {},
          { withCredentials: true }
        );
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt.decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
  });

  async function logoutHander() {
    try {
      const data = await axios.delete(`${process.env.HOST}api/auth/logout`);
      router.push("/auth/login");
    } catch (error) {
      router.push("/auth/login");
      // console.log(error);
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div id="col">
          <div id="img-wrap">
            <span className="loader"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex">
        <div className="flex flex-col px-3 py-3 w-1/6 max-h-screen overflow-y-auto bg-black/10">
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
          <div className="w-full flex border border-stone-50/50 rounded-lg px-3 py-2 m-0">
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
              <p className="text-sm font-semibold w-full">{name}</p>
              <p className="text-xs font-light w-full">{email}</p>
            </div>
          </div>
          <hr className="my-6 w-full border-stone-50/50" />
          <div className="w-full flex flex-wrap m-0">
            <div className="w-full flex flex-wrap mb-6">
              <div className="w-full font-bold">
                <p className="text-indigo-400">Menu</p>
              </div>
              <div className="px-4 flex flex-col">
                <label>
                  <input
                    type="radio"
                    name="menu"
                    id="overview"
                    className="hidden peer"
                  />
                  <div className="px-2 py-1 border-0 rounded-md peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                    Overview
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="menu"
                    id="taskList"
                    className="hidden peer"
                    defaultChecked
                  />
                  <div className="px-2 py-1 border-0 rounded-md peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                    Task List
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="menu"
                    id="calendar"
                    className="hidden peer"
                  />
                  <div className="px-2 py-1 border-0 rounded-md peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                    Calendar
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="menu"
                    id="settings"
                    className="hidden peer"
                  />
                  <div className="px-2 py-1 border-0 rounded-md peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                    Settings
                  </div>
                </label>
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
          <div className="w-full mt-6">
            <button
              className="bg-red-600 text-stone-950 w-full border border-transparent rounded-md py-1 font-semibold duration-200 active:scale-105 hover:border-red-600 hover:text-red-600 hover:bg-stone-950 focus:border-red-600 focus:text-red-600 focus:bg-stone-950 mt-auto"
              onClick={logoutHander}>
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col w-5/6 px-3 py-3 max-h-screen overflow-y-auto">
          <div className="h-1/6"></div>
          <div className="h-2/6"></div>
          <div className="px-3 py-3 bg-stone-900/20 rounded-lg h-3/6 overflow-y-auto">
            <div className="flex flex-row text-center sticky top-0">
              <label className="w-full px-2">
                <input
                  type="radio"
                  name="due"
                  id="todo"
                  className="hidden peer"
                  defaultChecked
                />
                <div className="px-2 py-1 border-0 rounded-md bg-stone-950 text-stone-50 peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                  Todo
                </div>
              </label>
              <label className="w-full px-2">
                <input
                  type="radio"
                  name="due"
                  id="progress"
                  className="hidden peer"
                  defaultChecked
                />
                <div className="px-2 py-1 border-0 rounded-md bg-stone-950 text-stone-50 peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                  In Progress
                </div>
              </label>
              <label className="w-full px-2">
                <input
                  type="radio"
                  name="due"
                  id="completed"
                  className="hidden peer"
                  defaultChecked
                />
                <div className="px-2 py-1 border-0 rounded-md bg-stone-950 text-stone-50 peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                  Completed
                </div>
              </label>
              <label className="w-full px-2">
                <input
                  type="radio"
                  name="due"
                  id="overdue"
                  className="hidden peer"
                  defaultChecked
                />
                <div className="px-2 py-1 border-0 rounded-md bg-stone-950 text-stone-50 peer-checked:bg-indigo-400 peer-checked:text-stone-950 peer-checked:text-center">
                  Overdue
                </div>
              </label>
            </div>
            <div className="flex flex-wrap">
              {test.map((data, i) => {
                return (
                  <div className="w-1/4 p-2" key={i}>
                    <div className="border-0 rounded-md bg-red-950 px-3 py-2">
                      <div className="flex justify-between">
                        <p className="text-sm">Today</p>
                        <Checkbox />
                      </div>
                      <p className="text-2xl font-bold my-4">Title</p>
                      <p className="text-xs">09.00 AM - 09.30 AM</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
