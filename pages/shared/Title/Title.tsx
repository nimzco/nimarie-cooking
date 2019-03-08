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
            <h2 className={styles.Subtitle}>
              {i18n.translate('subtitle')}
            </h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos id voluptas, officiis
            temporibus laboriosam perferendis ab consequatur optio vero voluptatum modi et? Cum facilis
            minima tempore nobis, laboriosam quia ipsa?
          </p>
        </div>
      </div>
    );
  }
}

export default withI18n()(Title);
