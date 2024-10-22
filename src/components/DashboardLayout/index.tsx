'use client';
import { usePathname } from 'next/navigation';
import { ChangeEvent, Fragment, useState, useEffect } from 'react';

import LeftNav from '../../components/LeftNav';
import SearchBar from '../SearchBar';
import { DashboardRouters } from '@/data/dashboard_routers';
import CTAButton from '../ButtonCTA';
import { TaskStatusCard } from './TaskStatusCard';
import { Breadcrumbs } from './breadcrumbs';
import { DashboardLayoutProps } from '@/interfaces';
import IconImage from '../IconImage';
import ModalPrimary from '../Modals';
import FormSIInput from '../FormComponents/FormSIInput';

export const DashboardLayout = ({
  header_title,
  dashboard_right_content,
  children,
  header_subtitle,
  breadcrumbs,
  preview_right_content,
}: DashboardLayoutProps) => {
  const path_name = usePathname();
  const [show_modal, setShow_modal] = useState<boolean>(false);
  const [nav_bar_width, setNav_bar_width] = useState("lg");

  useEffect(() => {
    setNav_bar_width(window.innerWidth >= 1200 ? "lg" : "sm");
  }, [])
  

  return (
    <Fragment>
      <LeftNav
        nav_bar_width={nav_bar_width}
        setNav_bar_width={setNav_bar_width}
      />
      <div className={`grid grid-cols-4 pb-7`}>
        <section className={`${nav_bar_width == "lg" ? "ml-72" : "ml-16"} pl-3.5 ${preview_right_content ? 'col-span-3' : 'col-span-4'}`}>
          <section
            className={`pt-4 pb-2 h-20 border-b flex justify-between dark:border-gray-500 ${preview_right_content ? 'pr-4' : 'mr-4'}`}
          >
            <SearchBar
              type={'text'}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                console.info('Search: ', e.currentTarget.value);
              }}
              placeholder={'Search'}
            />
            <CTAButton
              id={`add_people`}
              btn_label={'Add People'}
              onClick={() => {
                // console.info('Add people');
                setShow_modal(true);
              }}
              btn_type={'primary'}
              btn_class={'my-auto'}
              icon={
                <svg
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto"
                >
                  <path
                    d="M16.625 6.05775H14.375C14.1625 6.05775 13.9844 5.98583 13.8408 5.842C13.6969 5.69817 13.625 5.52 13.625 5.3075C13.625 5.09483 13.6969 4.91675 13.8408 4.77325C13.9844 4.62958 14.1625 4.55775 14.375 4.55775H16.625V2.30775C16.625 2.09525 16.6969 1.91717 16.8408 1.7735C16.9846 1.62967 17.1628 1.55775 17.3753 1.55775C17.5879 1.55775 17.766 1.62967 17.9095 1.7735C18.0532 1.91717 18.125 2.09525 18.125 2.30775V4.55775H20.375C20.5875 4.55775 20.7656 4.62967 20.9093 4.7735C21.0531 4.91733 21.125 5.0955 21.125 5.308C21.125 5.52067 21.0531 5.69875 20.9093 5.84225C20.7656 5.98592 20.5875 6.05775 20.375 6.05775H18.125V8.30775C18.125 8.52025 18.0531 8.69833 17.9093 8.842C17.7654 8.98583 17.5873 9.05775 17.3748 9.05775C17.1621 9.05775 16.984 8.98583 16.8405 8.842C16.6968 8.69833 16.625 8.52025 16.625 8.30775V6.05775ZM7.5 7C6.5375 7 5.71358 6.65733 5.02825 5.972C4.34275 5.2865 4 4.4625 4 3.5C4 2.5375 4.34275 1.71358 5.02825 1.02825C5.71358 0.34275 6.5375 0 7.5 0C8.4625 0 9.28642 0.34275 9.97175 1.02825C10.6573 1.71358 11 2.5375 11 3.5C11 4.4625 10.6573 5.2865 9.97175 5.972C9.28642 6.65733 8.4625 7 7.5 7ZM0 13.0962V12.3923C0 11.9026 0.133 11.4491 0.399 11.0317C0.665 10.6144 1.0205 10.2936 1.4655 10.0692C2.45383 9.58475 3.45092 9.22133 4.45675 8.979C5.46258 8.73667 6.477 8.6155 7.5 8.6155C8.523 8.6155 9.53742 8.73667 10.5433 8.979C11.5491 9.22133 12.5462 9.58475 13.5345 10.0692C13.9795 10.2936 14.335 10.6144 14.601 11.0317C14.867 11.4491 15 11.9026 15 12.3923V13.0962C15 13.5179 14.8523 13.8766 14.5568 14.1723C14.2613 14.4678 13.9026 14.6155 13.4807 14.6155H1.51925C1.09742 14.6155 0.73875 14.4678 0.44325 14.1723C0.14775 13.8766 0 13.5179 0 13.0962ZM1.5 13.1155H13.5V12.3923C13.5 12.1898 13.4413 12.0023 13.324 11.8298C13.2067 11.6574 13.0474 11.5168 12.8462 11.4078C11.9846 10.9834 11.1061 10.6619 10.2107 10.4433C9.31525 10.2248 8.41167 10.1155 7.5 10.1155C6.58833 10.1155 5.68475 10.2248 4.78925 10.4433C3.89392 10.6619 3.01542 10.9834 2.15375 11.4078C1.95258 11.5168 1.79333 11.6574 1.676 11.8298C1.55867 12.0023 1.5 12.1898 1.5 12.3923V13.1155ZM7.5 5.5C8.05 5.5 8.52083 5.30417 8.9125 4.9125C9.30417 4.52083 9.5 4.05 9.5 3.5C9.5 2.95 9.30417 2.47917 8.9125 2.0875C8.52083 1.69583 8.05 1.5 7.5 1.5C6.95 1.5 6.47917 1.69583 6.0875 2.0875C5.69583 2.47917 5.5 2.95 5.5 3.5C5.5 4.05 5.69583 4.52083 6.0875 4.9125C6.47917 5.30417 6.95 5.5 7.5 5.5Z"
                    fill="black"
                  />
                </svg>
              }
            />
            {show_modal && (
              <ModalPrimary show_modal={show_modal} setShow_modal={setShow_modal}>
                <section className="border-b border-zinc-600 pb-2">
                  <h4 className="text-xl">Add People</h4>
                </section>
                <section className="border-b border-zinc-600 py-6">
                  <FormSIInput
                    placeholder="Ex: John Doe"
                    onChange={() => {}}
                    label="Full Name"
                    div_class="mb-4"
                    value=""
                  />
                  <FormSIInput
                    placeholder="Ex: John Doe"
                    onChange={() => {}}
                    label="Full Name"
                    div_class=""
                    value=""
                  />
                </section>
                <section className="pt-6 pb-2 flex justify-end gap-3">
                  <CTAButton
                    id={`Add Person`}
                    btn_label={'Save Changes'}
                    onClick={() => {
                      setShow_modal(false);
                    }}
                    btn_type={'success'}
                  />
                  <CTAButton
                    id={`discard_changes`}
                    btn_label={'Discard Changes'}
                    onClick={() => {
                      setShow_modal(false);
                    }}
                    btn_type={'danger'}
                  />
                </section>
              </ModalPrimary>
            )}
          </section>
          <section className="grid grid-cols-4">
            <div
              className={`${dashboard_right_content ? 'col-span-3' : 'col-span-4'} overflow-auto pr-4`}
            >
              <section className="mt-6 mb-1">
                {/* Breadcrumbs validation for show in all pages less home */}
                {path_name !== DashboardRouters.home && breadcrumbs && (
                  <Breadcrumbs breadcrumbs={breadcrumbs} />
                )}

                {header_title && (
                  <Fragment>
                    <h3 className="text-xl font-bold my-2">
                      <strong>{header_title}</strong>
                    </h3>
                    {header_subtitle && (
                      <h4 className="text-sm font-normal dark:text-disabled">{header_subtitle}</h4>
                    )}
                  </Fragment>
                )}

                {/* validation to show only in marketing and business page */}
                {path_name === DashboardRouters.marketing ||
                path_name === DashboardRouters.business ? (
                  <div className="flex flex-wrap gap-4">
                    <TaskStatusCard
                      // task_image="/icons/total-task-icon.png"
                      task_image={
                        <IconImage
                          src={'/icons/color/total_tasks.svg'}
                          alt={'total_tasks'}
                          height={34}
                          width={34}
                        />
                      }
                      status_title="Total tasks"
                      quantity="63"
                    />
                    <TaskStatusCard
                      task_image={
                        <IconImage
                          src={'/icons/color/completed_tasks.svg'}
                          alt={'completed_tasks'}
                          height={34}
                          width={34}
                        />
                      }
                      status_title="Completed tasks"
                      quantity="14"
                    />
                  </div>
                ) : null}
              </section>
              {children}
            </div>
            {dashboard_right_content}
          </section>
        </section>
        <section className={`${preview_right_content ? 'col-span-1' : 'col-span-0'}`}>
          {preview_right_content}
        </section>
      </div>
    </Fragment>
  );
};
