import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import login from "../assets/login/login.png";
import { Castoro } from "next/font/google";
import Head from "next/head";

const castoro = Castoro({
  subsets: ["latin"],
  weight: "400",
});

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3333/auth/signin/", {
        username,
      });
      localStorage.setItem("access_token", response.data.access_token);
      router.push("/home");
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-green-500 w-screen h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-12 w-full h-full">
          <div className="col-span-7 flex items-center justify-center">
            <div className="flex flex-col md:w-[384px] sm:w-full px-4">
              <p
                className={`text-[24px] sm:text-[28px] font-semibold text-white ${castoro.className}`}
              >
                Sign in
              </p>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-lg py-[8px] sm:py-[10px] px-[12px] sm:px-[14px] mt-4 sm:mt-6"
              />
              <button
                onClick={handleSignIn}
                className="rounded-lg py-[8px] sm:py-[10px] px-[12px] sm:px-[14px] mt-4 sm:mt-6 bg-[#49A569] text-white"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="col-span-5 flex flex-col items-center justify-center bg-green-300 w-full h-full rounded-t-[36px] sm:rounded-l-[36px] sm:rounded-r-none">
            <Image src={login} alt="login" width={300} height={300} />
            <p
              className={`text-[24px] sm:text-[28px] text-white mt-2 ${castoro.className}`}
            >
              a Board
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
