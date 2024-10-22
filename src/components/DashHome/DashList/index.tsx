'use client';

import Link from 'next/link';
import UserIconList from '../../UserIconList';
import { users } from '@/data/users';
import { nav_links } from '@/data/common';

type DashListProps = {
  bg_color: string;
  is_profile: boolean;
};

export default function DashboardList({ bg_color, is_profile }: DashListProps) {
  return (
    <>
      <section>
        {nav_links.map((item) => (
          <Link 
            key={`dashboard_item_list_${item.id}`}
            href={item.url}
            className="flex py-1 px-4 gap-2 mb-2 rounded-md"
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
            <i 
              className="my-auto rounded-full h-9 w-9 flex items-center justify-center"
              style={{
                backgroundColor:
                  !is_profile && item.id != 'profile'
                    ? '#D4D4D8'
                    : `${bg_color}` || item.theme_color,
              }}
            >
              {item.path(
                !is_profile && item.id != 'profile' ? '#71717A' : '#000000',
                item.custom_hei || '18',
                item.custom_wid || '18',
              )}
            </i>
            <h4 className=" text-sm my-3 font-bold w-5/12">{item.label}</h4>
            <div className="w-2/12  my-auto flex justify-center">
              <UserIconList users={users} disabled={!is_profile && item.id != 'profile'} />
            </div>
            <label
              className="px-2 py-1 text-[10px]  my-auto rounded-md w-2/12 text-center"
              style={{
                backgroundColor:
                  !is_profile && item.id != 'profile'
                    ? '#D4D4D84D'
                    : `${bg_color}4D` || item.theme_color,
              }}
            >
              999 tasks
            </label>
            <label className="text-[10px]  w-2/12 my-auto text-center">Viewed Recently</label>
          </Link>
        ))}
      </section>
    </>
  );
}
