import QuickLinksPanel from '@/components/common/quick-links-panel';
import SiteLayout from '@/layouts/site-layout';
import React from 'react';
import { componentsLinks, getStartedLinks } from './links-panel';
import CategoryGrid from '@/components/common/category-grid';

const BuildPage = () => {
  return (
    <SiteLayout>
      <QuickLinksPanel title="Get started" list={getStartedLinks} />
      <CategoryGrid
        title="Components to build your app"
        list={componentsLinks}
      />
    </SiteLayout>
  );
};

export default BuildPage;
