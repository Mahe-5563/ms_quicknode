'use client'
import { useState, useEffect } from 'react';

import { DashboardLayout } from '@/components/DashboardLayout';
import { BreadcrumbProps } from '@/interfaces';
import DashboardPreview from '@/components/DashboardGenerate/DashboardPreview';
import GenerateBody from '@/components/DashboardGenerate/GenerateBody';

type BusinessGenerateProps = {
  slug?: string;
  task?: string;
  task_title: string;
  breadcrumbs: BreadcrumbProps;
  plan_type: string,
  subplan_type: string,
}

export default function GeneratePlan({
  task_title, 
  breadcrumbs,
  plan_type,
  subplan_type
}: BusinessGenerateProps) {
  const [generated_content, setGenerated_content] = useState<string>('');

  useEffect(() => {
    const ls_key = location.pathname.replace(/[/]/gi, "_")+"_"+(location.search.replace("?task=", "").replace(/[/]/gi, "_"))
    if(localStorage.getItem(ls_key)) {
      setGenerated_content(localStorage.getItem(ls_key) || "");
    }
  }, [])
  
  return (
    <DashboardLayout
      header_title={task_title}
      breadcrumbs={breadcrumbs}
      preview_right_content={<DashboardPreview title={task_title} str={generated_content || ''} />}
    >
      <GenerateBody 
        generated_content={generated_content || ""}
        setGenerated_content={setGenerated_content} 
        plan_type={plan_type}
        subplan_type={subplan_type}
        task_title={task_title}
      />
    </DashboardLayout>
  );
}
