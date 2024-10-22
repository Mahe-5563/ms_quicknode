'use client';
import { useState, useEffect, Dispatch, SetStateAction, ReactNode } from 'react';
import { useTheme } from 'next-themes';

import { loadAccentClass, getAccentCode } from '@/operations/common';
import ViewDropdown from './View_dropdown';

type FilterAndViewTypeProps = {
  view_type: string;
  setView_type: Dispatch<SetStateAction<string>>;
  children?: ReactNode,
  size?: string,
};

export default function FilterAndViewType({ view_type, setView_type, children, size }: FilterAndViewTypeProps) {
  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [accent_theme, setAccent_theme] = useState<string>('');
  const { theme } = useTheme();

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
  }, []);

  useEffect(() => {
    if (theme_accent_present) {
      setAccent_theme(getAccentCode(theme_accent_present));
    }
  }, [theme_accent_present]);

  return (
    <div className="flex my-4 justify-between">
      <div className="flex gap-4">
        <button onClick={() => setView_type('grid')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={view_type == 'grid' ? accent_theme : theme == 'dark' ? '#FFFFFF' : '#000000'}
          >
            <path d="M200-520q-24.54 0-42.27-17.73Q140-555.46 140-580v-180q0-24.54 17.73-42.27Q175.46-820 200-820h180q24.54 0 42.27 17.73Q440-784.54 440-760v180q0 24.54-17.73 42.27Q404.54-520 380-520H200Zm0 380q-24.54 0-42.27-17.73Q140-175.46 140-200v-180q0-24.54 17.73-42.27Q175.46-440 200-440h180q24.54 0 42.27 17.73Q440-404.54 440-380v180q0 24.54-17.73 42.27Q404.54-140 380-140H200Zm380-380q-24.54 0-42.27-17.73Q520-555.46 520-580v-180q0-24.54 17.73-42.27Q555.46-820 580-820h180q24.54 0 42.27 17.73Q820-784.54 820-760v180q0 24.54-17.73 42.27Q784.54-520 760-520H580Zm0 380q-24.54 0-42.27-17.73Q520-175.46 520-200v-180q0-24.54 17.73-42.27Q555.46-440 580-440h180q24.54 0 42.27 17.73Q820-404.54 820-380v180q0 24.54-17.73 42.27Q784.54-140 760-140H580ZM200-580h180v-180H200v180Zm380 0h180v-180H580v180Zm0 380h180v-180H580v180Zm-380 0h180v-180H200v180Zm380-380Zm0 200Zm-200 0Zm0-200Z" />
          </svg>
        </button>
        <button onClick={() => setView_type('list')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={view_type == 'list' ? accent_theme : theme == 'dark' ? '#FFFFFF' : '#000000'}
          >
            <path d="M323.08-597.69q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.38 8.63-8.61 21.38-8.61H790q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37-8.62 8.62-21.37 8.62H323.08Zm0 147.69q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62H790q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q802.75-450 790-450H323.08Zm0 147.69q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62H790q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.38-8.62 8.61-21.37 8.61H323.08ZM172.31-595.38q-13.73 0-23.02-9.4t-9.29-23.3q0-13.56 9.29-22.74 9.29-9.18 23.02-9.18t23.02 9.18q9.29 9.18 9.29 22.74 0 13.9-9.29 23.3t-23.02 9.4Zm0 147.3q-13.73 0-23.02-9.18Q140-466.43 140-480q0-14.31 9.29-23.5t23.02-9.19q13.73 0 23.02 9.19t9.29 23.5q0 13.57-9.29 22.74-9.29 9.18-23.02 9.18Zm0 148.08q-13.73 0-23.02-9.4T140-332.69q0-13.57 9.29-22.75t23.02-9.18q13.73 0 23.02 9.18t9.29 22.75q0 13.89-9.29 23.29-9.29 9.4-23.02 9.4Z" />
          </svg>
        </button>
      </div>
      <ViewDropdown
        id={'filter'}
        btn_type={'transp'}
        btn_label={'Filter'}
        btn_class={'border border-disabled'}
        dd_size={size || 'md'}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={theme == 'dark' ? '#FFFFFF' : '#000000'}
          >
            <path d="M441.15-260q-12.75 0-21.37-8.63-8.63-8.63-8.63-21.38 0-12.76 8.63-21.37 8.62-8.62 21.37-8.62h77.31q12.75 0 21.38 8.63 8.62 8.63 8.62 21.38 0 12.76-8.62 21.37-8.63 8.62-21.38 8.62h-77.31Zm-155-190q-12.75 0-21.37-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.62-8.62 21.37-8.62h387.31q12.75 0 21.38 8.63 8.62 8.63 8.62 21.38 0 12.76-8.62 21.37-8.63 8.62-21.38 8.62H286.15ZM170-640q-12.75 0-21.37-8.63-8.63-8.63-8.63-21.38 0-12.76 8.63-21.37Q157.25-700 170-700h620q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q802.75-640 790-640H170Z" />
          </svg>
        }
      >
        {children}
      </ViewDropdown>
    </div>
  );
}
