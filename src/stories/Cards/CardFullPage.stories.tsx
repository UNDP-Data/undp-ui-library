import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  PageWideCard,
  PageWideCardTag,
  PageWideCardTitle,
  PageWideCardDescription,
  PageWideCardImage,
  PageWideCardFooter,
  PageWideCardContent,
  PageWideCardContainer,
  PageWideCardHeader,
  Button,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof PageWideCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Cards/Full Width',
  component: PageWideCard,
  tags: ['autodocs'],
  argTypes: {
    imageWidth: {
      control: { type: 'select' },
      options: ['zero', 'xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: { summary: 'base' },
    },
    border: {
      control: { type: 'boolean' },
      defaultValue: { summary: true },
    },
  },
  args: {
    imageWidth: 'base',
    border: true,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <PageWideCard {...args}>
          <PageWideCardTag>Tag here</PageWideCardTag>
          <PageWideCardContainer>
            <PageWideCardContent>
              <PageWideCardHeader>
                <PageWideCardTitle>Card Title</PageWideCardTitle>
                <PageWideCardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit augue eu
                  sagittis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </PageWideCardDescription>
              </PageWideCardHeader>
              <PageWideCardFooter>
                <Button variant='link' padding='none'>
                  Read more
                </Button>
              </PageWideCardFooter>
            </PageWideCardContent>
            <PageWideCardImage
              className='h-96'
              src='https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </PageWideCardContainer>
        </PageWideCard>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PageWideCard>;

export const Default: Story = {};
