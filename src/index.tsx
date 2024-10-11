import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import FeastUI from '@feast-dev/feast-ui';
import '@feast-dev/feast-ui/dist/feast-ui.css';
import DemoCustomTab from './DemoCustomTab';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <FeastUI
      feastUIConfigs={{
        tabsRegistry: {
          EntityCustomTabs: [
            {
              label: 'Custom Tab Demo', // Navigation Label for the tab
              path: 'demo-tab', // Subpath for the tab
              Component: DemoCustomTab, // a React Component
            },
          ],
        },
      }}
    />
  </StrictMode>
);
