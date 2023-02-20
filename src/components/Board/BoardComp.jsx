import { v4 as uuidv4 } from 'uuid'

import {
  Board,
  Header,
  NameTitle,
  ProfTitle,
  BoardSection,
  BoardHeader,
  BoardItems,
  BoardItem,
  BoardItemLink,
  BoardCardItems,
} from './board.styled'

import ProjectCard from './../ProjectCard/ProjectCard'
// import icecream from './../../../images/icecream.jpg'
import filmoteka from '../../images/filmoteka.png'
import icecream from '../../images/icecream.png'
import jobboard from '../../images/jobboard.png'
import tarifcalcreact from '../../images/tarifcalcreact.png'
import tarifcalcjs from '../../images/tarifcalcjs.png'
import imagefinder from '../../images/imagefinder.png'
import webstudio from '../../images/webstudio.png'
import healthyfood from '../../images/helthyfood.png'
// import kapusta from './../../../images/kapusta.jpg'
// import moviesearch from './../../../images/moviesearch.jpg'
// import phonebook from './../../../images/phonebook.jpg'
// import webstudio from './../../../images/webstudio.jpg'
// import imagesearch from './../../../images/imagesearch.jpg'
// import dashboard from './../../../images/dashboard.jpg'
// import todolist from './../../../images/todolist.jpg'

const summary = `I'm a Front-End developer looking for a position in a friendly
              environment, in which I can grow with the company as a developer.
              I've knowledge of HTML, CSS, JavaScript, and React. Also, I've
              hands-on experience in following Agile/Scrum methodology when
              working in a team. I'm a fast learner, responsible, and ready for
              challenging tasks. Result oriented.`

const teamProjects = [
  {
    id: 1,
    frontTitle: 'Filmoteka',
    imageSrc: filmoteka,
    frontContent: 'Movies library application (teamwork). ',
    role: 'developer',
    techStack: 'HTML, SASS, JS, Handlebars, REST API, AXIOS, Parcel',
    backRepo: ' https://github.com/aleksvoloshyn/filmoteka',
    backSite: ' http://surl.li/eyfgv',
  },
  {
    id: 2,
    frontTitle: 'Ice Cream',
    imageSrc: icecream,
    frontContent: 'The website with a responsive layout.',
    role: 'developer',
    techStack: 'HTML, SASS, JS, Parsel',
    backRepo: ' https://github.com/aleksvoloshyn/iceCream',
    backSite: 'http://surl.li/eyfgx',
  },
  // {
  //   id: 3,
  //   frontTitle: 'Kapu$ta ',
  //   imageSrc: kapusta,
  //   frontContent: 'Financial accounting app.Teamwork.',
  //   role: 'developer(reports)',
  //   techStack: 'HTML, SASS, JS, WEBPACK, REACT, RTK',
  //   backRepo: 'https://github.com/aleksvoloshyn/kapusta',
  //   backSite: 'https://adamants-kapusta.netlify.app/',
  // },
]
const myOwnProjects = [
  {
    id: 1,
    frontTitle: 'JOB BOARD',
    imageSrc: jobboard,
    frontContent: 'Adaptive Job board app',
    role: '',
    techStack: ' ReactJS, Tailwindcss (tab,desktop)',
    backRepo: 'https://github.com/aleksvoloshyn/jobboard',
    backSite: 'https://av-jobboard.netlify.app',
  },
  {
    id: 2,
    frontTitle: "PROVIDER's CALC (react)",
    imageSrc: tarifcalcreact,
    frontContent: 'Tarifs calculator app',
    role: '',
    techStack: ' React JS',
    backRepo: 'https://github.com/aleksvoloshyn/provider-calc-react',
    backSite: 'https://provider-calc-react.netlify.app',
  },
  {
    id: 3,
    frontTitle: "PROVIDER's CALC ( js)",
    imageSrc: tarifcalcjs,
    frontContent: 'Tarifs calculator app',
    role: '',
    techStack: ' HTML, SCSS, JS ',
    backRepo: 'https://github.com/aleksvoloshyn/provider-calculator',
    backSite: 'https://aleksvoloshyn.github.io/provider-calculator',
  },
  {
    id: 4,
    frontTitle: 'IMAGE FINDER',
    imageSrc: imagefinder,
    frontContent: 'Image finder service app',
    role: '',
    techStack: ' React JS',
    backRepo: 'https://github.com/aleksvoloshyn/goit-react-hw-04-hooks-images',
    backSite: 'https://aleksvoloshyn.github.io/goit-react-hw-04-hooks-images',
  },
  {
    id: 5,
    frontTitle: 'WEBSTUDIO',
    imageSrc: webstudio,
    frontContent: 'Adaptive website markup',
    role: '',
    techStack: ' HTML, SCSS',
    backRepo: 'https://github.com/aleksvoloshyn/goit-markup-hw-08',
    backSite: 'https://aleksvoloshyn.github.io/goit-markup-hw-08/index.html',
  },
  {
    id: 6,
    frontTitle: 'HEALTHY FOOD',
    imageSrc: healthyfood,
    frontContent: 'Healthy food landing page markup',
    role: '',
    techStack: ' HTML, SCSS',
    backRepo: 'https://github.com/aleksvoloshyn/healthyfood',
    backSite: 'https://aleksvoloshyn.github.io/healthyfood',
  },
]

