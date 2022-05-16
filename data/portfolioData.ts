import { v4 as uuidv4 } from "uuid";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const homePage = {
  name: "Dakota Heim",
  role: "Front End Developer",
  homeImage: "../public/logoipsum-logo-12.svg",
  roleDescription:
    " I'm an incredibly passionate developer and pride myself on being a quick learner. I enjoy learning new technologies and I'm never afraid to challenge myself!",
  aboutMe:
    "I'm Dakota, but I go by Kotie (pronounced \"cody\"), and I've been working professionally as a front end developer for about 2 years now. I was born and raised in Utah and met my beautiful wife, going on about seven years ago and have never looked back! We have two dogs who keep us plenty busy and who we absolutely adore. I'm always looking to learn and challenge myself and keep life fun and exciting!",
  address: "Utah",
};
export const resume = {
  skills: {
    primary: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Vue",
      "Redux",
      "Vuex",
      "ES6",
      "Node",
      "npm",
      "yarn",
    ],
    secondary: ["TypeScript", "RESTful APIs", "Docker", "Webpack", "Express"],
    additionalTools: [
      "Git",
      "Slack",
      "Photoshop/Gimp",
      "Inkscape",
      "SEO",
      "POS Systems",
      "JIRA",
      "Agile Methodology",
      "Atomic Design",
      "Gherkin",
    ],
  },
  productivityTraits: [
    "Patience and commitment to work. Great team player and always willing to take on new and exciting tasks.",
    "Ability to pick up new technologies and concepts quickly.",
    "Organized and very routine based.",
  ],
  workExperience: [
    {
      companyName: "J.P. Morgan Chase",
      title: "Software Engineer",
      location: "Columbus, OH",
      dates: "October 2021 - Present",
      tasks: [
        "Worked on monolithic repository holding all of chase.com",
        " Learned and worked with internal framework based on Ractive.js",
        "Had a chance refactor legacy code and assist in dividing massive repository into smaller manageable repositories",
        "Had a chance refactor legacy code and assist in dividing massive repository into smaller manageable repositories",
      ],
    },
    {
      companyName: "STRATACACHE",
      title: "Software Engineer",
      location: "Dayton, OH",
      dates: "May 2020 - October 2021",
      tasks: [
        "Worked on digital menu boards for most major food chains in the USA as well as some in Canada and South America.",
        "Had a chance to architect some client's menu boards.",
        "Had a chance refactor legacy code and assist in dividing massive repository into smaller manageable repositories.",
        "Set up a pricing integration API with clients to dynamically adjust pricing of products on menu boards.",
        "Maintainer of multiple clients repositories as well handling multiple other developer’s merge requests.",
        "Labeled as “the Utility Dev” due to how flexible and easily I could hop on to other projects.",
      ],
    },
  ],
  education: [
    {
      id: uuidv4(),
      UniversityName: "Thinkful.Bloc.io",
      specialization:
        "Full-Stack Web Development Program / Engineering Immersion",
      MonthOfPassing: "Feb",
      YearOfPassing: "2020",
      Achievements:
        "Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures. Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.",
    },
    {
      id: uuidv4(),
      UniversityName: "Utah Valley University",
      specialization: "Computer Science",
      MonthOfPassing: "Jan",
      YearOfPassing: "2020+",
      Achievements:
        "General introductions into developement and programming which led me to pursue other means of education myself for the specific niche of what im interested in, rather than spending time on subjects not pertaining to my interests.",
    },
  ],
};
export const projects = [
  {
    id: uuidv4(),
    name: "Test Project one",
    image: "https://picsum.photos/200",
    aboutProject: "This is test project one",
    url: "#",
  },
  {
    id: uuidv4(),
    name: "Test Project two",
    image: "https://picsum.photos/200",
    aboutProject: "This is test project two",
    url: "#",
  },
  {
    id: uuidv4,
    name: "Test Project three",
    image: "https://picsum.photos/200",
    aboutProject: "This is test project three",
    url: "#",
  },
];
export const socialLinks = [
  {
    id: uuidv4(),
    name: "linkedin",
    url: "https://www.linkedin.com/in/dakotaheim/",
    className: "fa fa-linkedin",
    faIcon: faLinkedin,
  },
  {
    id: uuidv4(),
    name: "github",
    url: "https://github.com/Kotieheim",
    className: "fa fa-github",
    faIcon: faGithub,
  },
  {
    id: uuidv4(),
    name: "twitter",
    url: "https://twitter.com/HeimDakota",
    className: "fa fa-twitter",
    faIcon: faTwitterSquare,
  },
];
