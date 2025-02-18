import { ISidebarItem } from '@/interfaces';
import { Krub } from 'next/font/google';

const krub = Krub({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-krub',
});

const findTitleByUrl = (data: ISidebarItem[], url: string): string | null => {
  const segments = url.split('/').filter(Boolean);
  const lastSegment = segments.length ? segments[segments.length - 1] : null;

  if (!lastSegment) return null;

  const findTitle = (items: ISidebarItem[], segment: string): string | null => {
    for (const item of items) {
      if (item.path.endsWith(segment)) {
        return item.title;
      }
      if (item.children) {
        const foundTitle = findTitle(item.children, segment);
        if (foundTitle) return foundTitle;
      }
    }
    return null;
  };

  return findTitle(data, lastSegment);
};

export { krub, findTitleByUrl };
