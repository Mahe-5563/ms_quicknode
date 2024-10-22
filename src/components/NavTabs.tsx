import { NavTabsProps } from "@/interfaces";
import { getAccentCode, loadAccentClass } from "@/operations/common";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

type NavTabsComponentProps = {
  nav_tabs: NavTabsProps,
  current_tab: { id: number, label: string },
  setCurrentTab: Dispatch<SetStateAction<any>>
}
export default function NavTabs({
  nav_tabs,
  current_tab,
  setCurrentTab,
}: NavTabsComponentProps) {
  const tab_items_style = `px-3 pb-2 border-b border-disabled text-sm`;
  // const active_tab_style = `!border-accent border-b-2 !text-accent`;
  
  const [theme_accent_present, setTheme_accent_present] = useState('');
  const [theme_color, setTheme_color] = useState('');

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
  }, []);

  useEffect(() => {
    if(theme_accent_present) {
      setTheme_color(getAccentCode(theme_accent_present));
    }
  }, [theme_accent_present])
  

  return (
    <div className="flex">
      {nav_tabs?.map((tab) => (
        <button 
          key={tab.id}
          className={`${tab_items_style} ${current_tab.id != tab.id && 'dark:!text-disabled'}`}
          onClick={() => { setCurrentTab(tab) }}
          style={{
            color: current_tab.id == tab.id && theme_color || "black",
            borderBottomWidth: current_tab.id == tab.id && '3px' || "",
            borderBottomColor: current_tab.id == tab.id && theme_color || "",
          }}
        >
          {tab.label}
        </button>
      ))}
      <div className="w-full border-b border-disabled"></div>
    </div>
  );
}
