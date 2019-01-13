//IMAGES
import Federica from '../img/F.png';
import boySinging from '../img/boy_singing.jpeg';
import girlKaraoke from '../img/girl_karaoke.jpeg';
import youtube from '../img/youtube.jpeg';
import badened from '../img/badend.jpeg';
import album from '../img/pochette copie.jpg';
import listen from '../img/listen.jpeg';
import micro from '../img/micro.jpeg';
import David from '../img/david.jpg';
import Raphael from '../img/raphael.jpg';


const data = {
  story1: {
    text: 'Salut! Je suis Federica et je veux devenir une chanteuse. Et toi? Est-ce que tu sais chanter?',
    nextScene: 'story2',
    img: Federica,

    choices: [
      {
        text: "Oui",
        nextScene: "story2"
      },
      {
        text: "Non",
        nextScene: "story3"
      }
    ],
  },
  story2: {
    text: 'Nice! Alors j\'aimerais bien te tester un peu. Quel genre de musique tu préfères?',
    choices: [
      {
        text: "Rock",
        nextScene: "story4",
        link: 'https://www.youtube.com/watch?v=fgkxPooEypE'
      },
      {
        text: "Pop",
        nextScene: "story4",
        link: 'https://www.youtube.com/watch?v=dd2nfgicFds',
      },
      {
        text: "Metal",
        nextScene: "story4",
        link: 'https://www.youtube.com/watch?v=ywJAQT_S7uw',
      }
    ],
    img: listen,

  },
  story3: {
    text: 'Cool! Maintenant tu es prêt(e) pour la plus grande soirée Karaoke sur Paris! On va y aller avec des amis pour fêter la sortie de mon premier album. Est-ce que tu veux venir du coup?',
    choices: [
      {
        text: "Oui",
        nextScene: "story4"
      },
      {
        text: "Non",
        nextScene: "badEnd"
      }
    ],
    img: micro,
  },
  story4: {
    text: "Yeah! Je savais que tu étais quelqu'un de sympa! Allons-y alors!",
    nextScene: "story5",
    img: boySinging,
  },
  story5: {
    text: "On va chanter dans 10 minutes! Mais en attendant on pourrait danser! On va faire une requête ai DJ. Tu as une préférence?",
    choices: [
      {
        text: "Techno",
        nextScene: "story6",
        link: 'https://www.youtube.com/watch?v=nXWiYMd_MXs'
      },
      {
        text: "Rock",
        nextScene: "story6",
        link: 'https://www.youtube.com/watch?v=nXWiYMd_MXs',
      },
      {
        text: "Dance",
        nextScene: "story6",
        link: 'https://www.youtube.com/watch?v=nXWiYMd_MXs',
      }
    ],
    img: Federica,
  },
  story6: {
    text: 'Oh non! David vient de mettre pleins de commentaires négatifs en sous de mes vidéos! Comment je peux faire?',
    choices: [
      {
        text: "Il a bien fait. De toute façon tu sers à rien",
        nextScene: "badEnd"
      },
      {
        text: "Je suis sûr(e) que tu peux trouver une solution...",
        nextScene: "story7"
      }
    ],
    img: David,
  },

  story7: {
    text: "Tu as raison! Maintenant que j'y réflechis, j'ai un ami hacker, il s'appelle Raphaël. Tu penses qu'il va réussir à supprimer tous les commentaires haineux de David?" ,
    choices: [
      {
        text: "S'il est un bon ami, il va pouvoir sûrement t'aider",
        nextScene: "story8"
      },
      {
        text: "Il pourrait réussir mais à mon avis il va préferer David à pourrir ta chaîne Youtube avec d'autres haters",
        nextScene: "badEnd"
      }
    ],
    img: Raphael,
  },


  badEnd: {
    text: 'Fin. L\'amitié n\'existe pas. Deal with it, bro'
  }

};

export default data;