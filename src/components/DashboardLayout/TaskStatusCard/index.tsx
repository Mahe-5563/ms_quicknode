'use client';

// import Image from 'next/image';
import { ReactNode } from 'react';

type TaskStatusCardProps = {
  task_image: ReactNode;
  status_title: string;
  quantity: string;
};

export const TaskStatusCard = ({ task_image, status_title, quantity }: TaskStatusCardProps) => {
  return (
    <div className="flex px-4 py-3 border border-slate-300 w-fit gap-3 rounded-md dark:bg-[#2F2F2F]">
      {/* <Image alt="total-task-icon" src={task_image} width={32} height={32} /> */}
      {task_image}
      <div className="flex flex-col">
        <h6 className='text-sm'>{status_title}</h6>
        <h6 className="font-extrabold">
          <strong>{quantity}</strong>
        </h6>
      </div>
    </div>
  );
};
