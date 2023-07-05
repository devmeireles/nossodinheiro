"use client";

import Image from "next/image";

interface HeaderProps {
  title: string;
  image: string;
  bio?: string;
}

const SectionHeader: React.FC<HeaderProps> = ({ bio, image, title }) => {
  return (
    <>
      <div className="header bg-[#1b2438] w-full px-16">
        <div className="header__content flex justify-start items-start py-6">
          <div className="header__content-image">
            <Image src={image} alt={title} width={128} height={256} />
          </div>

          <div className="header__content-title ml-4 w-7/12 text-gray-100">
            <h1 className="text-3xl font-semibold mb-2">{title}</h1>
            {bio && <p className="text-sm">{bio}</p>}
          </div>
        </div>
      </div>
    </>

  )
}

export default SectionHeader;