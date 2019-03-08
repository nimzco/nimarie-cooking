import React from 'react';
import Layout from '../../shared/Layout'
import Menu from '../Menu';
import '../../styles/application.scss';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h3 id="who-we-are">Meet The Hosts</h3>
          <div class="row">
            <article class="six columns">
              <img
                class="profile-picture"
                src="./dist/images/marie-emma-profile.jpeg"
                alt="Marie-Emma's picture"
              />
              <h4>Marie-Emma</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti excepturi dolorem
                est dolor maxime deserunt voluptatibus quod laudantium ipsa et mollitia similique ab
                aut debitis aliquid voluptatum nobis, reprehenderit cupiditate!
              </p>
            </article>
            <article class="six columns">
              <img
                class="profile-picture"
                src="./dist/images/nima-profile.jpeg"
                alt="Nima's picture"
              />
              <h4>Nima</h4>
              <p>
                👋🏼 Hi there! My name is Nima, I am French and Persian. I was born in Nice, France
                and raised by 2 Iranian parents who passed on the Iranian culture and cuisine while
                I was growing up in a French environment. I started my adulthood as an entrepreneur
                in Paris, and 4 years later I moved to become a full time employee at Shopify in
                Montréal, Canada where I am currently a web developer lead in the International
                team. I love technology, entrepreneurship, and I am passionate about learning
                different cultures, meeting people from around the world, experiencing food and
                travel. I speak French, Persian, Spanish and I am currently learning Japanese.
              </p>
              <p>
                <strong>Fun fact:</strong> Nima means <em>sun</em> in Tibetan, and
                <em>half moon</em> in Persian.
              </p>
            </article>
          </div>
          <article>
            <h4>Us</h4>
            <p>
              We have been together since 2011 and are both originally from Nice, in the south of
              France. Since then, we lived 4 years in Paris, and 3 years in Montreal, Canada. Now we
              have decided to go back to the city we love the most: Paris. But before doing that, we
              want to discover South Korea and Japan. That’s why we’ve decided to take 3 months
              between August and November to discover these two countries, its culture and its
              people. We can’t wait to put on our bag packs, hop in the plane and come meet you!
            </p>
            <p>We love to host friends for dinner at our place and cook them dinner.</p>
            <p>
              Nous sommes deux jeunes passionnés qui apprenons à parler le coréen et le japonais et
              nous voulons voyager pendant trois mois à travers la Corée et le Japon. Nous aimons
              voyager à travers le monde en sac à dos.
            </p>
          </article>
          <hr />
          <article>
            <h3 id="the-experience">The Experience</h3>
            <p>
              Musique - playlist spécial Nous avons des menus prédéfinis mais vous pouvez nous aider
              à construire un menu personnalisé qui vous ressemble plus. Si vous voulez par exemple
              tester le petit déjeuner à la française ou si vous voulez tester un picnic.
            </p>
            <p>
              Cuisine familiale et non de la gastronomie. La cuisine que l’on fait tous les jours en
              France. Manger comme des Français au quotidien.
            </p>
            <p>
              We cook French and Persian cuisine and talk about the culture around dinner. Let’s
              discover our French / Persian culture and your culture around a great meal together.
              We will be the host, we will do the cooking. You can be our hosts and we will cook for
              you our best dishes. We also do cocktails. You can join us in the kitchen
            </p>
            <p>
              Pendant 3 mois nous avons décidé d’explorer la Corée et le Japon et voulons découvrir
              et vivre en plein cœur de la culture. Donc quoi de mieux que de discuter de cela
              autour d’un bon repas ?
            </p>
            <p>
              Soit nous faisons la cuisine gratuitement en échange d’un hébergement - Soit vous nous
              payez - Idéal 2 invités ou 4 maximum pour pouvoir être sûr de profiter d’un échange
              mutuel Nous ne sommes pas des chefs, nous sommes justes 2 passionnées de culture, de
              rencontre et de cuisine. Et quoi de mieux qu’un bon repas pour découvrir les gens et
              la culture.
            </p>
            <p>Nous voyageons à petit budget</p>
            <p>Nous partagerons nos recettes après notre passage.</p>
            <p>
              Our goal is not to have five stars or good reviews, we just want to be true to
              ourselves and enjoy a good dinner with good company.
            </p>
          </article>
          <hr />
          <article>
            <h3 id="what-we-ask">What We Are Looking For</h3>
            <p>
              We only ask for a bed for two people for one or more nights. Learn about you, you’re
              culture and your cuisine. Learn some of your recipes. The things you cook when you
              have friends over, the comfort food you eat in winter when it snows or rain outside.
            </p>
            <p>You need to have</p>
            <ul>
              <li>Cutting knives</li>
              <li>Peeler</li>
              <li>Pan</li>
            </ul>
            <p>Optional for some dishes:</p>
            <ul>
              <li>Oven</li>
              <li>Papier sulfurisé</li>
              <li>Plat à tarte</li>
              <li>Plat en verre pour aller au four</li>
            </ul>
          </article>
          <hr />
          <Menu />
          <hr />
          <article>
            <h3 id="contact">Contact us</h3>
            <h4>When will you be in town?</h4>
            <p>Here's a rough idea of our schedule:</p>
            <h5>South Korea</h5>
            <ul>
              <li>Seoul and around: ~August 14-25</li>
              <li>Bousan</li>
              <li>Jeju</li>
            </ul>
            <h5>Japan</h5>
            <ul>
              <li>Osaka</li>
              <li>Kyoto</li>
              <li>Tokyo</li>
            </ul>
            <p>
              Si vous n’êtes pas sûre ou avez des questions n’hésitez pas à nous envoyer un e-mail
              pour commencer la discussion.
            </p>
            <p>
              Présentez vous, qu’est-ce que vous aimez dans la cuisine française ? Est-ce que vous
              en avez déjà mangé ? Est-ce que vous connaissez la France ? Y avez-vous déjà été ? Fun
              fact. How did you hear about us?
            </p>
            <hr />
            <p class="contact-us">
              <span class="button button-disabled">hi@nimarie.cooking</span>
              <br />
              <a href="mailto:hi@nimarie.cooking" class="button button-primary">
                Contact Us
              </a>
            </p>
            <hr />
          </article>
          <article>
            <h3 id="faq">FAQ - Frequently Asked Questions</h3>
            <h5>Why not just using couchsurfing.com?</h5>
            <p>
              We think this is more than just couchsurfing.
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, explicabo
              voluptates aut facilis laudantium a asperiores! Illum quidem quibusdam voluptate,
              pariatur non nesciunt dolor facilis ducimus consequuntur possimus nam error.
            </p>
          </article>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
