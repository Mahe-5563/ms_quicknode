import { DashboardLayout } from '@/components/DashboardLayout';
import DashLegal from '@/components/DashLegal';
import { DashboardRouters } from '@/data/dashboard_routers';
import { BreadcrumbProps } from '@/interfaces';

export default function Legal() {
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'Legal',
      href: DashboardRouters.legal
    }
  ]
  return (
    <>
      <DashboardLayout 
        header_title="Legal"
        breadcrumbs={breadcrumbs}
      >
        <DashLegal />
      </DashboardLayout>
    </>
  );
}
