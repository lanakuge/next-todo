import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="container flex justify-center items-center h-screen">
        <div className="w-9/12 sm:w-8/12 lg:w-1/2 xl:w-1/3 border rounded-lg border-black bg-black px-10 sm:px-16 py-12 shadow-lg">
          <form>
            <p className="text-center text-2xl font-black text-stone-50">
              Register
            </p>
            <label htmlFor="name" className="block mb-4">
              <span className="block text-sm text-stone-400 mb-1">Name</span>
              <input
                type="text"
                id="name"
                className="bg-black border rounded-md border-white/50 w-full text-stone-400 px-2 py-1 ring-white focus:ring-1"
                required
              />
            </label>
            <label htmlFor="email" className="block mb-4">
              <span className="block text-sm text-stone-400 mb-1">Email</span>
              <input
                type="email"
                id="email"
                className="bg-black border rounded-md border-white/50 w-full text-stone-400 px-2 py-1 ring-white focus:ring-1"
                required
              />
            </label>
            <label htmlFor="password" className="block mb-4">
              <span className="block text-sm text-stone-400 mb-1">
                Password
              </span>
              <input
                type="password"
                id="password"
                className="bg-black border rounded-md border-white/50 w-full text-stone-400 px-2 py-1 ring-white focus:ring-1"
                required
              />
            </label>
            <label htmlFor="confirm" className="block">
              <span className="block text-sm text-stone-400 mb-1">
                Confirm Password
              </span>
              <input
                type="password"
                id="confirm"
                className="bg-black border rounded-md border-white/50 w-full text-stone-400 px-2 py-1 ring-white focus:ring-1"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-indigo-400 text-black w-full border border-transparent rounded-md mt-6 py-1 font-semibold duration-200 active:scale-105 hover:border-indigo-400 hover:text-indigo-400 hover:bg-black focus:border-indigo-400 focus:text-indigo-400 focus:bg-black">
              Register
            </button>
          </form>
          <p className="text-center text-stone-400 my-6 w-full border-b border-b-stone-400 leading-[0.1em]">
            <span className="px-2 bg-black">OR</span>
          </p>
          <button className="bg-black text-white/80 w-full border border-white/50 rounded-md py-1 font-semibold duration-200 my-1 active:scale-105 hover:border-indigo-400 hover:text-indigo-400 hover:bg-black focus:border-indigo-400 focus:text-indigo-400 focus:bg-black">
            Login with Google
          </button>
          <button className="bg-black text-white/80 w-full border border-white/50 rounded-md py-1 font-semibold duration-200 my-1 active:scale-105 hover:border-indigo-400 hover:text-indigo-400 hover:bg-black focus:border-indigo-400 focus:text-indigo-400 focus:bg-black">
            Login with Facebook
          </button>
          <Link
            href="/"
            className="bg-black text-white/80 w-full inline-block text-center border border-white/50 rounded-md py-1 font-semibold duration-200 my-1 active:scale-105 hover:border-indigo-400 hover:text-indigo-400 hover:bg-black focus:border-indigo-400 focus:text-indigo-400 focus:bg-black">
            Back
          </Link>
          <div className="text-center mt-2">
            <Link
              className="text-indigo-400 text-sm my-6 duration-200 hover:text-indigo-500"
              href="./login">
              Have account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
