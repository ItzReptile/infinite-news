import { RiMenuSearchLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
const Navbar = () => {
  const links = [
    {
      label: "Politics",
      href: "/politics",
    },
    {
      label: "War In Ukraine",
      href: "/ukraine",
    },
    {
      label: "Economy",
      href: "/economy",
    },
    {
      label: "Climate",
      href: "/climate",
    },
    {
      label: "Sports",
      href: "/sports",
    },
    {
      label: "World",
      href: "/world",
    },
  ];

  return (
    <div className="w-[100%] h-[60px] p-4  border-b-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <RiMenuSearchLine className="text-3xl hover:bg-gray-200 rounded-full transition p-1" />
          <AiOutlineBell className="text-3xl hover:bg-gray-200 rounded-full transition p-1" />
          <ul className="hidden space-x-4 lg:block">
            {links.map((link) => (
              <a className="text-sm tracking-wide font-black text-[#242424] hover:bg-gray-200 rounded-full transition p-2" href={link.href}>{link.label}</a>
            ))}
            <a href=""></a>
          </ul>
        </div>
        <div className="lg:hidden">
            <h1 className="italic text-xl font-bold">
                INF NEWS
            </h1>
        </div>
        <div className="space-x-6 flex">
            <a href="/billing" className="border bg-[#3665ff] text-white font-semibold p-1  rounded-full hidden md:block hover:bg-blue-700  transition ">
                Subscribe
            </a>
            <a href="/register" className="text-md tracking-white font-black text-[#242424 ] hover:bg-gray-200 rounded-full transition p-1">
                Sign In
            </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
