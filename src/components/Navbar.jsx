// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <a href="/" className="text-2xl md:text-5xl text-white font-semibold">Dula</a>
//         <div className="mobile-menu block md:hidden">
//           <button
//             onClick={() => setNavbarOpen(!navbarOpen)}
//             className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//           >
//             {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
//           </button>
//         </div>
//         <div className={`menu ${navbarOpen ? '' : 'hidden'} md:flex md:w-auto`} id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen && <MenuOverlay links={navLinks} />}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LetsTalk from "./LetsTalk";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Capabilities", path: "#capabilities" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[#33353F] bg-[#0a0a0c]/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4">
        <a href="/" className="font-serif text-2xl md:text-4xl font-black text-white">Dula</a>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
          className="md:hidden flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white">
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((l) => (
              <li key={l.title}><NavLink href={l.path} title={l.title} /></li>
            ))}
          </ul>
          <LetsTalk />
        </div>
      </div>

      {open && (
        <div className="md:hidden" onClick={() => setOpen(false)}>
          <MenuOverlay links={navLinks} />
          <div className="flex justify-center pb-6"><LetsTalk /></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;