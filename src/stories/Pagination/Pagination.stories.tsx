import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Pagination>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    defaultPage: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    total: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    pageSize: {
      control: { type: 'number' },
      defaultValue: 10,
    },
  },
  args: {
    defaultPage: 1,
    total: 100,
    pageSize: 10,
  },
  render: ({ ...args }) => (
    <Pagination
      {...args}
      onChange={d => {
        console.log(d);
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
