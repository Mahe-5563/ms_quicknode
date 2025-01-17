import { Metadata } from 'next';

import DashBusiness from '@/components/DashBusiness';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardRouters } from '@/data/dashboard_routers';
import { BreadcrumbProps } from '@/interfaces';

export const metadata: Metadata = {
  title: "MyStartup AI | Business",
  description: "Generated by create next app",
};

export default function Business() {
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'Business',
      href: DashboardRouters.business
    }
  ]
  return (
    <>
      <DashboardLayout 
        header_title="Business"
        breadcrumbs={breadcrumbs}
      >
        <DashBusiness />
      </DashboardLayout>
    </>
  );
}
