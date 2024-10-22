import { Metadata } from 'next';

import { DashMarketing } from '@/components/DashMarketing';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardRouters } from '@/data/dashboard_routers';
import { BreadcrumbProps } from '@/interfaces';

export const metadata: Metadata = {
  title: "MyStartup AI | Marketing",
  description: "Generated by create next app",
};

export default function Marketing() {
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'Marketing',
      href: DashboardRouters.marketing
    }
  ]
  return (
    <>
      {/* TODO: change marketing header image properly */}
      <DashboardLayout
        header_title="Marketing"
        breadcrumbs={breadcrumbs}
      >
        <DashMarketing />
      </DashboardLayout>
    </>
  );
}