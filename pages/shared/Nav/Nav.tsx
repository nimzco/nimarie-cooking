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
            <a className={styles.Link} href="#who-we-are">
              {i18n.translate('hosts')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#the-experience">
              {i18n.translate('experience')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#what-we-ask">
              {i18n.translate('whatWeAreLookingFor')}
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#menu">
              {i18n.translate('menu')}
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
