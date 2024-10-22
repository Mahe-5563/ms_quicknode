import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { TaskList } from '@/interfaces';
import CTAButton from '@/components/ButtonCTA';
import { loadAccentClass, getAccentCode, hoverHandler } from '@/operations/common';

type MarketingCardProps = {
  marketing_title: string;
  card_key: string;
  marketing_tasks: TaskList;
  progress_value: string | number;
  max_subtasks: string | number;
  card_type: string;
  completed_tasks?: Array<string>;
};

export const CardList = ({
  marketing_title,
  card_key,
  marketing_tasks,
  progress_value,
  max_subtasks,
  card_type,
  completed_tasks
}: MarketingCardProps) => {

  const router = useRouter();
  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [btn_ready, setBtn_ready] = useState<string>('');

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
  }, []);

  useEffect(() => {
    if(theme_accent_present) {
      setBtn_ready(getAccentCode(theme_accent_present));
    } else {
      setBtn_ready("#8765CC");
    }
  }, [theme_accent_present]);

  return (
    <div className="border border-slate-300 rounded p-4 w-96 flex flex-col gap-3 cursor-pointer dark:bg-[#2F2F2F] dark:border-gray-500">
      <h5>
        <strong>{marketing_title}</strong>
      </h5>

      <progress className="rounded-lg h-2" value={progress_value} max={max_subtasks} color='#3EA3B3' />
      <p className="text-xs">{`${progress_value}/${max_subtasks} tasks completed`}</p>

      <div className="flex flex-col gap-2">
        {marketing_tasks &&
          marketing_tasks.map((task: any, index: number) => {

            const is_locked = task.locked;
            const is_ready = completed_tasks?.includes(task.task_key) || false; // (localStorage && localStorage?.getItem(`${location.pathname.replace(/[/]/gi, "_")}_${card_key}_${task.task_key}`)) || task.ready;
            return (
              <section className="flex justify-between items-center pb-2 border-b border-gray-300 dark:border-gray-500" key={task.task_key}>
                <p className="text-xs w-3/5">{task.task_name}</p>
                <button
                  id={`card_task_${card_key}_${index}`}
                  className={`py-1 w-24 rounded text-xs 
                    ${is_locked ? '!bg-zinc-300 !text-zinc-700 dark:!bg-zinc-500' : 
                      is_ready ? 
                        `text-black` 
                     : 'border bg-transparent hover:text-black dark:border-disabled'}`
                  }
                  style={{
                    backgroundColor: is_ready ? btn_ready : '',
                  }}
                  type="button"
                  disabled={is_locked}
                  onClick={() => {
                    if(!is_locked)
                      router.push(`/${card_type}/${card_key}?task=${task.task_key}`);
                  }}
                  onMouseOver={() => 
                    !is_locked && hoverHandler(`card_task_${card_key}_${index}`, is_ready ? btn_ready : '#D4D4D8', 'mouse_over')}
                  onMouseOut={() => 
                    !is_locked && hoverHandler(`card_task_${card_key}_${index}`, is_ready ? btn_ready : '', 'mouse_out')}
                >
                  {is_locked ? "Locked" : is_ready ? 'Ready' : 'Generate'}
                </button>
              </section>
            )
          })}
      </div>
      {/* <button className="py-1 px-4 w-fit border rounded text-sm bg-accent text border-accent flex gap-1.5 self-end">
        <Image alt="promp_icon" src={'/icons/download-icon.png'} height={15} width={15} />
        Download all
      </button> */}
      <CTAButton
        id={`download_all_${card_key}`}
        btn_type={progress_value != max_subtasks ? "disabled" : 'primary'}
        btn_label='Download All'
        onClick={() => {}}
        btn_class="w-fit ml-auto !text-xs"
        icon={
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8 11.4115C7.8795 11.4115 7.76733 11.3923 7.6635 11.3538C7.55967 11.3154 7.46092 11.2494 7.36725 11.1558L4.25775 8.04625C4.10908 7.89742 4.03567 7.72333 4.0375 7.524C4.0395 7.32467 4.11292 7.14742 4.25775 6.99225C4.41292 6.83725 4.59108 6.75717 4.79225 6.752C4.99358 6.74683 5.17183 6.82183 5.327 6.977L7.25 8.9V1.25C7.25 1.03717 7.32183 0.859 7.4655 0.7155C7.609 0.571833 7.78717 0.5 8 0.5C8.21283 0.5 8.391 0.571833 8.5345 0.7155C8.67817 0.859 8.75 1.03717 8.75 1.25V8.9L10.673 6.977C10.8218 6.82833 10.9984 6.75492 11.2028 6.75675C11.4072 6.75875 11.5871 6.83725 11.7423 6.99225C11.8871 7.14742 11.9621 7.32308 11.9672 7.51925C11.9724 7.71542 11.8974 7.89108 11.7423 8.04625L8.63275 11.1558C8.53908 11.2494 8.44033 11.3154 8.3365 11.3538C8.23267 11.3923 8.1205 11.4115 8 11.4115ZM2.30775 15.5C1.80258 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.7308C0.5 11.5179 0.571833 11.3398 0.7155 11.1962C0.859 11.0526 1.03717 10.9808 1.25 10.9808C1.46283 10.9808 1.641 11.0526 1.7845 11.1962C1.92817 11.3398 2 11.5179 2 11.7308V13.6923C2 13.7692 2.03208 13.8398 2.09625 13.9038C2.16025 13.9679 2.23075 14 2.30775 14H13.6923C13.7692 14 13.8398 13.9679 13.9038 13.9038C13.9679 13.8398 14 13.7692 14 13.6923V11.7308C14 11.5179 14.0718 11.3398 14.2155 11.1962C14.359 11.0526 14.5372 10.9808 14.75 10.9808C14.9628 10.9808 15.141 11.0526 15.2845 11.1962C15.4282 11.3398 15.5 11.5179 15.5 11.7308V13.6923C15.5 14.1974 15.325 14.625 14.975 14.975C14.625 15.325 14.1974 15.5 13.6923 15.5H2.30775Z" 
              fill={progress_value != max_subtasks ? "#3F3F46" : "black"}
            />
          </svg>
        }
        disabled={progress_value != max_subtasks}
      />
    </div>
  );
};
