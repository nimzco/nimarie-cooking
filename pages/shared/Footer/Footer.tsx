import styles from './Footer.scss';
import applicationStyles from '../../styles/application.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={applicationStyles.container}>
        © 2019 Marie-Emma Castanheira & Nima Izadi
      </div>
    </footer>
  );
}

export default Footer;
