import React from 'react';
import styles from './Nav.scss';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';

class Nav extends React.Component<WithI18nProps> {
  render() {
    const {i18n} = this.props;
    return (
      <nav>
        <ul className={styles.Menu}>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#intro">
              {i18n.translate('intro')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#about">
              {i18n.translate('about')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#menu">
              {i18n.translate('menu')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#gallery">
              {i18n.translate('gallery')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#contact">
              {i18n.translate('contact')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#faq">
              {i18n.translate('faq')}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withI18n()(Nav);
