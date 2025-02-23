/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, Button, useToast } from '@/index';

function ToastButton() {
  const { toast } = useToast();

  return (
    <div className='p-4'>
      <Button
        onClick={() => {
          // define 'toast' as  const { toast } = useToast();
          toast({
            title: 'Notification Title',
            variant: 'destructive',
            description: 'This is a sample toast message.',
            duration: 3000,
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
}

const meta: Meta<typeof ToastButton> = {
  title: 'Components/ToastButton',
  component: ToastButton,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToastButton>;

export const Default: Story = {};

export const ConfigurableToast: Story = {
  render: (args: any) => {
    const { toast } = useToast();

    return (
      <div className='p-4'>
        <Button
          /* 
            define 'toast' as  const { toast } = useToast();
            </div>onClick={() => {
              toast({
                title: args.title,
                description: args.description,
                variant: args.variant,
                duration: args.duration,
              });
            }} 
          */
          onClick={() => {
            toast({
              title: args.title,
              description: args.description,
              variant: args.variant,
              duration: args.duration,
            });
          }}
        >
          Click here
        </Button>
        <Toaster />
      </div>
    );
  },
  tags: ['autodocs'],
  args: {
    title: 'Custom Notification',
    description:
      'This toast message can be configured through Storybook controls.',
    variant: 'default',
    duration: 5000,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
    duration: {
      control: { type: 'number' },
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
};
