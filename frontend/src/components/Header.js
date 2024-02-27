import React from "react";

const Header = ({ tittle }) => {
  return (
    <nav className="bg-[#000] flex justify-center items-center font-['Railway',sans-serif]  text-center w-full ">
      <a
        href="/"
        className="relative w-full h-12 px-16 py-2 m-6 overflow-hidden text-2xl font-bold text-white uppercase text-wrap before:content-[''] before:top-0 before:left-0 before:bg-[linear_gradiant(120deg,transparent,#00fffc,transparent)] before:w-full before:h-full before:transform-[trans]  "
      >
        {tittle}
      </a>
    </nav>
  );
};

export default Header;

// style={before`${ content :"",  top:0, left:0, width:100%, height:100%, background:linear-gradiant-(120deg,transparent,#00fffc,transparent), transform:translatex(-100%) transition-0.6s, positon:absolute }`}
