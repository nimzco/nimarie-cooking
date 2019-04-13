import React from 'react';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import Layout from '../../shared/Layout';
import Menu from '../Menu';
import PhotoGallery from '../PhotoGallery';
import MarieEmmaPicture from './images/marie-emma-profile.jpeg';
import NimaPicture from './images/nima-profile.jpeg';
import photo from '../PhotoGallery/photos/fruits.jpeg';

import styles from './HomeIndex.scss';

class HomeIndex extends React.Component<WithI18nProps> {
  render() {
    const {i18n} = this.props;

    return (
      <>
        <Layout>
          <div id="intro">
            <h4>{i18n.translate('cook')}</h4>
            <p>{i18n.translate('cookDescription')}</p>
            <h4>{i18n.translate('share')}</h4>
            <p>{i18n.translate('shareDescription')}</p>
            <h4>{i18n.translate('discover')}</h4>
            <p>{i18n.translate('discoverDescription')}</p>
          </div>
          <div>
            <h3 id="about">{i18n.translate('about')}</h3>
            <h4>{i18n.translate('born')}</h4>
            <p>
              Pendant 3 mois nous avons décidé d’explorer la Corée et le Japon et voulons découvrir
              et vivre en plein cœur de la culture. Couchsurfing, Airbnb, house sitting, plusieurs
              options s’offrent à nous, mais nous voulons rencontrer les gens et offrir quelque
              chose en échange. Nous voyageons à petit budget. Notre but n’est pas d’avoir des
              commentaires positifs ou 5 étoiles, mais simplement d’être nous même et apprécier de
              bons repas avec de la bonne compagnie.
            </p>

            <article>
              <h4>Marie-Emma</h4>
              <img
                className={styles.ProfilePicture}
                src={MarieEmmaPicture}
                alt="Marie-Emma's picture"
              />
              <p>
                Hi everyone ! I'm 29 years old. I work in a non-profit organization about literacy.
                My mission is to create environments where adults can use their own literacy skills
                to participate in a group. Since I had my master in sociology, I've always loved
                working in this area because I can help people and society by giving tools to people
                who live in precarity. I care about the news, history, and politics. I try to read
                every day to keep up my knowledge and to try to understand better the news and the
                people. I'm a kind of utopist and I like to imagine different things. I always have
                lots of ideas, so I write them down to give them life, but one day I would like to
                realize at least one of them.
              </p>
              <p>
                I love reading classic novels. Some of my favorites authors are Alexandre Dumas,
                Carlos Ruiz Zafon, Emile Zola, Lampedusa, etc. I am also a fan of Harry Potter.
              </p>
              <p>
                When I was a teenager a friend of mine, showed me "Hana Yori Dango". It' s a
                Japanese drama. I was a huge fan and following this discovery I developed a passion
                with Japanese and Korean drama. I watched a lot of them: Goong, Kurosagi, Coffee
                Prince, Gobelin, Hanazakari no Kimitachi e, Nobuta wo Produce, Heirs, Love rain,
                You're beautiful, etc. I'm a big fan of Park Shin Hye. So, this travel in South
                Korea and Japan represent a lot because I will discover in real life the customs,
                food, and places. I'm looking forward to tasting street food! For example, in drama,
                I have always seen families doing kimchi. I hope we could learn and do kimchi with
                you. Or, I would like to try to eat and watch TV with a kotatsu.
              </p>
              <p>
                I will stop here because I can't share everything in a short description. So, this
                is some fun facts about me:
              </p>
              <ul>
                <li> I am a volunteer and I like to wake up early. </li>
                <li> I have to read all the descriptions in museums. </li>
                <li> I am learning Korean for this travel, but I'm very debutant. </li>
                <li>
                  You think something is impossible and I can propose you a lot of alternatives.
                </li>
              </ul>
            </article>
            <article>
              <h4>Nima</h4>
              <img className={styles.ProfilePicture} src={NimaPicture} alt="Nima's picture" />
              <p>
                Hi there! My name is Nima, soon to be 30, I am French and Persian. I was born in
                Nice, France and raised by 2 Iranian parents who passed on to me the Persian culture
                and cuisine while I was growing up in a French environment. From my early days, I
                had the chance to grow up and learn 2 different languages and cultures. I went to
                school in France and in the summer, when we could, my mom, my sister and I would
                travel to Iran to visit the rest of the family. That meant, living for weeks in a
                fully different culture, speaking Persian and enjoying great food, music and family
                parties.
              </p>
              <p>
                In my teenage days, I read lots of mangas. That was my little door into Japanese
                culture like most teenagers at the time. But it's only recently that I had the
                chance to discover more about it. I currently work at a Commerce company (Shopify)
                that is trying to enter the Japanese market. As a developer, my goal with my team is
                to understand the cultural differences between North America and Japan and make our
                product better localized for Japanese people. And it has been fascinating. That is
                what made me start learning Japanese a few months ago.
              </p>
              <p>
                I love technology and entrepreneurship. This is why I like to give back to the open
                source community on the Internet by creating or contributing to projects during my
                free time. But more importantly, I love people. Listening to their stories and their
                viewpoint; debating with them and having fun. Oh, and I forgot to mention, I started
                doing improv as a leisure activity and I love it!
              </p>
              <p>
                Fun fact: Nima means <em>sun</em> in Tibetan, and
                <em>half moon</em> in Persian.
              </p>
            </article>
            <article>
              <h4>Us</h4>
              <p>
                We are two passionate people in love with travel and people. And you know what? We
                are about to realize a unique life experience thanks to you.
              </p>
              <p>
                Seriously. It's been a whole year that we are preparing ourselves to take 3 months
                off away from our daily routine to meet new people, discover new cultures, new
                activities, new languages, new landscapes. We want to learn about different routines
                by experiencing them. At the dawn of our thirties, we want to challenge ourselves
                for an adventure full of discoveries and new learnings.
                <p>
                  We have traveled a lot since our twenties: Thaïland, Vietnam, Canada, Mexico,
                  Portugal, Spain, Italy, Netherlands, UK, US, Sweden and France of course.
                  Although, we never really left our comfort zone as it always was classic holidays.
                  Don't get us wrong. It was great, we always had great times and we have seen lots
                  of beautiful landscapes, yet we never really had the time to connect fully with
                  the people locally. That's why we want to experiment Couchsurfing. We want an
                  authentic experience to discover South Korea and Japan. We want to discover the
                  know-how and customs, jobs, history, daily food, and daily life.
                </p>
                <p>Before introducing each other, here are some fun facts about us:</p>
                <ul>
                  <li>
                    We love talking and we do it all the time. We can't go through a day without
                    telling each other every single detail of our lives. It's fantastic! We love
                    talking to people but also listening to their stories, their unique lives,
                    experiences, and families.{' '}
                  </li>
                  <li>We love walking and talking together about the world. </li>
                  <li>
                    We love sharing our French culture and cook French cuisine. We will love to
                    share our French recipes with you if the ingredients are available!
                  </li>
                </ul>
              </p>
              <p>We love to host friends for dinner at our place and cook them dinner.</p>
              <p>
                Nous sommes deux jeunes passionnés qui apprenons à parler le coréen et le japonais
                et nous voulons voyager pendant trois mois à travers la Corée et le Japon. Nous
                aimons voyager à travers le monde en sac à dos.
              </p>
            </article>
            <hr />
            <article>
              <h3 id="what-we-ask">Ce dont nous aurons besoin</h3>
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
            <PhotoGallery />
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
                en avez déjà mangé ? Est-ce que vous connaissez la France ? Y avez-vous déjà été ?
                Fun fact. How did you hear about us?
              </p>
              <hr />
              <p className="contact-us">
                <span className="button button-disabled">hi@nimarie.cooking</span>
                <br />
                <a href="mailto:hi@nimarie.cooking" className="button button-primary">
                  Contact Us
                </a>
              </p>
            </article>
            <hr />
            <img src={photo} />
            <hr />
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
      </>
    );
  }
}

export default withI18n()(HomeIndex);
