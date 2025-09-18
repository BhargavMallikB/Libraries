import { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    iconPosition: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
    severity: { control: 'select', options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'help', 'custom'] },
    size: { control: 'select', options: ['small', 'normal', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    rounded: { control: 'boolean' },
    outlined: { control: 'boolean' },
    raised: { control: 'boolean' },
    text: { control: 'boolean' },
    link: { control: 'boolean' },
    customClass: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    severity: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    severity: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    severity: 'success',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    severity: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    severity: 'primary',
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    icon: 'pi pi-check',
    severity: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    severity: 'primary',
    outlined: true,
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded Button',
    severity: 'primary',
    rounded: true,
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    severity: 'primary',
    link: true,
  },
};
