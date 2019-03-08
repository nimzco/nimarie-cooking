import PageHead from './PageHead';
import Title from './Title';
import Nav from './Nav';
import Footer from './Footer';

import styles from '../styles/application.scss';

function Layout({children}) {
  return (
    <div>
      <PageHead />
      <div className={styles.container}>
        <Title />
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
