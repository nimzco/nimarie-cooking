import PageHead from './PageHead';
import Title from './Title';
import Nav from './Nav';
import Footer from './Footer';

interface Props {
  children: JSX.Element,
}

function Layout({children}: Props) {
  return (
    <div>
      <PageHead />
      <Title />
      <div className="container">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
