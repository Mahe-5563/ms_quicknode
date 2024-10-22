'use client';
import { useState } from 'react';

import CTAButton from '@/components/ButtonCTA';
import { LabelTags } from '@/components/LabelTags';
import IconImage from '@/components/IconImage';
import { industry_list } from '@/data/common';
import Modals from '@/components/Modals';

type TableDataProps = {
  id: string;
  company_name: string;
  investor: string;
  location: string;
  industry_list: Array<string>;
  amount: string;
  logo?: string;
  type?: string;
  thesis?: string;
  about?: string;
};

export default function TableData({
  id,
  company_name,
  investor,
  location,
  industry_list: list_ind,
  amount,
  logo,
  type,
  thesis,
  about,
}: TableDataProps) {
  const td_style = 'py-3 px-4';
  const [show_modal_tags, setShow_modal_tags] = useState<boolean>(false);
  const [show_modal_info, setShow_modal_info] = useState<boolean>(false);

  /* The values in here are arbitrary. These values have to be converted to dynamic based on API data and sorts. */
  return (
    <tr className="border border-disabled" id={id}>
      {/** Company */}
      <td className={td_style}>
        <div className="flex gap-3">
          <IconImage 
            src={logo || "/icons/dark/ms_chat_logo.svg"} 
            alt="placeholder_image" 
            width={36}
            height={36}
            className="max-h-10" 
          />
          <span className="my-auto">
            <p>{company_name}</p>
            <p className='text-xs text-zinc-500 dark:text-zinc-400'>{type}</p>
          </span>
        </div>
      </td>
      {/** Investor name */}
      <td className={td_style}>{investor || "N/A"}</td>
      {/** Location */}
      <td className={td_style}>
        <IconImage
          src={location}
          alt={"Great Britain"}
          width={24}
          className="rounded-sm border border-zinc-300"
        />
      </td>
      {/** Industry tags */}
      <td className={td_style}>
        <div className="flex flex-wrap gap-1">
          {list_ind.toSpliced(2).map((ind) => (
            <LabelTags
              key={industry_list[ind].name}
              label={industry_list[ind].name}
              bg_color={industry_list[ind].bg_color || '#8765CC'}
              txt_color="black"
            />
          ))}
          {list_ind.length > 2 && (
            <button
              className="text-xs px-2 py-1 rounded-md border border-zinc-300"
              onClick={() => setShow_modal_tags(!show_modal_tags)}
            >
              +{list_ind.length - 2}
            </button>
          )}
          {show_modal_tags && (
            <Modals setShow_modal={setShow_modal_tags}>
              <section className="flex flex-wrap gap-1">
                {list_ind.map((ind) => (
                  <LabelTags
                    key={industry_list[ind].name}
                    label={industry_list[ind].name}
                    bg_color={industry_list[ind].bg_color || '#8765CC'}
                    txt_color="black"
                  />
                ))}
              </section>
            </Modals>
          )}
        </div>
      </td>
      {/** Amount */}
      <td className={td_style}>{amount || "N/A"}</td>
      {/** Thesis */}
      <td className={td_style}>{thesis || "N/A"}</td>
      {/** Action buttons */}
      <td className={td_style}>
        <div className="flex flex-col gap-1">
          <CTAButton
            id={`submit_deck_${id}`}
            onClick={() => {}}
            btn_type="primary"
            btn_label="Submit Deck"
            btn_class="w-full text-xs justify-center !pl-2 !pr-1 !gap-1"
            icon={
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto mr-1"
              >
                <path
                  d="M5.54927 9.51503L14.1878 0.876532C14.3364 0.727699 14.5104 0.651699 14.7098 0.648533C14.9091 0.645366 15.0864 0.721366 15.2415 0.876532C15.3967 1.0317 15.4743 1.20987 15.4743 1.41103C15.4743 1.61237 15.3967 1.79061 15.2415 1.94578L6.18202 11.0208C6.00119 11.2014 5.79027 11.2918 5.54927 11.2918C5.30827 11.2918 5.09736 11.2014 4.91652 11.0208L0.741524 6.84578C0.592858 6.69695 0.519524 6.52028 0.521524 6.31578C0.523358 6.11145 0.601857 5.9317 0.757024 5.77653C0.912191 5.62137 1.09036 5.54378 1.29152 5.54378C1.49286 5.54378 1.67111 5.62137 1.82627 5.77653L5.54927 9.51503Z"
                  fill="black"
                />
              </svg>
            }
          />
          <CTAButton
            id={`information_${id}`}
            onClick={() => { setShow_modal_info(true); }}
            btn_type="white"
            btn_label="Information"
            btn_class="w-full text-xs justify-center !px-2 !gap-1"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto mr-1"
              >
                <path
                  d="M10.0003 14.75C10.2129 14.75 10.391 14.6781 10.5345 14.5343C10.6782 14.3906 10.75 14.2125 10.75 14V9.75C10.75 9.5375 10.6781 9.35933 10.5343 9.2155C10.3904 9.07183 10.2122 9 9.99975 9C9.78708 9 9.609 9.07183 9.4655 9.2155C9.32183 9.35933 9.25 9.5375 9.25 9.75V14C9.25 14.2125 9.32192 14.3906 9.46575 14.5343C9.60958 14.6781 9.78775 14.75 10.0003 14.75ZM10 7.2885C10.2288 7.2885 10.4207 7.21108 10.5755 7.05625C10.7303 6.90142 10.8077 6.70958 10.8077 6.48075C10.8077 6.25192 10.7303 6.06008 10.5755 5.90525C10.4207 5.75058 10.2288 5.67325 10 5.67325C9.77117 5.67325 9.57933 5.75058 9.4245 5.90525C9.26967 6.06008 9.19225 6.25192 9.19225 6.48075C9.19225 6.70958 9.26967 6.90142 9.4245 7.05625C9.57933 7.21108 9.77117 7.2885 10 7.2885ZM10.0017 19.5C8.68775 19.5 7.45267 19.2507 6.2965 18.752C5.14033 18.2533 4.13467 17.5766 3.2795 16.7218C2.42433 15.8669 1.74725 14.8617 1.24825 13.706C0.749417 12.5503 0.5 11.3156 0.5 10.0017C0.5 8.68775 0.749333 7.45267 1.248 6.2965C1.74667 5.14033 2.42342 4.13467 3.27825 3.2795C4.13308 2.42433 5.13833 1.74725 6.294 1.24825C7.44967 0.749417 8.68442 0.5 9.99825 0.5C11.3123 0.5 12.5473 0.749333 13.7035 1.248C14.8597 1.74667 15.8653 2.42342 16.7205 3.27825C17.5757 4.13308 18.2528 5.13833 18.7518 6.294C19.2506 7.44967 19.5 8.68442 19.5 9.99825C19.5 11.3123 19.2507 12.5473 18.752 13.7035C18.2533 14.8597 17.5766 15.8653 16.7218 16.7205C15.8669 17.5757 14.8617 18.2528 13.706 18.7518C12.5503 19.2506 11.3156 19.5 10.0017 19.5ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                  fill="black"
                />
              </svg>
            }
          />
        </div>
      </td>
      {show_modal_info && 
        <Modals 
          setShow_modal={setShow_modal_info}
        >
          <section>
            <div className='flex gap-2'>
              <IconImage 
                src={logo || "/icons/dark/ms_chat_logo.svg"} 
                alt="placeholder_image" 
                width={72}
                height={72}
                className="max-h-24" 
              />
              <span className="">
                <p className='text-3xl'>{company_name}</p>
                <p className='text-md text-zinc-500 dark:text-zinc-400'>{type}</p>
              </span>
            </div>
          </section>
          <section className='my-4 px-4'>
            <div>
              <label className='text-lg font-bold'>About</label>
              <p className='px-4'>{about}</p>
            </div>
            <div className='mt-4'>
              <label className='text-lg font-bold'>Investor</label>
              <p className='px-4'>{investor || "N/A"}</p>
            </div>
            <div className='mt-4'>
              <label className='text-lg font-bold'>Thesis</label>
              <p className='px-4'>{thesis || "N/A"}</p>
            </div>
            <div className='mt-4'>
              <label className='text-lg font-bold'>Location</label>
              <div className='flex gap-2 px-4'>
                <p>United Kingdom</p>
              </div>
            </div>
            <div className='mt-4'>
              <label className='text-lg font-bold'>Industry</label>
              <div className='flex flex-wrap gap-2 px-4 mt-2'>
                {list_ind.map((ind) => (
                  <LabelTags
                    key={industry_list[ind].name}
                    label={industry_list[ind].name}
                    bg_color={industry_list[ind].bg_color || '#8765CC'}
                    txt_color="black"
                  />
                ))}
              </div>
            </div>
          </section>
        </Modals>
      }
    </tr>
  );
}
