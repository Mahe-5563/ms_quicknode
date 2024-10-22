'use client';
import { useEffect, useState } from 'react';

import { TaskCardProps } from '@/interfaces';
import { CardList } from '../DashboardLayout/CardList';
import { legal_card_list } from '@/data/common';

export default function DashLegal() {
  // const marketing_research: TaskList = ;
  const [progress_value, setProgress_value] = useState<number>(0);
  const [completed_tasks] = useState<Array<string>>([]);
  const card_tasks: TaskCardProps = [
    {
      title: 'Terms of Service',
      key: 'terms-of-service',
      progress_value: 0,
      max_subtasks: 3,
      task_list: legal_card_list[0].list,
      // quantity: '1/5 tasks completed',
    },
    {
      title: 'Privacy Policy',
      key: 'privacy-policy',
      progress_value: -1,
      max_subtasks: 3,
      task_list: legal_card_list[1].list,
      // quantity: '4/5 tasks completed',
    },
    {
      title: 'Non-Disclosure Agreements (NDAs)',
      key: 'non-disclosure-agreements',
      progress_value: -1,
      max_subtasks: 3,
      task_list: legal_card_list[2].list,
      // quantity: '5/5 tasks completed',
    },
    {
      title: 'Employment Agreements',
      key: 'employment-agreements',
      progress_value: -1,
      max_subtasks: 4,
      task_list: legal_card_list[3].list,
      // quantity: '3/5 tasks completed',
    },
    {
      title: 'Intellectual Property Agreements',
      key: 'intellectual-property-agreements',
      progress_value: -1,
      max_subtasks: 4,
      task_list: legal_card_list[4].list,
      // quantity: '2/5 tasks completed',
    },
    {
      title: 'Shareholders` Agreement',
      key: 'shareholder-agreement',
      progress_value: -1,
      max_subtasks: 4,
      task_list: legal_card_list[5].list,
      // quantity: '0/5 tasks completed',
    }
  ]

  useEffect(() => {
    let count = 0;
    if(localStorage.getItem("_legal_terms-of-service_user-obligations")){
      count++;
      completed_tasks.push("user-obligations");
    }
    if(localStorage.getItem("_legal_terms-of-service_acceptable-user-policy")){
      count++;
      completed_tasks.push("acceptable-user-policy");
    }
    if(localStorage.getItem("_legal_terms-of-service_termination-of-service")){
      count++;
      completed_tasks.push("termination-of-service");
    }

    setProgress_value(count);
  }, [])

  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {card_tasks.map((task) => (
        <CardList
          card_type={'legal'}
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
}
