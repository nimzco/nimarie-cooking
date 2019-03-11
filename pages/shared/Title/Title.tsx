import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';

import styles from './Title.scss';

class Title extends React.Component<WithI18nProps> {
  render() {
    const {i18n} = this.props;
    return (
      <div className={styles.Wrapper}>
        <LanguageSwitcher />
        <div className="container">
          <header className={styles.Header}>
            <h1>{i18n.translate('title')}</h1>
            <h2 className={styles.Subtitle}>{i18n.translate('subtitle')}</h2>
          </header>
          <p className={styles.Tagline}>
            <strong>{i18n.translate('taglineBold')}</strong>
            <br />
            {i18n.translate('tagline1')}
            <br />
            {i18n.translate('tagline2')}
          </p>
        </div>
      </div>
    );
  }
}

export default withI18n()(Title);
