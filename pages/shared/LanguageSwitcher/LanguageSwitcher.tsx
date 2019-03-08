import React from 'react';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import classNames from 'classnames';

import ENFlag from './flags/en.svg';
import FRFlag from './flags/fr.svg';
import KRFlag from './flags/kr.svg';
import JPFlag from './flags/jp.svg';

const Flags = {
  en: ENFlag,
  fr: FRFlag,
  kr: KRFlag,
  ja: JPFlag,
};

import styles from './LanguageSwitcher.scss';

class LanguageSwitcher extends React.Component<WithI18nProps> {
  render() {
    const {i18n} = this.props;

    return (
      <div className={styles.LanguageSwitcher}>
        <button className={styles.Locale}>
          <span>{i18n.translate(i18n.language)}</span>
          <img className={styles.Flag} src={Flags[i18n.language]} />
        </button>
        <ul className={styles.Dropdown}>
          {['fr', 'en', 'kr', 'ja'].map(locale => (
            <li key={locale} className={styles.DropdownLocale}>
              <a href={`?locale=${locale}`} className={styles.Locale}>
                <span>{i18n.translate(locale)}</span>
                <img className={styles.Flag} src={Flags[locale]} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withI18n()(LanguageSwitcher);
