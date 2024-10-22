'use client';
import { useState, useEffect } from 'react';

import { NavTabsProps } from '@/interfaces';
import NavTabs from '../NavTabs';
import FilterAndViewType from '../FilterAndViewType';
import FundingTable from './FundingTable';
import PaginationComponent from '../Pagination';
import FundingFilterBody from './FilterBody';
import FundingGrid from './FundingGrid';

export default function DashFunding() {
  const [current_tab, setCurrentTab] = useState<any>({ id: 1, label: 'All' });
  const [view_type, setView_type] = useState<string>('list');
  const [current_page, setCurrent_page] = useState(1);
  const [item_per_page, setItem_per_page] = useState<number>(10);
  const total_items = 50;

  const nav_tabs: NavTabsProps = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: 'Submitted',
    },
    {
      id: 3,
      label: 'Rejected',
    },
  ];

  useEffect(() => {
    setCurrent_page(1);
  }, [item_per_page]);

  return (
    <main className="my-6">
      <NavTabs nav_tabs={nav_tabs} current_tab={current_tab} setCurrentTab={setCurrentTab} />
      <section className="">
        <FilterAndViewType view_type={view_type} setView_type={setView_type} size={'lg'}>
          <FundingFilterBody setItem_per_page={setItem_per_page} item_per_page={item_per_page} />
        </FilterAndViewType>
        {view_type == 'list' ? (
          <FundingTable item_per_page={item_per_page} current_page={current_page} />
        ) : (
          <section className="flex flex-wrap gap-3">
            <FundingGrid item_per_page={item_per_page} current_page={current_page} />
          </section>
        )}
        <PaginationComponent
          onChange={(ev, page) => {
            setCurrent_page(page);
          }}
          total_pages={Math.ceil(total_items / item_per_page)}
          page_number={current_page}
        />
      </section>
    </main>
  );
}
