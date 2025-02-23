import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cite } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Cite>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Cite',
  component: Cite,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => (
    <Cite {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
      augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos.
    </Cite>
  ),
};

export default meta;

type Story = StoryObj<typeof Cite>;

export const Default: Story = {};
