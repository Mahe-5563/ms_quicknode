// 'use client';
import { useTheme } from 'next-themes';

import { ChangeEventHandler } from 'react';

export type SearchInputProps = {
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  div_class?: string;
  input_class?: string;
};

export default function SearchBar({
  type,
  onChange,
  placeholder,
  div_class,
  input_class,
}: SearchInputProps) {

  const { theme } = useTheme();

  return (
    <>
      <div className={`flex w-3/5 border bg-[#FAFBFC] rounded-md my-2 ${div_class} dark:bg-[#2F2F2F] dark:border-gray-500`}>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 17 17" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className='my-auto mx-2'
        >
          <path 
            d="M6.11525 12.2305C4.40758 12.2305 2.96142 11.6383 1.77675 10.4538C0.59225 9.26908 0 7.82292 0 6.11525C0 4.40758 0.59225 2.96142 1.77675 1.77675C2.96142 0.59225 4.40758 0 6.11525 0C7.82292 0 9.26908 0.59225 10.4537 1.77675C11.6382 2.96142 12.2305 4.40758 12.2305 6.11525C12.2305 6.82942 12.1107 7.5115 11.871 8.1615C11.6312 8.8115 11.3112 9.37683 10.9112 9.8575L16.6652 15.6115C16.8037 15.7498 16.8746 15.9238 16.8777 16.1335C16.8809 16.3432 16.8101 16.5204 16.6652 16.6652C16.5204 16.8101 16.3447 16.8825 16.1382 16.8825C15.9319 16.8825 15.7563 16.8101 15.6115 16.6652L9.8575 10.9112C9.3575 11.3241 8.7825 11.6472 8.1325 11.8805C7.4825 12.1138 6.81008 12.2305 6.11525 12.2305ZM6.11525 10.7307C7.40375 10.7307 8.49508 10.2836 9.38925 9.38925C10.2836 8.49508 10.7307 7.40375 10.7307 6.11525C10.7307 4.82675 10.2836 3.73542 9.38925 2.84125C8.49508 1.94692 7.40375 1.49975 6.11525 1.49975C4.82675 1.49975 3.73542 1.94692 2.84125 2.84125C1.94692 3.73542 1.49975 4.82675 1.49975 6.11525C1.49975 7.40375 1.94692 8.49508 2.84125 9.38925C3.73542 10.2836 4.82675 10.7307 6.11525 10.7307Z" 
            fill={theme == "dark" ? "#FFFFFF" : "#000000"}
          />
        </svg>
        <input
          type={type || 'text'}
          className={`text-sm p-2 w-full rounded-md bg-[#FAFBFC] align-middle focus:outline-none ${input_class} dark:bg-[#2F2F2F] dark:border-gray-500`}
          onChange={onChange}
          placeholder={placeholder || 'Search'}
        />
      </div>
    </>
  );
}
