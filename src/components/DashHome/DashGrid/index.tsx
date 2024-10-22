'use client';

import Link from 'next/link';
import UserIconList from '../../UserIconList';
import { users } from '@/data/users';
import { nav_links } from '@/data/common';
import { Fragment } from 'react';


type DashGridProps = {
  bg_color: string;
  is_profile: boolean;
}

export default function DashboardGrid({ bg_color, is_profile }: DashGridProps) {
   return (
    <Fragment>
      <div className="mt-12 max-w-7xl | md:grid md:grid-cols-4 md:gap-2">
        {nav_links.map((item) => {
          return (
            /* TODO: fix this map logic which is causing issues on console 
              (unique "key" as 1st element prop) */
            <Fragment key={`dashboard_item_grid_${item.id}`}>
              {item.id != 'home' && (
                <Link
                  key={`dashboard_item_grid_${item.id}`}
                  id={`dashboard_item_grid_${item.id}`}
                  href={item.url}
                  className={`p-3 rounded-md`}
                  style={{
                    backgroundColor:
                      !is_profile && item.id != 'profile'
                        ? '#D4D4D84D'
                        : `${bg_color}4D` || item.theme_color,
                    pointerEvents: !is_profile && item.id != 'profile' ? 'none' : 'auto',
                    // opacity: !is_profile && item.id != 'profile' ? 0.7 : 1,
                  }}
                  aria-disabled={!is_profile && item.id != 'profile'}
                  tabIndex={!is_profile && item.id != 'profile' ? -1 : 1}
                >
                  <div className="flex justify-between">
                    <i
                      className="rounded-full h-9 w-9 flex items-center justify-center"
                      style={{
                        backgroundColor:
                          !is_profile && item.id != 'profile'
                            ? '#D4D4D8'
                            : `${bg_color}` || item.theme_color,
                      }}
                    >
                      {/* <IconImage src={item.dark_icon} alt={item.id} height={item.custom_hei || 18} width={item.custom_wid || 18} /> */}
                      {item.path(
                        !is_profile && item.id != 'profile' ? '#71717A' : '#000000',
                        item.custom_hei || '18',
                        item.custom_wid || '18',
                      )}
                    </i>
                    <label
                      className="px-2 py-1 text-[10px] my-auto rounded-md"
                      style={{
                        backgroundColor:
                          !is_profile && item.id != 'profile'
                            ? '#D4D4D84D'
                            : `${bg_color}4D` || item.theme_color,
                      }}
                    >
                      999 tasks
                    </label>
                  </div>
                  <h4 className="text-sm my-3 font-semibold">{item.label}</h4>
                  <UserIconList users={users} disabled={!is_profile && item.id != 'profile'} />
                  <label className="text-[10px]">Viewed Recently</label>
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
