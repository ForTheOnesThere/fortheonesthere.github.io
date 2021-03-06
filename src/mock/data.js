import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'James Cockayne | Developer and Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'James Cockayne, developer.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'James Cockayne.',
  subtitle: `I'm a Web Developer.`,
  cta: 'Meet me...',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `My name is James, and I am a software developer and aerospace engineer from the UK.
  In 2020, I graduated with first class honours from the University of Nottingham, with a master's degree in Aerospace Engineering (MEng).`,
  paragraphTwo: `At university, I also learned web development. As a qualified engineer that's not from a traditional software background,
                I am uniquely placed to solve a huge range of problems. `,
  paragraphThree: `A selection of my skills and projects can be seen below. Please get in touch, I'd love to work together!`,
  resume: null, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'spotify-app.png',
    title: 'Spotify Visualised',
    info: `This web app was made with React, and signs the user in to Spotify using OAuth 2.0 and displays all of the song data that Spotify doesn't let you see ordinarily.`,
    info2:
      "It's responsive, fluid, and fast. The user is shown their library, and clicking on an album, then a track, will display the unique characteristics of that song. How 'danceable' is your favourite song? How much 'speechiness' does it contain? Find out! (First sign-in takes a while due to my backend situation but second time onwards is representative of real-world speed.)",
    url: 'https://fortheonesthere.github.io/spotify-app',
    repo: 'https://github.com/ForTheOnesThere/spotify-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'faceDetect.png',
    title: 'Face Detection App',
    info:
      "This web app detects the presence of faces in pictures, and can highlight them graphically to the user. It uses React for the front end, Express for the backend, and PostgreSQL for the database. To give it a try, use the credentials 'test@test.com', 'test'",
    info2:
      "It features signing in/out through the database, and keeps track of a user's number of entries. Check out the front and back ends on GitHub!",
    url: 'https://fortheonesthere.github.io/facial-recognition-app',
    repo: 'https://github.com/ForTheOnesThere/facial-recognition-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'spaceXpedia.png',
    title: 'SpaceXpedia',
    info:
      'A fully interactive and responsive web application for rocket fans. It features a live launch countdown and an interface to access any past mission information you would ever need to know.',
    info2: '',
    url: 'https://fortheonesthere.github.io/spaceXpedia',
    repo: 'https://github.com/ForTheOnesThere/spaceXpedia', // if no repo, the button will not show up
  },

  /* {{
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Coronavirus Tracker with WebGL Globe and a COVID-19 API',
    info: 'This project is yet to be built.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  }, } */
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together? Awesome!',
  btn: '',
  email: 'jamescockayne1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamescockayne/',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/fortheonesthere',
    },
    {
      id: uuidv1(),
      name: 'reddit',
      url: 'https://www.reddit.com/user/ForTheOnesThere',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ForTheOnesThere',
    },
  ],
};

// GITHUB CARD DATA
export const githubCardData = {
  text: `This is just a selection of projects I have worked on. To view all of my work to date, check out my GitHub profile in the list of social media links below, along with some of my other online profiles.`,
  avatarUrl: 'www.yay.com',
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
