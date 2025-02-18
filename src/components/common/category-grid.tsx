import { BlockContent, BlockItem } from '@/components/ui/block-content';
import {
  WidgetBody,
  WidgetBox,
  WidgetHead,
  WidgetTitle,
} from '@/components/ui/widget';
import { IBodyMenuItem } from '@/interfaces';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface CategoryGridProps {
  title: string;
  list: IBodyMenuItem[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ list, title }) => {
  return (
    <>
      <BlockItem>
        <BlockContent>
          <h4 className="pl-2 text-lg font-semibold capitalize">{title}</h4>
        </BlockContent>
      </BlockItem>
      {list.map((item, index) => (
        <BlockItem key={index} className="w-1/3 flex-[0_0_calc(1/3*100%)]">
          <BlockContent>
            <div data-card-name={item.title}>
              <WidgetBox>
                <WidgetHead>
                  <WidgetTitle>
                    <h5 className="text-foreground text-base font-semibold">
                      {item.title}
                    </h5>
                  </WidgetTitle>
                </WidgetHead>
                {item.children &&
                  item.children.map((item, index) => (
                    <WidgetBody key={index}>
                      <Link href={item.link ?? '#'} className="first:mt-3">
                        <span className="text-muted-foreground">
                          {item.title}
                        </span>
                        <ArrowUpRight className="text-muted-foreground ml-1.5 size-3.5" />
                      </Link>
                    </WidgetBody>
                  ))}
              </WidgetBox>
            </div>
          </BlockContent>
        </BlockItem>
      ))}
    </>
  );
};

export default CategoryGrid;
