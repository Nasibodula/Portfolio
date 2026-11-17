import React, { useState } from "react";
import { motion } from "framer-motion";

export const EMAIL = "nasibochudo@gmail.com";

const spring = { type: "spring", stiffness: 300, damping: 22 };

const LetsTalk = () => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={`mailto:${EMAIL}`}
      aria-label={`Email ${EMAIL}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#2B2E3A] text-[#D4D5D7] text-sm font-semibold whitespace-nowrap transition-colors duration-300 hover:bg-cyan-400 hover:text-[#0a0a0c]"
    >
      <motion.span aria-hidden animate={{ opacity: hover ? 1 : 0, x: hover ? 3 : -10 }} transition={spring}>➔</motion.span>
      <motion.span animate={{ x: hover ? 20 : 0 }} transition={spring}>LET'S TALK&nbsp;</motion.span>
      <motion.span aria-hidden animate={{ opacity: hover ? 0 : 1, x: hover ? 5 : 0 }} transition={spring}>&nbsp;•&nbsp;</motion.span>
    </a>
  );
};

export default LetsTalk;