import React from 'react';
import { IntlProvider } from 'react-intl';

import config from '@/config';
import strings from '@/internationalization/config';
import Body from './body';


const Page = () => (
  <IntlProvider
    locale={config.defualtLanguage}
    messages={strings[config.defualtLanguage]}
  >
    <>
      <Body />
    </>
  </IntlProvider>
);
export default Page;
