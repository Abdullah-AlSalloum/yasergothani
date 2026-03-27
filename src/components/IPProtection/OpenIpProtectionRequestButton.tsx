"use client";

import React from "react";
import { motion } from "framer-motion";
import { OPEN_IP_PROTECTION_FORM_EVENT } from "./ipProtectionFormEvent";

type OpenIpProtectionRequestButtonProps = {
  label: string;
  className: string;
};

const OpenIpProtectionRequestButton: React.FC<OpenIpProtectionRequestButtonProps> = ({
  label,
  className,
}) => {
  const handleClick = () => {
    window.dispatchEvent(new Event(OPEN_IP_PROTECTION_FORM_EVENT));
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={className}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.button>
  );
};

export default OpenIpProtectionRequestButton;