const BoardComp = () => {
  return (
    <>
      <Board>
        <Header>
          <NameTitle>OLEKSII VOLOSHYN</NameTitle>
          <ProfTitle>Frontend developer</ProfTitle>
        </Header>

        <BoardSection>
          <BoardHeader>SUMMARY</BoardHeader>
          <BoardItems>
            <BoardItem>{summary}</BoardItem>
          </BoardItems>
        </BoardSection>

        <BoardSection>
          <BoardHeader>PROJECTS (HTML, CSS, JS, REACT)</BoardHeader>
          <BoardCardItems>
            {myOwnProjects.map((proj) => {
              return (
                <ProjectCard
                  key={uuidv4()}
                  frontTitle={proj.frontTitle}
                  imageSrc={proj.imageSrc}
                  frontContent={proj.frontContent}
                  role={proj.role}
                  backRepo={proj.backRepo}
                  backSite={proj.backSite}
                  techStack={proj.techStack}
                ></ProjectCard>
              )
            })}
          </BoardCardItems>
        </BoardSection>
        <BoardSection>
          <BoardHeader>TEAM-PROJECTS EXPERIENCE</BoardHeader>
          <BoardCardItems>
            {teamProjects.map((proj) => {
              return (
                <ProjectCard
                  key={uuidv4()}
                  frontTitle={proj.frontTitle}
                  imageSrc={proj.imageSrc}
                  frontContent={proj.frontContent}
                  role={proj.role}
                  backRepo={proj.backRepo}
                  backSite={proj.backSite}
                  techStack={proj.techStack}
                ></ProjectCard>
              )
            })}
          </BoardCardItems>
        </BoardSection>

        <BoardSection>
          <BoardHeader>WORK EXPERIENCE</BoardHeader>
          <BoardItems>
            <BoardItem>
              2017 - present: <b>Sole proprietor</b> Informatization consulting
              | international removals support
            </BoardItem>
            <BoardItem>
              2007 – 2017 : <b>Parus</b>, Kyiv Ukraine. Automation specialist
            </BoardItem>
          </BoardItems>
        </BoardSection>
        <BoardSection>
          <BoardHeader>EDUCATION</BoardHeader>
          <BoardItems>
            <BoardItem>
              Chernihiv National University of Technology | 2001-2006 The
              <BoardItemLink href="https://ekona.stu.cn.ua/">
                Department of Econometrics, Accounting and Auditing
              </BoardItemLink>
            </BoardItem>
          </BoardItems>
        </BoardSection>
        <BoardSection>
          <BoardHeader>ADDITIONAL EDUCATION</BoardHeader>
          <BoardItems>
            <BoardItem>
              <b>IT School GoIT (Kyiv) | 2020-2021</b>
              <br />
              Full-Stack Developer
            </BoardItem>
          </BoardItems>
        </BoardSection>
        <BoardSection> </BoardSection>
      </Board>
    </>
  )
}

export default BoardComp
