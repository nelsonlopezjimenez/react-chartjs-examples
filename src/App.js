import React from 'react';

import { AppBubble } from './BubbleChart';
import {App1} from './MultipleCharts';
import { Acquisitions } from './acquisitions'

export function App() {
  return (
    <>
      <AppBubble/>;
      <App1 />
      <Acquisitions />
    </>
  )
}
