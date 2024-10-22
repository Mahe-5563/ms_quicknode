'use client';
import { useEffect, useState } from "react";

import CTAButton from "./ButtonCTA";
import { ViewDropdownProps } from "@/interfaces";

export default function ViewDropdown({
  id,
  btn_type,
  btn_label,
  btn_class,
  icon,
  dd_size,
  children,
}: ViewDropdownProps) {

  const [open_dropdown, setOpen_dropdown] = useState<boolean>(false);
  const [size_dd, setSize_dd] = useState<string>("");

  useEffect(() => {
    checkDDSize();
  }, [dd_size])
  
  function checkDDSize() {
    switch(dd_size) {
      case "sm":
        setSize_dd("w-52");
        break;
      case "md":
        setSize_dd("w-64");
        break;
      case "lg":
        setSize_dd("w-72");
        break;
      case "xl":
        setSize_dd("w-96");
        break;
      default:
        setSize_dd("w-52");
    }
  }
  
  return (
    <div className="relative">
      <CTAButton
        id={id}
        onClick={() => { setOpen_dropdown(!open_dropdown) }}
        btn_type={btn_type}
        btn_label={btn_label}
        btn_class={btn_class}
        icon={icon}
      />

      {/* Dropdown component */}
      {open_dropdown && 
        <div className={`px-2 py-3 border rounded z-40 bg-gray-200 border-gray-400 shadow-xl absolute ${size_dd} right-0 dark:bg-zinc-800 dark:border-zinc-500`}>
          {children}
        </div>
      }
    </div>
  );
}
