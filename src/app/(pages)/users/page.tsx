import CategoryGrid from '@/components/common/category-grid';
import QuickLinksPanel from '@/components/common/quick-links-panel';
import { IBodyMenuItem } from '@/interfaces';
import SiteLayout from '@/layouts/site-layout';

const shortcuts: IBodyMenuItem[] = [
  { title: 'User', link: '/user' },
  { title: 'User Type', link: '/user-type' },
  { title: 'Role', link: '/role' },
  { title: 'Permission Manager', link: '/permission-manager' },
  { title: 'User Profile', link: '/user-profile' },
];

const reportsAndMasters: IBodyMenuItem[] = [
  {
    title: 'Users',
    children: [
      { title: 'User', link: '/user' },
      { title: 'Role', link: '/role' },
      { title: 'Role Profile', link: '/role-profile' },
      { title: 'Module Profile', link: '/module-profile' },
    ],
  },
  {
    title: 'Logs',
    children: [
      { title: 'Activity Log', link: '/activity-log' },
      { title: 'Access Log', link: '/access-log' },
    ],
  },
  {
    title: 'Permissions',
    children: [
      { title: 'Role Permissions Manager', link: '/role-permissions-manager' },
      { title: 'User Permissions', link: '/user-permissions' },
      {
        title: 'Role Permission for Page and Report',
        link: '/role-permission-page-report',
      },
      {
        title: 'Permitted Documents For User',
        link: '/permitted-documents-user',
      },
      { title: 'Document Share Report', link: '/document-share-report' },
    ],
  },
];

const UserPage = () => {
  return (
    <SiteLayout>
      <QuickLinksPanel title="Your Shortcuts" list={shortcuts} />
      <CategoryGrid title="Reports & Masters" list={reportsAndMasters} />
    </SiteLayout>
  );
};

export default UserPage;
