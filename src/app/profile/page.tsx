import DashProfile from '@/components/DashProfile';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardRouters } from '@/data/dashboard_routers';
import { BreadcrumbProps } from '@/interfaces';

export default function ProfilePage() {
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'MyStartup Profile',
      href: DashboardRouters.profile
    }
  ]
  return (
    <>
      <DashboardLayout
        header_title={'MyStartup Profile'}
        header_subtitle={'Provide details about your business before getting started.'}
        breadcrumbs={breadcrumbs}
      >
        <DashProfile />
      </DashboardLayout>
    </>
  );
}
