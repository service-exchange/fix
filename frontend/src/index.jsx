import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { createBrowserHistory } from 'history';
import { appService } from '@/_services';
import { App } from './App';

const AppWithProfiler = Sentry.withProfiler(App);

appService
  .getConfig()
  .then((config) => {
    window.public_config = config;

    if (window.public_config.APM_VENDOR === 'sentry') {
      const history = createBrowserHistory();
      const telecmsServerUrl = window.public_config.TELECMS_SERVER_URL;
      const tracingOrigins = ['localhost', /^\//];
      const releaseVersion = window.public_config.RELEASE_VERSION
        ? `telecms-${window.public_config.RELEASE_VERSION}`
        : 'telecms';

      if (telecmsServerUrl) tracingOrigins.push(telecmsServerUrl);

      Sentry.init({
        dsn: window.public_config.SENTRY_DNS,
        debug: !!window.public_config.SENTRY_DEBUG,
        release: releaseVersion,
        integrations: [
          new Integrations.BrowserTracing({
            routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
            tracingOrigins: tracingOrigins,
          }),
        ],
        tracesSampleRate: 0.5,
      });
    }
  })
  .then(() => render(<AppWithProfiler />, document.getElementById('app')));
