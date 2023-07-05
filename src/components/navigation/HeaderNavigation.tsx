"use client";

import { useRouter } from "next/navigation";

interface HeaderNavigationProps {

}

const HeaderNavigation: React.FC<HeaderNavigationProps> = () => {

  const router = useRouter();

  const menuItems = [
    {
      name: "Home",
      link: '/',
    },
    {
      name: "Deputados",
      link: '/deputado'
    }
  ];

  const handleMenuClick = (link: string) => {
    router.push(link);
  }

  return (
    <nav className="header bg-[#1b2438] h-20 w-full px-16">
      <ul className="flex justify-start items-center h-full">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => handleMenuClick(item.link)}
              className="text-gray-100 hover:text-gray-300 cursor-pointer mr-6 font-semibold"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavigation;
