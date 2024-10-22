import { useEffect } from 'react';

import { ProfileFormProps } from "@/interfaces";
import { Button } from "@mui/base";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type InterfaceThemeProps = {
  formDetails: ProfileFormProps;
  setFormDetails: Dispatch<SetStateAction<ProfileFormProps>>;
  div_class?: string;
  active_theme?: string;
};

export default function SelectInteraceTheme({
  formDetails,
  setFormDetails,
  div_class,
  active_theme,
}: InterfaceThemeProps) {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setFormDetails({ ...formDetails, interface_theme: theme });
  }, [theme]);

  return (
    <div className={`flex my-2 ${div_class}`}>
      <label className={`w-1/5 text-sm mr-4`}>{'Interface Theme'}</label>
      <div className="flex gap-4 w-4/5">
        <Button
          onClick={() => { setTheme("light") }}
          className={`p-1 rounded-xl relative ${theme != "light" && 'bg-white dark:bg-black'}`}
          style={{
            backgroundColor: theme == "light" ? active_theme : '',
          }}
        >
          <Image
            src={"/icons/light/interface-light.svg"}
            width={250}
            height={100}
            alt="Interface light"
          />
          {theme == "light" &&
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="30" 
              width="30" 
              viewBox="0 -960 960 960" 
              fill={"#FFFFFF"}
              className={`absolute bottom-4 right-4 rounded-full`}
              style={{
                backgroundColor: active_theme
              }}
            >
              <path 
                d="m382-339.38 345.54-345.54q8.92-8.93 20.88-9.12 11.96-.19 21.27 9.12 9.31 9.31 9.31 21.38 0 12.08-9.31 21.39l-362.38 363q-10.85 10.84-25.31 10.84-14.46 0-25.31-10.84l-167-167q-8.92-8.93-8.8-21.2.11-12.26 9.42-21.57t21.38-9.31q12.08 0 21.39 9.31L382-339.38Z"
              />
            </svg>
          }
        </Button>
        <Button
          onClick={() => { setTheme("dark") }}
          className={`p-1 rounded-xl relative ${theme != "dark" && 'bg-white dark:bg-black'}`}
          style={{
            backgroundColor: theme == "dark" ? active_theme : '',
          }}
        >
          <Image
            src={"/icons/dark/interface-dark.svg"}
            width={250}
            height={100}
            alt="Interface dark"
          />
          {theme == "dark" && 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="30" 
              width="30" 
              viewBox="0 -960 960 960" 
              fill={"#FFFFFF"}
              className={`absolute bottom-4 right-4 rounded-full`}
              style={{
                backgroundColor: active_theme
              }}
            >
              <path 
                d="m382-339.38 345.54-345.54q8.92-8.93 20.88-9.12 11.96-.19 21.27 9.12 9.31 9.31 9.31 21.38 0 12.08-9.31 21.39l-362.38 363q-10.85 10.84-25.31 10.84-14.46 0-25.31-10.84l-167-167q-8.92-8.93-8.8-21.2.11-12.26 9.42-21.57t21.38-9.31q12.08 0 21.39 9.31L382-339.38Z"
              />
            </svg>
          }
        </Button>
      </div>
    </div>
  );
}
