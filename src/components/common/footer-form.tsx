import React from 'react';
import { Input } from '../ui/input';

const FooterForm = () => {
  return (
    <React.Fragment>
      <div className="footer-form mb-10">
        <div className="mt-5">
          <h2 className="mb-4 text-lg font-semibold">Comments</h2>
          <div className="flex items-start space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-100 text-orange-600">
              NV
            </div>
            <Input placeholder="Type a reply / comment" className="flex-1" />
          </div>
        </div>
        <div className="relative pt-5">
          <h2 className="mb-4 text-lg font-semibold">Activity</h2>
          <div className="space-y-4">
            <p className="text-sm">Administrator created this</p>
            <p className="text-sm">You last edited this · 6 days ago</p>
            <p className="text-sm">
              Administrator changed the value of Country from null to Vietnam,
              Language from null to en, Time Zone from null to Asia/Ho_Chi_Minh
              · 6 days ago
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterForm;
