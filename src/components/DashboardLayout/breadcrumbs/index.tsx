'use client';

import { DashboardRouters } from '@/data/dashboard_routers';
import { BreadcrumbProps } from '@/interfaces';
import { getAccentCode, loadAccentClass } from '@/operations/common';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbProps;
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  // let theme_accent_present : string | boolean | null;
  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [current_breadcrumb, setCurrent_breadcrumb] = useState<string>('');

  useEffect(() => loadAccentClass(setTheme_accent_present));

  useEffect(() => {
    // loadAccentClass(setTheme_accent_present);
    if(theme_accent_present) {
      setCurrent_breadcrumb(getAccentCode(theme_accent_present));
    } else {
      setCurrent_breadcrumb("#8765CC");
    }
  }, [theme_accent_present]);
  
  return (
    <div className="flex items-center gap-4 mb-8">
      <Link className="p-0.5" href={DashboardRouters.home}>
        <Image
          alt="home-icon-breadcrumb"
          src={'/newicons/home-outlined.png'}
          width={15}
          height={16}
        />
      </Link>
      {breadcrumbs && breadcrumbs.map((crumb, index) => (
        <>
          <p className="text-md text-stone-400">&#62;</p>
          <Link 
            href={index == breadcrumbs.length -1 ? "" : crumb.href} 
            className={`${index != breadcrumbs.length - 1 && `dark:text-disabled`} text-black text-sm px-3 py-1 rounded`}
            style={{
              backgroundColor: index == breadcrumbs.length -1 ? current_breadcrumb : '',
            }}
          >
            {crumb.title}
          </Link>
        </>
      ))}
    </div>
  );
};
