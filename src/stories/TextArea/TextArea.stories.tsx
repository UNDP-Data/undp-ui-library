import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Textarea>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Text area',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['light', 'normal'],
      defaultValue: 'normal',
    },
  },
  render: ({ ...args }, { globals: { theme } }) => (
    <div
      className={`p-4 ${theme} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <Textarea
        {...args}
        onChange={d => {
          console.log(d.target.value);
        }}
      />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
