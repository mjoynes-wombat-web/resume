import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGitHub from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import { faExternalLinkSquare as faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLinkSquare';

import {
  H1, P, ExternalLink,
} from '../components/textElements';
import ExpCard from '../components/experienceCard';
import ProjectCard from '../components/projectCard';
import WorkCard from '../components/workCard';
import EduCard from '../components/educationCard';
import ContactCard from '../components/contactCard';
import Transcript from '../static/docs/official-transcript.pdf';

const IndexPage = () => (
  <main>
    <ContactCard
      name="Marwynn Joynes"
      email="me@marwynn.net"
      cell="1.207.619.1880"
      linkedin="https://www.linkedin.com/in/tofieldya/"
      github="https://github.com/mjoynes-wombat-web"
      portfolio="https://www.marwynn.net"
      contact="https://www.marwynn.net/make-contact"
    />
    <H1 id="siteHeading">
      {'Who Am I?'}
    </H1>
    <P>
      {'I have been a graphic designer for a decade. I love stunning visuals that make it easy to find information. The technical portions of my work have always been attractive to me. For this reason I chose to pursue a career in web design and development. It turns out that it\'s a perfect fit that excites and intrigues me.'}
    </P>
    <section id="mySkills">
      <H1>
        {'Skills'}
      </H1>
      <div className="grid">
        <ExpCard
          heading="Web Design"
          list={
            [
              'Desktop',
              'User Experience',
              'Mobile',
            ]
        }
        />
        <ExpCard
          heading="Web Development"
          list={
            [
              'Database Management',
              'REST/GraphQL APIs',
              'Server Management',
            ]
        }
        />
        <ExpCard
          heading="DevOps"
          list={
            [
              'AWS',
              'CI Pipelines',
              'Terraform',
            ]
        }
        />
        <ExpCard
          heading="AWS"
          list={
            [
              'CloudFormation',
              'Serverless Architecture',
              'Load Balanced Server Architecture',
            ]
        }
        />
        <ExpCard
          heading="Graphic Design"
          list={
            [
              'Printing',
              'Garments',
              'Digital',
            ]
        }
        />
      </div>
    </section>
    <section id="projects">
      <H1>
        {'Projects'}
      </H1>
      <ExternalLink
        href="https://www.marwynn.net/my-work"
        target="_blank"
      >
        <FontAwesomeIcon alt="Portfolio" icon={faExternalLink} />
        <span className="text">
          {'Portfolio'}
        </span>
        <span className="url">
          {'Portfolio: https://www.marwynn.net/my-work'}
        </span>
      </ExternalLink>
      <div className="grid">
        <ProjectCard
          heading="SumoLogic.com"
          link={{
            site: {
              text: 'www.sumologic.com',
              href: 'https://www.sumologic.com/',
            },
            github: [],
          }}
          description="Load balanced marketing site built on AWS infrastructure."
        />
        <ProjectCard
          heading="EDMO.com"
          link={{
            site: {
              text: 'www.edmo.com',
              href: 'https://www.edmo.com/',
            },
            github: [],
          }}
          description="E-Commerce site built with AWS Amplify and using AWS AppSync GraphQL and Craft CMS for marketing content. Integrates with customers inventory management."
        />
        <ProjectCard
          heading="Design Bright"
          link={{
            site: {
              text: 'www.designbright.org',
              href: 'https://www.designbright.org',
            },
            github: [
              {
                text: 'Site Repo',
                href: 'https://github.com/mjoynes-wombat-web/design-bright-client',
              },
              {
                text: 'API Repo',
                href: 'https://github.com/mjoynes-wombat-web/design-bright-api',
              },
            ],
          }}
          description="An intuitive web application for creating funding campaigns for nonprofit marketing projects. The front-end uses ReactJS. Includes an authorization API, payment API, and content editor. The back-end REST API uses ExpressJS, NodeJS and MySQL."
        />
        <ProjectCard
          heading="Marwynn.net"
          link={{
            site: {
              text: 'www.marwynn.net',
              href: 'https://www.marwynn.net',
            },
            github: [
              {
                text: 'Site Repo',
                href: 'https://github.com/mjoynes-wombat-web/simeonsmith.me',
              },
            ],
          }}
          description="My personal portfolio site. It's a static site created using Gatsby, ReactJS and NodeJS."
        />
      </div>
    </section>
    <section id="employment">
      <H1>
        {'Recent Employment'}
      </H1>
      <ExternalLink
        href="https://www.linkedin.com/in/tofieldya/#experience"
        target="_blank"
      >
        <FontAwesomeIcon alt="LinkedIn" icon={faLinkedIn} />
        <span className="text">
          {'Full History'}
        </span>
        <span className="url">
          {'Full History: https://www.linkedin.com/in/tofieldya/#experience'}
        </span>
      </ExternalLink>
      <div className="grid">
        <WorkCard
          heading="14Four"
          title="Senior Developer / Team Captain"
          dates={[
            'Dec. 2022 - Current',
          ]}
          city="Spokane, WA"
          description="Development of primarily high traffic marketing campaign sites on AWS Infrastructre. Technical mentor and advisor for both frontend and backend developers."
        />
        <WorkCard
          heading="Uxiliary"
          title="Creative/Full Stack Developer"
          dates={[
            'Oct. 2018 - Dec. 2020',
          ]}
          city="Spokane, WA"
          description="Development of various websites from ecommerce to marketing sites."
        />
        <WorkCard
          heading="K-L Mfg. Co."
          title="Graphic Designer"
          dates={[
            'Aug. 2015 - Current',
            'Aug. 2013 - Nov. 2014',
          ]}
          city="Spokane, WA"
          description="Design, layout, and print of custom athletic apparel for companies like Nike, Castelli, and Terry."
        />
      </div>
    </section>
    <section id="education">
      <H1>
        {'Education'}
      </H1>
      <div className="grid">
        {/* <EduCard
          heading="Interior Distance Education of Alaska (IDEA)"
          program="High School Diploma"
          dates={[
            '2003-2007',
          ]}
        /> */}
        <EduCard
          heading="Full Sail University"
          program="Bachelors of Science in Web Design & Development"
          dates={[
            '2014 - 2017',
          ]}
          transcript={Transcript}
          description="Graduated Valedictorian with a 3.93 GPA."
        />
      </div>
    </section>
    <section id="myTech">
      <H1>
        {'Technologies'}
      </H1>
      <div className="grid">
        <ExpCard
          heading="Front End Languages"
          list={
            [
              {
                main: 'CSS 3',
                subItems: [
                  'SASS',
                ],
              },
              'HTML',
              {
                main: 'JavaScript',
                subItems: [
                  'Modern ECMA Script',
                  'jQuery',
                  'TypeScript',
                ],
              },
            ]
        }
        />
        <ExpCard
          heading="Front End Frameworks"
          list={
            [
              'Design Frameworks (Foundation, Tailwind, & etc.)',
              'PreactJS',
              {
                main: 'ReactJS',
                subItems: [
                  "Create React App",
                  "NextJS",
                  "Gatsby",
                ]
              },
              {
                main: 'VueJS',
                subItems: [
                  "NuxtJS",
                ]
              }
            ]
        }
        />
        <ExpCard
          heading="Code Editors"
          list={
            [
              'Atom',
              'Notepad ++',
              'Visual Studio Code',
              'WebStorm',
            ]
        }
        />
        <ExpCard
          heading="Back End Systems"
          list={
            [
              'ExpressJS',
              'Flask',
              'Apollo GraphQL',
              'CraftCMS',
              'Ruby on Rails',
              'Wordpress',
              'StrapiCMS',
            ]
        }
        />
        <ExpCard
          heading="Back End Languages"
          list={
            [
              'NodeJS',
              'PHP',
              'Python',
              'Ruby',
              'GoLang',
            ]
        }
        />
        <ExpCard
          heading="Server"
          list={
            [
              {
                main: 'Ubuntu/Debian Linux',
                subItems: [
                  'Apache 2',
                  'Nginx',
                  'PM2',
                ],
              },
              {
                main: 'MS Server 2008 R2',
                subItems: [
                  'IIS7',
                ],
              },
            ]
        }
        />
        <ExpCard
          heading="Databases"
          list={
            [
              'MySQL',
              'SQL Lite',
              'PostgreSQL',
              'DynamoDB',
            ]
        }
        />
        <ExpCard
          heading="Development"
          list={
            [
              'Docker',
              'Heroku',
              'Vagrant',
            ]
        }
        />
        <ExpCard
          heading="Version Control"
          list={
            [
              {
                main: 'Git',
                subItems: [
                  'BitBucket',
                  'GitHub',
                ],
              },
            ]
        }
        />
        <ExpCard
          heading="Testing"
          list={
            [
              'Mocha with Chai',
            ]
        }
        />
        <ExpCard
          heading="Design"
          list={
            [
              'Adobe Illustrator',
              'Adobe Photoshop',
              'Adobe XD',
            ]
        }
        />
      </div>
    </section>
    <P className="resume-link">
      {'An updated online version of this resume can be found at '}
      <ExternalLink href="https://resume.marwynn.net" display="inline">
        {'https://resume.marwynn.net'}
      </ExternalLink>
      {'.'}
    </P>
  </main>
);

export default IndexPage;
