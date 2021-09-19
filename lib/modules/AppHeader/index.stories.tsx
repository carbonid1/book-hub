import type { Story, Meta } from '@storybook/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { graphql } from 'msw';
import usersMock from 'lib/mocks/users';
import gg from 'lib/generated';
import { AppHeader } from '.';

export default {
  title: 'modules/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const mockedClient = new ApolloClient({
  uri: 'https://mocked/api',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const Template: Story = args => (
  <ApolloProvider client={mockedClient}>
    <AppHeader {...args} />
  </ApolloProvider>
);
export const Default = Template.bind({});
Default.parameters = {
  msw: [
    graphql.query(gg.names.Query.ProfileHook, (req, res, ctx) => {
      return res(ctx.data({ profile: usersMock.ivan }));
    }),
  ],
};

const SignedOutTemplate: Story = args => (
  <ApolloProvider client={mockedClient}>
    <AppHeader {...args} />
  </ApolloProvider>
);
export const SignedOut = SignedOutTemplate.bind({});
SignedOut.parameters = {
  msw: [
    graphql.query(gg.names.Query.ProfileHook, (req, res, ctx) => {
      return res(ctx.data({ profile: null }));
    }),
  ],
};
