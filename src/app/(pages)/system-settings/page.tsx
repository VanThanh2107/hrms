'use client';

import * as ROUTES from '@/constants/routes';
import ControlLayout from '@/layouts/control-layout';
import SettingSidebar from '@/layouts/setting-sidebar';
import { useBreadcrumbStore } from '@/store/useBreadcrumbStore';
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import DetailsTab from './component/details-tab';
import FooterForm from '@/components/common/footer-form';
import PageHeader from './component/page-header';
import LoginTab from './component/login-tab';

const SystemSettingsPage = () => {
  const setBreadcrumb = useBreadcrumbStore((state) => state.setBreadcrumb);
  const [isScroll] = useState(false);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setBreadcrumb([
      {
        label: 'Build',
        href: ROUTES.BUILD,
      },
      {
        label: 'System Settings',
      },
    ]);
  }, [setBreadcrumb]);

  useEffect(() => {
    console.log(document.querySelector('#main-content'));
  }, []);

  return (
    <ControlLayout
      pageHeader={<PageHeader />}
      sidebar={<SettingSidebar />}
      footerForm={<FooterForm />}
    >
      <div className="w-full">
        <Tabs defaultValue="details" className="w-full">
          <div
            ref={tabsRef}
            className={cn(
              'bg-white transition-all duration-200',
              isScroll && 'border-border z-10 border-x',
            )}
            style={{
              top: isScroll ? 'calc(var(--header-height) - 1px)' : '',
            }}
          >
            <TabsList className="h-10 w-full justify-start rounded-none border-b bg-transparent p-0">
              {[
                'Details',
                'Login',
                'Password',
                'Email',
                'Files',
                'App',
                'Updates',
                'Backups',
                'Advanced',
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="py-3"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="details">
            <DetailsTab />
          </TabsContent>
          <TabsContent value="login">
            <LoginTab />
          </TabsContent>
        </Tabs>
      </div>
    </ControlLayout>
  );
};

export default SystemSettingsPage;
