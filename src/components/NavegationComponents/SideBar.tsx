import { IconChartPie, IconBrandShopee, IconUsers } from "@tabler/icons-react";

export default function SideBar() {
  return (
    <>
      <div className=" w-full h-full">
        <nav className="grid grid-cols-1 bg-gray-800 h-full ">
          <ul className="flex flex-col gap-y-10 mt-8 m-4">
            <li>
              <a className="flex flex-row gap-x-3 cursor-pointer hover:bg-gray-600 rounded-lg p-2 ">
                <IconChartPie size={28} />
                <h1 className="text-xl">Dashboard</h1>
              </a>
            </li>
            <li>
              <a className="flex flex-row gap-x-3 cursor-pointer hover:bg-gray-600 rounded-lg p-2">
                <IconBrandShopee size={28} />
                <h1 className="text-xl">E-commerce</h1>
              </a>
            </li>
            <li>
              <a className="flex flex-row gap-x-3 cursor-pointer hover:bg-gray-600 rounded-lg p-2">
                <IconUsers size={28} />
                <h1 className="text-xl">Users</h1>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
