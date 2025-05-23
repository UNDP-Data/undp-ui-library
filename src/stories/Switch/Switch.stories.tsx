import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Switch>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: { summary: 'red' },
    },
    size: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['small', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    className: { control: { type: 'text' } },
  },
  args: {
    color: 'red',
    size: 'normal',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Switch
          {...args}
          onChange={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
