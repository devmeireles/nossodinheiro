"use client";

import { Gabinete } from "@/interfaces/deputado.interface";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { CiTwitter, CiYoutube } from "react-icons/ci";

interface DeputadoContactsProps {
  social?: string[];
  gabinete?: Gabinete;
}

const DeputadoContacts: React.FC<DeputadoContactsProps> = ({ gabinete, social }) => {
  return (
    <div className="deputado-contact">

      <div className="flex">
        {gabinete && (
          <>
            <AiOutlinePhone size={22} className="mr-2 cursor-pointer" />
            <AiOutlineMail size={22} className="mr-2 cursor-pointer" />
          </>
        )}

        {(social && social.length > 0) && (
          <>
            <CiTwitter size={22} className="mr-2 cursor-pointer" />
            <AiOutlineFacebook size={22} className="mr-2 cursor-pointer" />
            <AiOutlineInstagram size={22} className="mr-2 cursor-pointer" />
            <CiYoutube size={22} className="mr-2 cursor-pointer" />
          </>
        )}
      </div>

    </div>
  );
}

export default DeputadoContacts;