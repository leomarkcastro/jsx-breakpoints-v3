import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breakpoint } from './Breakpoint';

export default {
  title: 'Breakpoint',
  component: Breakpoint,
} as ComponentMeta<typeof Breakpoint>;

const Template: ComponentStory<typeof Breakpoint> = (args) => <Breakpoint {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Will Only Appear from mobile to laptop',
  start: 'sm',
  end: 'lg',
};
