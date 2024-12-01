import React, { useEffect } from "react";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRouter } from "next/router";

const Header = () => {
  const [userData, setUserData] = React.useState<any>(null);
  const [isLogin, setIsLogin] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLogin(true);
      axios
        .get("http://localhost:3333/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setIsLogin(false);
        });
    } else {
      setIsLogin(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    setIsLogin(false);
    router.push("/login");
  };

  return (
    <div className="w-full h-[60px] px-8 bg-green-500 flex items-center justify-between">
      <p className="text-[20px] text-white">a board</p>

      {isLogin ? (
        <div className="text-white">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              {userData ? userData.username : "Loading..."}
              <IoIosArrowDown className="size-4 fill-white/60" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button
                  onClick={logout}
                  className="text-black bg-white group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/90"
                >
                  <p>logout</p>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      ) : (
        <button className="rounded-lg py-[10px] px-[16px] bg-[#49A569]">
          Sign in
        </button>
      )}
    </div>
  );
};

export default Header;
