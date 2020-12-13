import React from 'react';

import { ThumbnailContainer } from 'features/SharedComponents/DesignDetailsElements';

import watercolorSedimentThumb from './watercolorSedimentThumb.jpg';

export const WatercolorSedimentThumb: React.FunctionComponent = () => (
  <ThumbnailContainer>
    <img src={watercolorSedimentThumb} alt="watercolor sediment" />
  </ThumbnailContainer>
);
