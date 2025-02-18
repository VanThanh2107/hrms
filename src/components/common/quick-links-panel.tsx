'use client';

import { BlockContent, BlockItem } from '@/components/ui/block-content';
import { Button } from '@/components/ui/button';
import {
  WidgetBox,
  WidgetControl,
  WidgetHead,
  WidgetTitle,
} from '@/components/ui/widget';
import { IBodyMenuItem } from '@/interfaces';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface QuickLinksPanelProps {
  title: string;
  list: IBodyMenuItem[];
}

const QuickLinksPanel: React.FC<QuickLinksPanelProps> = ({
  list,
  title = '',
}) => {
  const router = useRouter();

  return (
    <>
      <BlockItem>
        <BlockContent>
          <h4 className="pl-2 text-lg font-semibold">{title}</h4>
        </BlockContent>
      </BlockItem>
      <>
        {list.map((item, index) => (
          <BlockItem key={index} className="w-1/4 flex-[0_0_calc(1/4*100%)]">
            <BlockContent>
              <WidgetBox>
                <WidgetHead onClick={() => item.link && router.push(item.link)}>
                  <WidgetTitle>
                    <span className="text-[13px] capitalize">{item.title}</span>
                  </WidgetTitle>
                  <WidgetControl className="space-x-1.5">
                    <ArrowUpRight className="text-muted-foreground ml-1.5 size-3.5" />
                    {item.control && (
                      <Button
                        variant={'outline'}
                        className="h-[20px] px-2 py-1 text-[13px]"
                      >
                        0 Active
                      </Button>
                    )}
                  </WidgetControl>
                </WidgetHead>
              </WidgetBox>
            </BlockContent>
          </BlockItem>
        ))}
      </>
    </>
  );
};

export default QuickLinksPanel;
