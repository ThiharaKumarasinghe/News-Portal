"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "./ui/button";

const MobileMenu = () => {
  const [isMobileMenueOpen, isSetMobileOpen] = useState(false);
  const toggleMobileMenu = () => {
    isSetMobileOpen(!isMobileMenueOpen);
  };
  return (
    <div className="lg:hidden">
      <Button onClick={toggleMobileMenu}>
        {isMobileMenueOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </Button>
    </div>
  );
};

export default MobileMenu;
