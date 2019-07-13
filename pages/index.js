import React from 'react';
import {withRouter} from 'next/router'
import {
  Provider as I18nProvider,
  Manager as I18nManager,
} from '@shopify/react-i18n';

import HomeIndex from './components/HomeIndex';

import './styles/application.scss';

class Home extends React.Component {
  i18nManager = new I18nManager({
    locale: this.props.router.query.locale || 'en',
  });

  render() {
    return (
      <>
        <I18nProvider manager={this.i18nManager}>
          <HomeIndex />
        </I18nProvider>
      </>
    );
  }
}

export default withRouter(Home);
