import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Settings } from 'lucide-react';
import React from 'react';
import ChartSection from './chart-section';
import { BlockContent, BlockItem } from '@/components/ui/block-content';
import { IBodyMenuItem } from '@/interfaces';
import * as ROUTES from '@/constants/routes';
import { WidgetSpacer } from '@/components/ui/widget';
import SiteLayout from '@/layouts/site-layout';
import QuickLinksPanel from '../../../components/common/quick-links-panel';
import CategoryGrid from '@/components/common/category-grid';

const shortcuts: IBodyMenuItem[] = [
  {
    title: 'Employee',
    link: ROUTES.EMPLOYEE,
    control: true,
  },
  {
    title: 'leave application',
    link: ROUTES.LEAVE_APPLICATION,
  },
  {
    title: 'HR dashboard',
    link: ROUTES.HR_DASHBOARD,
  },
  {
    title: 'recruitment dashboard',
    link: ROUTES.RECRUITMENT_DASHBOARD,
  },
  {
    title: 'employee lifecycle dashboard',
    link: ROUTES.EMPLOYEE_LIFECYCLE_DASHBOARD,
  },
  {
    title: 'attendace dashboard',
    link: ROUTES.ATTENDANCE_DASHBOARD,
  },
  {
    title: 'expense claims dashboard',
    link: ROUTES.EXPENSE_CLAIMS_DASHBOARD,
  },
];
const reportsAndMastersMenu: IBodyMenuItem[] = [
  {
    title: 'Setup',
    children: [
      { title: 'Company', link: '/company' },
      { title: 'Branch', link: '/branch' },
      { title: 'Department', link: '/department' },
      { title: 'Designation', link: '/designation' },
    ],
  },
  {
    title: 'Settings',
    children: [
      { title: 'HR Settings', link: '/hr-settings' },
      { title: 'Daily Work Summary Group', link: '/daily-work-summary-group' },
      { title: 'Team Updates', link: '/team-updates' },
    ],
  },
  {
    title: 'Employee',
    children: [
      { title: 'Employee', link: '/employee' },
      { title: 'Employee Group', link: '/employee-group' },
      { title: 'Employee Grade', link: '/employee-grade' },
    ],
  },
  {
    title: 'Attendance',
    children: [
      { title: 'Attendance', link: '/attendance' },
      { title: 'Attendance Request', link: '/attendance-request' },
      { title: 'Employee Checkin', link: '/employee-checkin' },
    ],
  },
  {
    title: 'Leaves',
    children: [
      { title: 'Leave Application', link: '/leave-application' },
      {
        title: 'Compensatory Leave Request',
        link: '/compensatory-leave-request',
      },
    ],
  },
  {
    title: 'Expense Claim',
    children: [
      { title: 'Expense Claim', link: '/expense-claim' },
      { title: 'Employee Advance', link: '/employee-advance' },
      { title: 'Travel Request', link: '/travel-request' },
    ],
  },
  {
    title: 'Key Reports',
    children: [
      { title: 'Monthly Attendance Sheet', link: '/monthly-attendance-sheet' },
      { title: 'Recruitment Analytics', link: '/recruitment-analytics' },
      { title: 'Employee Analytics', link: '/employee-analytics' },
      { title: 'Employee Leave Balance', link: '/employee-leave-balance' },
      {
        title: 'Employee Leave Balance Summary',
        link: '/employee-leave-balance-summary',
      },
      { title: 'Employee Advance Summary', link: '/employee-advance-summary' },
      { title: 'Employee Exits', link: '/employee-exits' },
    ],
  },
  {
    title: 'Other Reports',
    children: [
      { title: 'Employee Information', link: '/employee-information' },
      { title: 'Employee Birthday', link: '/employee-birthday' },
      {
        title: 'Employees Working on a Holiday',
        link: '/employees-working-holiday',
      },
      {
        title: 'Daily Work Summary Replies',
        link: '/daily-work-summary-replies',
      },
    ],
  },
];

const HrPage = () => {
  return (
    <SiteLayout>
      {/* Setup Section */}
      <BlockItem className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Let&apos;s Set Up the Human Resource Module.
            </h1>
            <p className="text-gray-600">Employee, Leaves, and more.</p>
          </div>
          <Button variant="outline">Dismiss</Button>
        </div>
      </BlockItem>

      <BlockItem className="mb-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">HR Settings</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Skip
                  </Button>
                </div>
                {[
                  'Create Holiday List',
                  'Create Employee',
                  'Import Data from Spreadsheet',
                  'Create Leave Type',
                  'Create Leave Allocation',
                  'Create Leave Application',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300">
                      <ChevronRight className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-xl font-semibold">HR Settings</h3>
              <p className="mb-4 text-gray-600">
                Hr Settings consists of major settings related to Employee
                Lifecycle, Leave Management, etc. Click on Explore, to explore
                Hr Settings.
              </p>
              <Button variant={'outline'}>Explore</Button>
            </CardContent>
          </Card>
        </div>
      </BlockItem>

      {/* Chart Section */}
      <BlockItem className="mb-4">
        <ChartSection />
      </BlockItem>

      {/* Shortcuts */}
      <QuickLinksPanel title="Your Shortcuts" list={shortcuts} />
      <BlockItem>
        <BlockContent>
          <WidgetSpacer />
        </BlockContent>
      </BlockItem>
      {/* Reports & Masters */}
      <CategoryGrid title="Reports & Masters" list={reportsAndMastersMenu} />
    </SiteLayout>
  );
};

export default HrPage;
