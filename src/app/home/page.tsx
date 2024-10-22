'use client';

import { useEffect, useState } from 'react';

import DashboardMain from '@/components/DashHome';
import { DashboardLayout } from '@/components/DashboardLayout';
import { getCookie } from '@/operations/common';

export default function Home() {
  
  const [user_name, setUser_name] = useState<string>("");
  
  useEffect(() => { getUserCookie() }, []);

  function getUserCookie() {
    const is_user = getCookie("user");
    if(is_user != "") {
      setUser_name(JSON.parse(window.atob(is_user)).name || "John Doe");
    }
  }

  return (
    <DashboardLayout
      header_title={`Welcome back, ${user_name}`}
      header_subtitle="Your current summary and activity"
    >
      <DashboardMain />
    </DashboardLayout>
  );
}
