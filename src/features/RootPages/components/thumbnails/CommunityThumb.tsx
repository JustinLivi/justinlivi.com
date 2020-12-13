import React from 'react';

import { ThumbnailContainer } from 'features/SharedComponents/DesignDetailsElements';

import communityThumb from './communityThumb.jpg';

export const CommunityThumb: React.FunctionComponent = () => (
  <ThumbnailContainer>
    <img src={communityThumb} alt="community" />
  </ThumbnailContainer>
);
