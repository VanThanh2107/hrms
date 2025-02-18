import { IBodyMenuItem } from '@/interfaces';

const getStartedLinks: IBodyMenuItem[] = [
  { title: 'DocType', link: '/doctype' },
  { title: 'Customize Form', link: '/customize-form' },
  { title: 'Report', link: '/report' },
  { title: 'Client Script', link: '/client-script' },
  { title: 'Server Script', link: '/server-script' },
  { title: 'Print Format Builder', link: '/print-format-builder' },
  { title: 'System Settings', link: '/system-settings' },
];

const componentsLinks: IBodyMenuItem[] = [
  {
    title: 'Models',
    children: [
      { title: 'DocType', link: '/doctype' },
      { title: 'Workflow', link: '/workflow' },
    ],
  },
  {
    title: 'Views',
    children: [
      { title: 'Report', link: '/report' },
      { title: 'Print Format', link: '/print-format' },
      { title: 'Workspace', link: '/workspace' },
      { title: 'Dashboard', link: '/dashboard' },
      { title: 'Dashboard Chart', link: '/dashboard-chart' },
    ],
  },
  {
    title: 'Scripting',
    children: [
      { title: 'Server Script', link: '/server-script' },
      { title: 'Client Script', link: '/client-script' },
      { title: 'Scheduled Job Type', link: '/scheduled-job-type' },
    ],
  },
  {
    title: 'Customization',
    children: [
      { title: 'Customize Form', link: '/customize-form' },
      { title: 'Custom Field', link: '/custom-field' },
      { title: 'Custom Translation', link: '/custom-translation' },
      { title: 'Navbar Settings', link: '/navbar-settings' },
    ],
  },
  {
    title: 'Modules',
    children: [
      { title: 'Module Def', link: '/module-def' },
      { title: 'Module Onboarding', link: '/module-onboarding' },
    ],
  },
  {
    title: 'Packages',
    children: [
      { title: 'Package', link: '/package' },
      { title: 'Package Import', link: '/package-import' },
    ],
  },
  {
    title: 'System Logs',
    children: [
      { title: 'Background Jobs', link: '/background-jobs' },
      { title: 'Scheduled Jobs Logs', link: '/scheduled-jobs-logs' },
      { title: 'Error Logs', link: '/error-logs' },
      { title: 'Communication Logs', link: '/communication-logs' },
      { title: 'Activity Log', link: '/activity-log' },
    ],
  },
];

export { getStartedLinks, componentsLinks };
