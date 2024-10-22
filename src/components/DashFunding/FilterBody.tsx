import { Dispatch, SetStateAction } from 'react';

export default function FundingFilterBody({
  setItem_per_page,
  item_per_page,
}: {
  setItem_per_page: Dispatch<SetStateAction<number>>;
  item_per_page: number;
}) {
  const button_style = 'border-2 w-8 h-8 rounded-sm text-sm';
  const active_button = 'border-red-500';

  return (
    <section className="mb-2">
      <label className="text-xs">Rows per page:</label>
      <div className="flex mt-2 justify-evenly">
        <button
          className={`${button_style} ${item_per_page == 10 ? active_button : 'border-zinc-500'}`}
          onClick={() => setItem_per_page(10)}
        >
          10
        </button>
        <button
          className={`${button_style} ${item_per_page == 20 ? active_button : 'border-zinc-500'}`}
          onClick={() => setItem_per_page(20)}
        >
          20
        </button>
        <button
          className={`${button_style} ${item_per_page == 50 ? active_button : 'border-zinc-500'}`}
          onClick={() => setItem_per_page(50)}
        >
          50
        </button>
      </div>
    </section>
  );
}
