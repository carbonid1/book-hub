import React from 'react';
import { BaseError } from '../BaseError';

export const NotFound: React.FC = () => {
  return <BaseError status="404" title="404" subTitle="Sorry, the page you visited does not exist." />;
};
