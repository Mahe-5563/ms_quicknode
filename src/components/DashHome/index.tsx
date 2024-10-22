'use client';
import { useState, useEffect } from 'react';

import { getAccentCode, loadAccentClass } from '@/operations/common';
// import FilterAndViewType from '../FilterAndViewType';
import DashboardList from './DashList';
import DashboardGrid from './DashGrid';

export default function DashboardMain() {

  const [theme_accent_present, setTheme_accent_present] = useState<string>();
  const [bg_color, setBg_color] = useState('');
  const [is_profile, setIs_profile] = useState<boolean>(false);
  const [view_type] = useState<string>("grid");

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
    checkProfileDetails();
  }, []);

  useEffect(() => {
    if(theme_accent_present) {
      setBg_color(getAccentCode(theme_accent_present));
    } else {
      setBg_color("#8765CC");
    }
  }, [theme_accent_present])
  
  function checkProfileDetails() {
    const parsedData = localStorage.getItem("profile_details") && JSON.parse(localStorage.getItem("profile_details") || "");
    if(parsedData) setIs_profile(true)
  }

  return (
    <>
      {/* <FilterAndViewType
        view_type={view_type}
        setView_type={setView_type}
      /> */}
      {view_type == "list" ? 
        <DashboardList 
          bg_color={bg_color}
          is_profile={is_profile}
        /> : 
        <DashboardGrid 
          bg_color={bg_color}
          is_profile={is_profile}
        />
      }
    </>
  );
}