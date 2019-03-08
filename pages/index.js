import React from 'react';
import HomeIndex from './components/HomeIndex';
import {
  Provider as I18nProvider,
  Manager as I18nManager,
} from '@shopify/react-i18n';

import './styles/application.scss';

const i18nManager = new I18nManager({
  locale: 'en'
});

class Home extends React.Component {
  render() {
    return (
      <>
        <I18nProvider manager={i18nManager}>
          <HomeIndex />
        </I18nProvider>
      </>
    );
  }
}

export default Home;
