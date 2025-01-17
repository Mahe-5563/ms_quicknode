import { Metadata } from 'next';
import { DashboardRouters, marketing_slugs } from '@/data/dashboard_routers';
import GeneratePlan from '@/components/DashboardLayout/GeneratePlan';
import { BreadcrumbProps } from '@/interfaces';
import { getProperName } from '@/operations/common';

export const metadata: Metadata = {
  title: "Marketing",
  description: "Generated by create next app",
};

async function getPageData(page_url: any) {

  return marketing_slugs.filter(slug => slug.url == page_url).length > 0;
  // return page_url;
}

export default async function MarketingSlug(
  { params: { slug }, 
    searchParams: { task } } : 
  { params: { slug: string }, 
    searchParams: { task: string } 
  }
) {
  const isPageExist = await getPageData(slug) && task;
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'Marketing',
      href: DashboardRouters.marketing,
    },
    {
      title: getProperName(slug, '-'),
      href: slug,
    },
  ];

  return (
    <>
      {isPageExist ? 
        <GeneratePlan
          task_title={getProperName(task, "-")} 
          breadcrumbs={breadcrumbs}
          plan_type={breadcrumbs[0].title.toLowerCase()}
          subplan_type={getProperName(slug, '-')}
        />
      : <></>}
    </>
  );
}
