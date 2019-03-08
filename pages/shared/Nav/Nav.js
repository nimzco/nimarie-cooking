import React from 'react';
import styles from './Nav.scss';
import {withI18n} from '@shopify/react-i18n';

class Nav extends React.Component {
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
              The Experience
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#what-we-ask">
              What We Are Looking For
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#menu">
              Menu
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#contact">
              Contact us
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a className={styles.Link} href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withI18n()(Nav);
