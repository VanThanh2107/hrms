import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { dateFormats, timeFormats } from '@/constants';

const DetailsTab = () => {
  return (
    <>
      <div className="mt-6 space-y-6 px-5">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4 *:px-3">
            <div>
              <Label className="text-sm font-medium">Country</Label>
              <Select defaultValue="vietnam">
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vietnam">Vietnam</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium">
                Language <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue="english">
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4 *:px-3">
            <div>
              <Label className="text-sm font-medium">
                Time Zone <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue="asia_ho_chi_minh" disabled>
                <SelectTrigger className="mt-1 w-full select-none">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asia_ho_chi_minh">
                    Asia/Ho_Chi_Minh
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium">Currency</Label>
              <Select defaultValue="vnd">
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vnd">VND</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-1 mb-4 text-sm text-gray-500">
                Default display currency
              </p>
              <div className="space-y-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="onboarding" checked />
                    <label htmlFor="onboarding" className="text-sm font-medium">
                      Enable Onboarding
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="document-sharing" />
                    <label
                      htmlFor="document-sharing"
                      className="text-sm font-medium"
                    >
                      Disable Document Sharing
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div>
          <h2 className="mb-4 text-lg font-semibold">Date and Number Format</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">
                  Date Format <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="dd-mm-yyyy">
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    {dateFormats.map((format) => (
                      <SelectItem key={format.value} value={format.value}>
                        {format.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium">
                  Time Format <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="HH:mm:ss">
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select time format" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeFormats.map((format) => (
                      <SelectItem key={format.value} value={format.value}>
                        {format.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium">
                  Number Format <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="#,###,##">
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select number format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#,###,##">#,###,##</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Float Precision</Label>
                <Select defaultValue="3">
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select precision" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium">
                  Currency Precision
                </Label>
                <Select defaultValue="none">
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select currency precision" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Not set</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-1 text-sm text-gray-500">
                  If not set, the currency precision will depend on number
                  format
                </p>
              </div>

              <div>
                <Label className="text-sm font-medium">Rounding Method</Label>
                <Select defaultValue="bankers">
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select rounding method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bankers">
                      Banker&apos;s Rounding
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-7">
          <h2 className="mb-4 text-lg font-semibold">Permissions</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="strict-permissions" />
              <label
                htmlFor="strict-permissions"
                className="text-sm font-medium"
              >
                Apply Strict User Permissions
              </label>
            </div>
            <p className="ml-6 text-sm text-gray-500">
              If Apply Strict User Permission is checked and User Permission is
              defined for a DocType for a User, then all the documents where
              value of the link is blank, will not be shown to that User
            </p>

            <div className="flex items-center space-x-2">
              <Checkbox id="older-web-links" />
              <label htmlFor="older-web-links" className="text-sm font-medium">
                Allow Older Web View Links (Insecure)
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTab;
