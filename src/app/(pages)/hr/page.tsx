import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  BarChart,
  Calendar,
  ChevronRight,
  ClipboardList,
  Settings,
  Users,
} from "lucide-react";
import React from "react";

const HrPage = () => {
  return (
    <>
      <div className="flex flex-col gap-6 p-6">
        {/* Setup Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">
                Let&apos;s Set Up the Human Resource Module.
              </h1>
              <p className="text-gray-600">Employee, Leaves, and more.</p>
            </div>
            <Button variant="ghost">Dismiss</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    "Create Holiday List",
                    "Create Employee",
                    "Import Data from Spreadsheet",
                    "Create Leave Type",
                    "Create Leave Allocation",
                    "Create Leave Application",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
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
                <h3 className="text-xl font-semibold mb-4">HR Settings</h3>
                <p className="text-gray-600 mb-4">
                  Hr Settings consists of major settings related to Employee
                  Lifecycle, Leave Management, etc. Click on Explore, to explore
                  Hr Settings.
                </p>
                <Button>Explore</Button>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">
                    Hiring vs Attrition Count
                  </h3>
                  <p className="text-sm text-gray-500">Last synced just now</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <BarChart className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-end justify-center gap-4">
                <div className="w-20 h-32 bg-blue-200 rounded-t-lg"></div>
                <div className="w-20 h-24 bg-blue-600 rounded-t-lg"></div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
                  <span className="text-sm">Hiring Count</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  <span className="text-sm">Attrition Count</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shortcuts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Your Shortcuts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Employee", count: "0 Active", icon: Users },
                { title: "Leave Application", icon: Calendar },
                { title: "HR Dashboard", icon: BarChart },
                { title: "Recruitment Dashboard", icon: ClipboardList },
              ].map((item, index) => (
                <Card key={index} className="hover:bg-gray-50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        {item.count && (
                          <p className="text-sm text-gray-500">{item.count}</p>
                        )}
                      </div>
                      <item.icon className="h-5 w-5 text-gray-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex-1 p-6">
            {/* Masters & Reports */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Masters & Reports</h2>
              <div className="grid grid-cols-3 gap-8">
                {/* Setup */}
                <div>
                  <h3 className="font-medium mb-4">Setup</h3>
                  <div className="space-y-3">
                    {[
                      "Holiday List",
                      "Leave Type",
                      "Leave Period",
                      "Leave Policy",
                      "Leave Block List",
                    ].map((item) => (
                      <button
                        key={item}
                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                      >
                        <span>{item}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Allocation */}
                <div>
                  <h3 className="font-medium mb-4">Allocation</h3>
                  <div className="space-y-3">
                    {[
                      "Leave Allocation",
                      "Leave Policy Assignment",
                      "Leave Control Panel",
                      "Leave Encashment",
                    ].map((item) => (
                      <button
                        key={item}
                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                      >
                        <span>{item}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Application */}
                <div>
                  <h3 className="font-medium mb-4">Application</h3>
                  <div className="space-y-3">
                    {["Leave Application", "Compensatory Leave Request"].map(
                      (item) => (
                        <button
                          key={item}
                          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                        >
                          <span>{item}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Reports */}
              <div className="mt-8">
                <h3 className="font-medium mb-4">Reports</h3>
                <div className="space-y-3">
                  {[
                    "Employee Leave Balance",
                    "Employee Leave Balance Summary",
                    "Employees working on a holiday",
                  ].map((item) => (
                    <button
                      key={item}
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrPage;
