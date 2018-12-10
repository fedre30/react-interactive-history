//IMAGES
import Federica from '../img/F.png';


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
        link: 'https://www.youtube.com/watch?v=nXWiYMd_MXs'
      },
      {
        text: "Pop",
        nextScene: "story4",
        link: 'https://www.youtube.com/watch?v=nXWiYMd_MXs',
      },
      {
        text: "Metal",
        nextScene: "story4",
        link: 'https://www.youtube.com/watch?v=nXWiYMd_MXs',
      }
    ],
    img: Federica,

  },
  story3: {
    text: 'lalalala',
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
    img: Federica,
  },
  story4: {
    text: 'lalalala',
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
    img: Federica,
  }
};

export default data;