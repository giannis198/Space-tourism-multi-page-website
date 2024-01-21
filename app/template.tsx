"use client";

import { motion } from "framer-motion";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
