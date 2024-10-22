'use client';
import { useEffect, useState } from 'react';

import { TaskCardProps } from '@/interfaces';
import { CardList } from '../DashboardLayout/CardList';
import { marketing_card_list } from '@/data/common';


export const DashMarketing = () => {

  const [completed_tasks] = useState<Array<string>>([]);
  const [progress_value, setProgress_value] = useState<number>(0);
  const card_tasks: TaskCardProps = [
    {
      title: 'Market Research',
      key: 'market-research',
      progress_value: 0,
      max_subtasks: 8,
      task_list: marketing_card_list[0].list,
      // quantity: '1/5 tasks completed',
    },
    {
      title: 'Target Audience',
      key: 'target-audience',
      progress_value: -1,
      max_subtasks: 8,
      task_list: marketing_card_list[1].list,
      // quantity: '4/5 tasks completed',
    },
    {
      title: 'Value Proposition',
      key: 'value-proposition',
      progress_value: -1,
      max_subtasks: 7,
      task_list: marketing_card_list[2].list
      // quantity: '5/5 tasks completed',
    },
    {
      title: 'Branding',
      key: 'branding',
      progress_value: -1,
      max_subtasks: 8,
      task_list: marketing_card_list[3].list
      // quantity: '3/5 tasks completed',
    },
    {
      title: 'Marketing Channels',
      key: 'marketing-channels',
      progress_value: -1,
      max_subtasks: 8,
      task_list: marketing_card_list[4].list
      // quantity: '2/5 tasks completed',
    },
    {
      title: 'Content Strategy',
      key: 'content-strategy',
      progress_value: -1,
      max_subtasks: 8,
      task_list: marketing_card_list[5].list
      // quantity: '0/5 tasks completed',
    }
  ]

  useEffect(() => {
    let count = 0;
    if(localStorage.getItem("_marketing_market-research_customer-demographics")){
      count++;
      completed_tasks.push("customer-demographics");
    }
    if(localStorage.getItem("_marketing_market-research_customer-psychographics")){
      count++;
      completed_tasks.push("customer-psychographics");
    }
    if(localStorage.getItem("_marketing_market-research_market-trends-analysis")){
      count++;
      completed_tasks.push("market-trends-analysis");
    }

    setProgress_value(count);
  }, [])

  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {card_tasks.map((task) => (
        <CardList
          card_type={'marketing'}
          key={task.key}
          card_key={task.key}
          marketing_title={task.title}
          // quantity={task.quantity}
          marketing_tasks={task.task_list}
          progress_value={task.progress_value >=0 ? progress_value : 0}
          max_subtasks={task.max_subtasks}
          completed_tasks={completed_tasks}
        />
      ))}
    </div>
  );
};
