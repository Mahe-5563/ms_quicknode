'use client';
import { useEffect, useState } from 'react';

import { TaskCardProps } from '@/interfaces';
import { CardList } from '../DashboardLayout/CardList';
import { business_card_list } from '@/data/common';

export default function DashBusiness() {
  // const marketing_research: TaskList = ;
  const [progress_value, setProgress_value] = useState<number>(0);
  const [completed_tasks] = useState<Array<string>>([]);
  const card_tasks: TaskCardProps = [
    {
      title: 'Executive Summary',
      key: 'executive-summary',
      progress_value: 0,
      max_subtasks: 5,
      task_list: business_card_list[0].list,
      // quantity: '1/5 tasks completed',
    },
    {
      title: 'Company Description',
      key: 'company-description',
      progress_value: -1,
      max_subtasks: 5,
      task_list: business_card_list[1].list,
      // quantity: '4/5 tasks completed',
    },
    {
      title: 'Market Research',
      key: 'market-research',
      progress_value: -1,
      max_subtasks: 5,
      task_list: business_card_list[2].list,
      // quantity: '5/5 tasks completed',
    },
    {
      title: 'Marketing and Sales',
      key: 'marketing-and-sales',
      progress_value: -1,
      max_subtasks: 5,
      task_list: business_card_list[3].list,
      // quantity: '3/5 tasks completed',
    },
    {
      title: 'Operations Management',
      key: 'operations-management',
      progress_value: -1,
      max_subtasks: 5,
      task_list: business_card_list[4].list,
      // quantity: '2/5 tasks completed',
    },
    {
      title: 'Financial Projections',
      key: 'financial-projections',
      progress_value: -1,
      max_subtasks: 5,
      task_list: business_card_list[5].list,
      // quantity: '0/5 tasks completed',
    },
  ];

  useEffect(() => {
    let count = 0;
    if(localStorage.getItem("_business_executive-summary_business-concept")){
      count++;
      completed_tasks.push("business-concept");
    }
    if(localStorage.getItem("_business_executive-summary_mission-statement")){
      count++;
      completed_tasks.push("mission-statement");
    }
    if(localStorage.getItem("_business_executive-summary_key-objectives")){
      count++;
      completed_tasks.push("key-objectives");
    }

    setProgress_value(count);
  }, [])

  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {card_tasks.map((task) => (
        <CardList
          card_type={'business'}
          key={task.key}
          card_key={task.key}
          marketing_title={task.title}
          // quantity={task.quantity}
          marketing_tasks={task.task_list}
          progress_value={task.progress_value >=0 ? progress_value : 0}
          max_subtasks={task.task_list.length}
          completed_tasks={completed_tasks}
        />
      ))}
    </div>
  );
}
