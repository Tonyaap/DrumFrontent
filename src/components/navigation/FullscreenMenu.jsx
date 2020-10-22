import React, { useState } from "react";
import { motion } from "framer-motion";

import "./FullscreenMenu.css";

export default function FullscreenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="FullscreenMenu">
          <ul>
            {["Home", "DrumMachine", "Portfolio", "Contact"].map((text, i) => {
              return (
                <li key={i} style={{ animationDelay: `${100 * i}ms` }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button
        className="FullscreenMenuToggler"
        style={{ color: open ? "white" : "black" }}
        onClick={() => setOpen(!open)}
      >
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <motion.line
              x1="0"
              y1="4"
              x2="24"
              y2="4"
              animate={{
                x1: open ? 4 : 0,
                x2: open ? 20 : 24,
                y2: open ? 20 : 4,
              }}
            />
            <motion.line
              x1="0"
              y1="12"
              x2="24"
              y2="12"
              animate={{
                x1: open ? 12 : 0,
                x2: open ? 12 : 24,
              }}
            />
            <motion.line
              x1="0"
              y1="20"
              x2="24"
              y2="20"
              animate={{
                x1: open ? 4 : 0,
                x2: open ? 20 : 24,
                y2: open ? 4 : 20,
              }}
            />
          </g>
        </svg>
      </button>
    </>
  );
}
