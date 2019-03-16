import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import KRFlag from '../LanguageSwitcher/flags/kr.svg';
import JPFlag from '../LanguageSwitcher/flags/jp.svg';

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
          <div className={styles.Dates}>
            <p>
              <img className={styles.Flag} src={KRFlag} /><span>Du 15 août au 1er octobre</span>
            </p>
            <p>
              <img className={styles.Flag} src={JPFlag} /><span>Du 1er october à mi-novembre</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withI18n()(Title);
