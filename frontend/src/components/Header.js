import React from "react";
import { ReactComponent as Logo } from "../Images/Image Gallery.svg";

const Header = ({ tittle }) => {
  return (
    <nav className="bg-[#000] flex justify-center items-center font-['Railway',sans-serif]  text-center w-full py-4">
      {/* <a
        href="/"
        className="w-full py-2 overflow-hidden text-lg font-bold uppercase"
      > */}
      <Logo className="h-24 text-center right-1/2" alt={tittle} />
      {/* </a> */}
    </nav>
  );
};

export default Header;

// style={before`${ content :"",  top:0, left:0, width:100%, height:100%, background:linear-gradiant-(120deg,transparent,#00fffc,transparent), transform:translatex(-100%) transition-0.6s, positon:absolute }`}
