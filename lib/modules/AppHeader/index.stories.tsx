import type { Story, Meta } from '@storybook/react';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { rest } from 'msw';
import usersMock from 'lib/mocks/users';
import { AppHeader } from '.';

// TODO: refactor

export default {
  title: 'modules/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => (
  <NextAuthProvider session={{ user: usersMock.ivan }}>
    <AppHeader {...args} />
  </NextAuthProvider>
);
export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get(`${window.origin}/api/auth/session`, (req, res, ctx) => {
      return res(ctx.json({ user: usersMock.ivan }));
    }),
  ],
};

const SignedOutTemplate: Story = args => (
  <NextAuthProvider session={undefined}>
    <AppHeader {...args} />
  </NextAuthProvider>
);
export const SignedOut = SignedOutTemplate.bind({});
SignedOut.parameters = {
  msw: [
    rest.get(`${window.origin}/api/auth/session`, (req, res, ctx) => {
      return res(ctx.json({}));
    }),
  ],
};
