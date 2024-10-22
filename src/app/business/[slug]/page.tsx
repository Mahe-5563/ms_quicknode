import { Metadata } from 'next';
import { business_slugs, DashboardRouters } from '@/data/dashboard_routers';
import GeneratePlan from '@/components/DashboardLayout/GeneratePlan';
import { getProperName } from '@/operations/common';
import { BreadcrumbProps } from '@/interfaces';

export const metadata: Metadata = {
  title: "Business",
  description: "Generated by create next app",
};

async function getPageData(page_url: any) {

  return business_slugs.filter(slug => slug.url == page_url).length > 0;
  // return page_url;
}

export default async function BusinessSlug(
  { params: { slug }, 
    searchParams: { task } } : 
  { params: { slug: string }, 
    searchParams: { task: string } 
  }
) {
  const isPageExist = await getPageData(slug) && task;
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'Business',
      href: DashboardRouters.business,
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