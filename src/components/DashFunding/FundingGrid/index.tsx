'use client';
import { Fragment, useState } from 'react';

import IconImage from '@/components/IconImage';
import { industry_list } from '@/data/common';
import { LabelTags } from '@/components/LabelTags';
import CTAButton from '@/components/ButtonCTA';
import Modals from '@/components/Modals';
import vclist from '@/data/vc_list.json';

export default function FundingGrid({
  item_per_page,
  current_page,
}: {
  item_per_page: number;
  current_page: number;
}) {
  const [show_modal, setShow_modal] = useState<boolean>(false);
  const [show_modal_tags, setShow_modal_tags] = useState<any>({});
  const [show_modal_info, setShow_modal_info] = useState<boolean>(false);
  const [modal_info, setModal_info] = useState<any>({});

  return (
    <Fragment>
      {vclist
        .slice((current_page - 1) * item_per_page, item_per_page * current_page)
        .map((item) => (
          <div
            key={item.id}
            className="relative border border-zinc-500 w-72 flex flex-col items-center p-4 rounded-md bg-gray-50 dark:bg-transparent"
          >
            <IconImage
              src={item.location}
              alt={item.location}
              width={18}
              className="absolute top-2 right-2 rounded-sm border border-zinc-300"
            />
            <IconImage
              src={item.logo || '/icons/dark/ms_chat_logo.svg'}
              alt="placeholder_image"
              width={84}
              height={84}
              className="h-24"
            />
            <span className="mt-2 text-lg font-bold">{item.company_name}</span>
            <span className="text-xs text-zinc-300">{item.type}</span>
            <span className="mt-5 text-sm border border-zinc-800 p-2 rounded-sm w-full text-center relative">
              {item.investor || 'N/A'}
              <label className="text-xs absolute -top-2 left-2 bg-gray-50 dark:bg-black px-3 text-zinc-400">
                Investor
              </label>
            </span>
            <span className="mt-2 text-sm border border-zinc-800 p-2 rounded-sm w-full text-center relative">
              {item.amount || 'N/A'}
              <label className="text-xs absolute -top-2 left-2 bg-gray-50 dark:bg-black px-3 text-zinc-400">
                Amount
              </label>
            </span>
            <div className="flex flex-wrap justify-center my-5 gap-1">
              {item.industry_list.toSpliced(2).map((ind) => (
                <LabelTags
                  key={industry_list[ind].name}
                  label={industry_list[ind].name}
                  bg_color={industry_list[ind].bg_color || '#8765CC'}
                  txt_color="black"
                />
              ))}
              {item.industry_list.length > 2 && (
                <button
                  className="text-xs px-2 py-1 rounded-md border border-zinc-300"
                  onClick={() => {
                    setShow_modal(!show_modal);
                    setShow_modal_tags(item.industry_list);
                  }}
                >
                  +{item.industry_list.length - 2}
                </button>
              )}
            </div>
            <span className="my-2 text-sm border border-zinc-800 p-2 rounded-sm w-full text-center relative">
              {item.thesis || 'N/A'}
              <label className="text-xs absolute -top-2 left-2 bg-gray-50 dark:bg-black px-3 text-zinc-400">
                Thesis
              </label>
            </span>
            <div className="w-full flex flex-col gap-1 mt-auto">
              <CTAButton
                id={`submit_deck_${item.id}`}
                onClick={() => {}}
                btn_type="primary"
                btn_label="Submit Deck"
                btn_class="w-full text-xs justify-center !px-2 !gap-1"
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
                id={`information_${item.id}`}
                onClick={() => {
                  setShow_modal_info(true);
                  setModal_info(item);
                }}
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
          </div>
        ))}
      {show_modal && show_modal_tags && (
        <Modals setShow_modal={setShow_modal}>
          <section className="flex flex-wrap gap-1">
            {show_modal_tags.map((ind: any) => (
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
      {show_modal_info && modal_info && (
        <Modals setShow_modal={setShow_modal_info}>
          <section>
            <div className="flex gap-2">
              <IconImage
                src={modal_info.logo || '/icons/dark/ms_chat_logo.svg'}
                alt="placeholder_image"
                width={72}
                height={72}
                className="max-h-24"
              />
              <span className="">
                <p className="text-3xl">{modal_info.company_name}</p>
                <p className="text-md text-zinc-500 dark:text-zinc-400">{modal_info.type}</p>
              </span>
            </div>
          </section>
          <section className="my-4 px-4">
            <div>
              <label className="text-lg font-bold">About</label>
              <p className="px-4">{modal_info.about}</p>
            </div>
            <div className="mt-4">
              <label className="text-lg font-bold">Investor</label>
              <p className="px-4">{modal_info.investor || 'N/A'}</p>
            </div>
            <div className="mt-4">
              <label className="text-lg font-bold">Thesis</label>
              <p className="px-4">{modal_info.thesis || 'N/A'}</p>
            </div>
            <div className="mt-4">
              <label className="text-lg font-bold">Location</label>
              <div className="flex gap-2 px-4">
                <p>United Kingdom</p>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-lg font-bold">Industry</label>
              <div className="flex flex-wrap gap-2 px-4 mt-2">
                {modal_info.industry_list.map((ind: any) => (
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
      )}
    </Fragment>
  );
}
