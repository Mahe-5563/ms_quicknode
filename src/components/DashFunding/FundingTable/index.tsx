import { TableProps } from '@/interfaces';
// import { useTheme } from 'next-themes';
import TableData from './TableData';
import vclist from '@/data/vc_list.json';

export default function FundingTable({
  item_per_page,
  current_page,
}: {
  item_per_page: number;
  current_page: number;
}) {
  // const { theme } = useTheme();
  // const samp_arr = Array.from({ length: 50 }, (_, i) => i + 1);

  const th_style = 'py-2 px-4 text-left py-3';
  const table_headings: TableProps = [
    {
      id: 'Company',
      title: 'Company',
      width: '3/12',
      // add_classes: "border-l"
    },
    {
      id: 'Investor',
      title: 'Investor',
      width: '1/12',
    },
    {
      id: 'Location',
      title: 'Location',
      width: '1/12',
    },
    {
      id: 'Industry',
      title: 'Industry',
      width: '2/12',
    },
    {
      id: 'Amount',
      title: 'Amount',
      width: '1/12',
    },
    {
      id: 'Thesis',
      title: 'Thesis',
      width: '2/12',
    },
    {
      id: 'func_buttons',
      title: '',
      width: '2/12',
      // add_classes: "border-r"
    },
  ];

  return (
    <table className="w-full text-sm mt-5">
      <thead className="border border-disabled rounded-md bg-gray-200 dark:bg-transparent">
        {table_headings.map((head) => (
          <th
            key={head.id}
            title={head.id}
            className={`${th_style} ${head.add_classes} w-${head.width} text-ellipsis overflow-hidden`}
          >
            {head.title}
            {/* {head.id != 'func_buttons' && head.id != 'Location' && (
              <button className="ml-2">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99976 6.6775C5.87926 6.6775 5.76709 6.65825 5.66326 6.61975C5.55942 6.58125 5.46067 6.51525 5.36701 6.42175L0.872758 1.9275C0.734425 1.789 0.663591 1.61492 0.660258 1.40525C0.657091 1.19575 0.727925 1.0185 0.872758 0.8735C1.01776 0.728667 1.19342 0.65625 1.39976 0.65625C1.60609 0.65625 1.78176 0.728667 1.92676 0.8735L5.99976 4.94675L10.0728 0.8735C10.2113 0.735167 10.3853 0.664333 10.595 0.661C10.8045 0.657833 10.9818 0.728667 11.1268 0.8735C11.2716 1.0185 11.344 1.19417 11.344 1.4005C11.344 1.60683 11.2716 1.7825 11.1268 1.9275L6.63251 6.42175C6.53884 6.51525 6.44009 6.58125 6.33626 6.61975C6.23242 6.65825 6.12026 6.6775 5.99976 6.6775Z"
                    fill={theme == 'dark' ? '#FFFFFF' : '#000000'}
                  />
                </svg>
              </button>
            )} */}
          </th>
        ))}
      </thead>
      <tbody>
        {vclist
          .slice((current_page - 1) * item_per_page, item_per_page * current_page)
          .map((vc) => (
            <TableData key={vc.id} {...vc} />
          ))}
      </tbody>
    </table>
  );
}
