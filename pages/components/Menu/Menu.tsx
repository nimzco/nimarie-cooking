import styles from './Menu.scss';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';

function Menu({i18n}: WithI18nProps) {
  return (
    <article>
      <h3 id="menu">Menu</h3>
      <p>
        {i18n.translate('description')}
      </p>
      <div className={styles.Wrapper}>
        <section className={styles.Menu}>
          <header className={styles.Title}>
            <h4>Entrées</h4>
            {i18n.locale !== 'fr' && <p>Starters</p>}
          </header>
          <ul className={styles.MenuList}>
            <li>Des chouquettes salé au fromage</li>
            <li>Salade niçoise</li>
            <li>Pissaladière</li>
            <li>Mayonnaise avec légumes à tremper</li>
            <li>Salade tomates concombre oignons</li>
            <li>Veloutés de légumes</li>
            <li>Salade de chèvre chaud</li>
            <li>Cake salé</li>
          </ul>
        </section>
        <section className={styles.Menu}>
          <header className={styles.Title}>
            <h4>Plats principaux</h4>
            {i18n.locale !== 'fr' && <p>Main course</p>}
          </header>
          <ul className={styles.MenuList}>
            <li>
              Pommes de terre pommes, tomates, courgettes, huile d’olive et herbes de Provence au
              four
            </li>
            <li>Endives au jambon</li>
            <li>Quiche lorraine</li>
            <li>Tarte aux poireaux</li>
            <li>Tarte tomates moutarde</li>
            <li>Poulet basquaise</li>
            <li>Gratin de chou-fleur</li>
            <li>Croque monsieur</li>
            <li>Filet mignon</li>
            <li>Rôti de porc</li>
            <li>Apéritif dînatoire</li>
            <li>Camembert au four</li>
          </ul>
        </section>
        <section className={styles.Menu}>
          <header className={styles.Title}>
            <h4>Desserts</h4>
            {i18n.locale !== 'fr' && <p>Desserts</p>}
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
            {i18n.locale !== 'fr' && <p>Breakfasts</p>}
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
            <li>Café accompagné de son Camembert</li>
          </ul>
        </section>
        <section className={styles.Menu}>
          <header className={styles.Title}>
            <h4>Cocktails</h4>
            {i18n.locale !== 'fr' && <p>Cocktails</p>}
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

export default withI18n()(Menu);
