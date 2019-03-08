import styles from './Title.scss';

function Title() {
  return (
    <div className={styles.Wrapper}>
      <div className="container">
        <header className={styles.Header}>
          <h1>Let’s have a dinner together</h1>
          <h2 className={styles.Subtitle}>
            Marie-Emma & Nima are cooking!
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

export default Title;
