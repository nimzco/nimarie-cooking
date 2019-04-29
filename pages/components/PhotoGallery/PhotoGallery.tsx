import styles from './PhotoGallery.scss';
import photos from './photos';

function PhotoGallery() {
  return (
    <div id="gallery">
      <div className={styles.Row3}>
        <div className={styles.Column}>
          <div style={{backgroundImage: `url("${photos[8]}")`}} className={styles.Photo} />
          <div style={{backgroundImage: `url("${photos[10]}")`}} className={styles.Photo} />
        </div>
        <div style={{backgroundImage: `url("${photos[9]}")`}} className={styles.Photo} />
      </div>
      <div className={styles.Row}>
        <div style={{backgroundImage: `url("${photos[0]}")`}} className={styles.Photo} />
        <div className={styles.Column}>
          <div style={{backgroundImage: `url("${photos[1]}")`}} className={styles.Photo} />
          <div style={{backgroundImage: `url("${photos[2]}")`}} className={styles.Photo} />
        </div>
      </div>
      <div className={styles.Row}>
        <div style={{backgroundImage: `url("${photos[3]}")`}} className={styles.Photo} />
        <div style={{backgroundImage: `url("${photos[4]}")`}} className={styles.Photo} />
      </div>
      <div className={styles.Row2}>
        <div style={{backgroundImage: `url("${photos[5]}")`}} className={styles.Photo} />
        <div style={{backgroundImage: `url("${photos[6]}")`}} className={styles.Photo} />
        <div style={{backgroundImage: `url("${photos[7]}")`}} className={styles.Photo} />
      </div>
    </div>
  );
}

export default PhotoGallery;
