"use client";

interface HeaderNavigationProps {

}

const HeaderNavigation: React.FC<HeaderNavigationProps> = () => {
  return (
    <nav className="header bg-[#1b2438] h-20 w-full px-16">
      <ul className="flex justify-start items-center h-full">
        <li><a className="text-gray-100 hover:text-gray-300 cursor-pointer mr-6 font-semibold">Home</a></li>
        <li><a className="text-gray-100 hover:text-gray-300 cursor-pointer mx-6 font-semibold">Deputados</a></li>
        <li><a className="text-gray-100 hover:text-gray-300 cursor-pointer mx-6 font-semibold">Partidos</a></li>
        <li><a className="text-gray-100 hover:text-gray-300 cursor-pointer mx-6 font-semibold">Eventos</a></li>
        <li><a className="text-gray-100 hover:text-gray-300 cursor-pointer mx-6 font-semibold">Votações</a></li>
      </ul>
    </nav>
  )
}

export default HeaderNavigation;
