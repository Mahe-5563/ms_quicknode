import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardRouters } from '@/data/dashboard_routers';
import { BreadcrumbProps } from '@/interfaces';
import ComingSoon from '@/components/ComingSoon';

export default function PitchDeck() {
  const breadcrumbs: BreadcrumbProps = [
    {
      title: 'Pitch Deck',
      href: DashboardRouters.pitchdeck
    }
  ]
  return (
    <DashboardLayout 
      header_title="Pitch Deck"
      breadcrumbs={breadcrumbs}
    >
      {/* <DashBusiness /> */}
      <ComingSoon />
    </DashboardLayout>
  );
}
