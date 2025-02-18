import ControlLayout from '@/layouts/control-layout';
import { User } from '@/type';
import { DataTable } from './data-table';
import { columns } from './columns';
import PageHeader from './page-header';
import ControlSidebar from '@/layouts/control-sidebar';

const data: User[] = [
  {
    id: 'nguyenvanthanh210704@gmail.com',
    fullName: 'Nguyễn Văn Thành',
    status: 'Active',
    userType: 'System User',
    username: 'vanthanh',
  },
  {
    id: 'vanthanh210704@gmail.com',
    fullName: 'Văn Thành',
    status: 'Active',
    userType: 'System User',
    username: 'vanthanh',
  },
];

const UserPage = () => {
  return (
    <ControlLayout pageHeader={<PageHeader />} sidebar={<ControlSidebar />}>
      <DataTable data={data} columns={columns} />
    </ControlLayout>
  );
};

export default UserPage;
