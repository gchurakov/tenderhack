import React from 'react';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

export const withMantine = (component: () => React.ReactNode) => () => (
  <MantineProvider defaultColorScheme="dark">{component()}</MantineProvider>
);
