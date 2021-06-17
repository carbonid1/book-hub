import type { Story, Meta } from '@storybook/react';
import { LoadingContent, ILoadingContent } from '.';
import { Skeleton } from '../Skeleton';

export default { title: '@layout/LoadingContent', component: LoadingContent } as Meta;
const Template: Story<ILoadingContent> = props => (
  <LoadingContent {...props}>
    <ol>
      <li>Milk</li>
      <li>Potatos</li>
      <li>Glue</li>
    </ol>
  </LoadingContent>
);

export const Default = Template.bind({});
Default.args = {
  loading: false,
  empty: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const CustomLoader = Template.bind({});
CustomLoader.args = {
  ...Loading.args,
  loader: (
    <div className="flex flex-col gap-y-4">
      <Skeleton />
      <Skeleton className="w-96" />
      <Skeleton />
    </div>
  ),
};

export const InitiallyLoadedLoading = Template.bind({});
InitiallyLoadedLoading.args = {
  ...Loading.args,
  initiallyLoaded: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  empty: true,
  title: 'We are sorry :(',
  subTitle: 'There are no reviews yet. But you may submit the first one!',
};