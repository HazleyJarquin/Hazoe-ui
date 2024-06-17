import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from '../../components/CustomButton';

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    width: '100px',
    sizeName: 'md',
    fontBold: false,
    fontSize: 'md',
    onClick: () => {
      console.log('Button clicked');
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      sizeName: { type: 'select' },
    },
  },
};
