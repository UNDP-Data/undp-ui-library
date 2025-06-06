import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, CarouselCard } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof CarouselCard>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Carousel or Slider',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', 'full'],
      defaultValue: { summary: 'sm' },
    },
  },
  args: { size: 'sm' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Carousel>
          <CarouselCard {...args}>
            <div className='h-96 bg-primary-gray-300' />
          </CarouselCard>
          <CarouselCard {...args}>
            <div className='h-96 bg-primary-gray-300' />
          </CarouselCard>
          <CarouselCard {...args}>
            <div className='h-96 bg-primary-gray-300' />
          </CarouselCard>
          <CarouselCard {...args}>
            <div className='h-96 bg-primary-gray-300' />
          </CarouselCard>
        </Carousel>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
