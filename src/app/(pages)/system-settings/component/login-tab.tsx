import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const LoginTab = () => {
  const [formState, setFormState] = useState({
    sessionExpiry: '170:00',
    documentExpiry: '30',
    emailLinkExpiry: '10',
    rateLimitEmail: '0',
    loginAttempts: '10',
    loginAfterFail: '60',
  });

  const handleInputChange =
    (field: keyof typeof formState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div className="w-full space-y-6">
      {/* Session Settings */}
      <div className="space-y-4 px-4 py-3">
        <div className="grid grid-cols-2 gap-x-7">
          <div className="space-y-2">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                Session Expiry (idle timeout)
              </h3>
              <Input
                type="text"
                defaultValue={formState.sessionExpiry}
                onChange={handleInputChange('sessionExpiry')}
                className="h-8 w-full bg-gray-50"
              />
              <p className="text-muted-foreground text-sm">
                Example: Setting this to 24:00 will log out a user if they are
                not active for 24:00 hours.
              </p>
            </div>
            <div className="space-y-2">
              <Label className="text-base">
                Document Share Key Expiry (in Days)
              </Label>
              <Input
                type="number"
                defaultValue={formState.documentExpiry}
                onChange={handleInputChange('documentExpiry')}
                className="mt-2 h-8 w-full bg-gray-50"
              />
              <p className="text-muted-foreground mt-2 text-sm">
                Number of days after which the document Web View link shared on
                email will be expired
              </p>
            </div>
          </div>
          <div className="space-y-7">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="single-session" />
                <Label htmlFor="single-session">
                  Allow only one session per user
                </Label>
              </div>
              <p className="text-muted-foreground text-sm">
                Note: Multiple sessions will be allowed in case of mobile device
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="disable-password" />
                <Label htmlFor="disable-password">
                  Disable Username/Password Login
                </Label>
              </div>
              <p className="text-muted-foreground text-sm">
                Make sure to configure a Social Login Key before disabling to
                prevent lockout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Methods */}
      <div className="border-border space-y-4 border-y px-4 py-7">
        <h3 className="text-lg font-medium">Login Methods</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="mobile-login" />
              <Label htmlFor="mobile-login">
                Allow Login using Mobile Number
              </Label>
            </div>
            <p className="text-muted-foreground text-sm">
              User can login using Email id or Mobile number
            </p>

            <div className="flex items-center space-x-2">
              <Checkbox id="username-login" />
              <Label htmlFor="username-login">
                Allow Login using User Name
              </Label>
            </div>
            <p className="text-muted-foreground text-sm">
              User can login using Email id or User Name
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="email-link" defaultChecked />
              <Label htmlFor="email-link">Login with email link</Label>
            </div>
            <p className="text-muted-foreground text-sm">
              Allow users to log in without a password, using a login link sent
              to their email
            </p>

            <div className="space-y-2">
              <Label>Login with email link expiry (in minutes)</Label>
              <Input
                type="number"
                defaultValue={formState.emailLinkExpiry}
                onChange={handleInputChange('emailLinkExpiry')}
                className="h-8 w-full bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label>Rate limit for email link login</Label>
              <Input
                type="number"
                defaultValue={formState.rateLimitEmail}
                onChange={handleInputChange('rateLimitEmail')}
                className="h-8 w-full bg-gray-50"
              />
              <p className="text-muted-foreground text-sm">
                You can set a high value here if multiple users will be logging
                in from the same network.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brute Force Security */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Brute Force Security</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label>Allow Consecutive Login Attempts</Label>
            <Input
              type="number"
              defaultValue={formState.loginAttempts}
              onChange={handleInputChange('loginAttempts')}
              className="w-24 bg-gray-50"
            />
          </div>
          <div className="space-y-2">
            <Label>Allow Login After Fail</Label>
            <Input
              type="number"
              defaultValue={formState.loginAfterFail}
              onChange={handleInputChange('loginAfterFail')}
              className="w-24 bg-gray-50"
            />
            <p className="text-muted-foreground text-sm">In seconds</p>
          </div>
        </div>
      </div>

      {/* Two Factor Authentication */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Two Factor Authentication</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="two-factor" />
          <Label htmlFor="two-factor">Enable Two Factor Auth</Label>
        </div>
      </div>
    </div>
  );
};

export default LoginTab;
