const data = {
  story1: {
    text: 'lorem ipsum',
    nextScene: 'story2',
  },
  story2: {
    text: 'bbbbbbb',
    choices: [
      {
        text: "1",
        nextScene: "story1"
      },
      {
        text: "2",
        nextScene: "story3"
      }
    ],
  },
  story3: {
    text: 'lalalala'
  }
};

export default data;