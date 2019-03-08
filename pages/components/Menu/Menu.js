import styles from './Menu.scss';

function Menu() {
  return (
    <article>
    <h3 id="menu">Menu</h3>
    <p>Here are some examples of the dishes we will cook for you.</p>
    <div className={styles.Wrapper}>
      <section className={styles.Menu}>
        <header className={styles.Title}>
          <h4>Entrées</h4>
          <p>Starters</p>
        </header>
        <ul className={styles.MenuList}>
          <li>Des chouquettes salé au fromage</li>
          <li>Salade niçoise</li>
          <li>Pissaladière</li>
          <li>Mayonnaise / légumes à tremper</li>
          <li>Mast o khiar</li>
          <li>Salade Chirazi</li>
        </ul>
      </section>
      <section className={styles.Menu}>
        <header className={styles.Title}>
          <h4>Plats principaux</h4>
          <p>Main course</p>
        </header>
        <ul className={styles.MenuList}>
          <li>Œufs à la coque</li>
          <li>
            Plat au four pommes de terre pommes, tomates, courgettes, huile d’olive et
            herbes de Provence
          </li>
          <li>Endives au jambon</li>
          <li>Quiche lorraine / tarte aux poireaux / tarte tomates moutarde</li>
          <li>Poulet basquaise</li>
          <li>Gratin de chou-fleur</li>
          <li>Croque monsieur</li>
          <li>Filet mignon ou rôti de porc</li>
          <li>Apéritif dînatoire</li>
        </ul>
      </section>
      <section className={styles.Menu}>
        <header className={styles.Title}>
          <h4>Desserts</h4>
          <p>Desserts</p>
        </header>
        <ul className={styles.MenuList}>
          <li>Plateau de fromages</li>
          <li>Crème brûlée</li>
          <li>Tarte Tatin</li>
          <li>Profiterole</li>
          <li>Tarte aux pommes</li>
          <li>Trou normand</li>
          <li>Fondant au chocolat avec de la crème anglaise</li>
        </ul>
      </section>
    </div>
    <hr />
    <div className={styles.Wrapper}>
      <section className={styles.Menu}>
        <header className={styles.Title}>
          <h4>Petits-déjeuners</h4>
          <p>Breakfasts</p>
        </header>
        <ul className={styles.MenuList}>
          <li>Crêpes</li>
          <li>Quatre quart</li>
          <li>Madeleine</li>
          <li>Baguette</li>
          <li>Cake à la pomme</li>
          <li>Cake à la banane</li>
          <li>Compote / yaourt</li>
          <li>Pain perdu</li>
        </ul>
      </section>
      <section className={styles.Menu}>
        <header className={styles.Title}>
          <h4>Cocktails</h4>
          <p>Cocktails</p>
        </header>
        <ul className={styles.MenuList}>
          <li>White Lady</li>
          <li>Manhattan</li>
          <li>Whisky Sour</li>
          <li>Old Fashioned</li>
          <li>Vodka Martini</li>
        </ul>
      </section>
    </div>
  </article>
  );
}

export default Menu;
