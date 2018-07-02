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
      name="Simeon Smith"
      address={{
        street: '2611 E. Mission Ave.',
        city: 'Spokane, WA 99202',
      }}
      email="ssmith@wombatweb.us"
      cell="1.207.619.1880"
      linkedin="https://www.linkedin.com/in/tofieldya/"
      github="https://github.com/ssmith-wombatweb"
      portfolio="https://www.simeonsmith.me"
      contact="https://www.simeonsmith.me/make-contact"
    />
    <H1 id="siteHeading">
      {'Who Am I?'}
    </H1>
    <P>
      {'I have been a graphic designer for a decade. I have a love for stunning visuals that make it easy to find information. The technical portions of my work have always been an attraction to me. For this reason I chose to pursue a career in web design and development. It turns out that it\'s a perfect fit that excites and intrigues me.'}
    </P>
    <section id="mySkills">
      <H1>
        {'Skills'}
      </H1>
      <div id="grid">
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
              'REST API',
              'Server Management',
            ]
        }
        />
        <ExpCard
          heading="Print Design"
          list={
            [
              'Offset Press',
              'Large Format',
              'Digital',
            ]
        }
        />
        <ExpCard
          heading="Garment Design"
          list={
            [
              'Screen Printing',
              'Sublimation',
            ]
        }
        />
        <ExpCard
          heading="Other Design"
          list={
            [
              'Signage',
              'Displays',
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
        href="https://www.simeonsmith.me/my-work"
        target="_blank"
      >
        <FontAwesomeIcon alt="GitHub" icon={faGitHub} />
        <span className="text">
          {'Portfolio'}
        </span>
        <span className="url">
          {'Portfolio: https://www.simeonsmith.me/my-work'}
        </span>
      </ExternalLink>
      <div id="grid">
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
                href: 'https://github.com/ssmith-wombatweb/design-bright-client',
              },
              {
                text: 'API Repo',
                href: 'https://github.com/ssmith-wombatweb/design-bright-api',
              },
            ],
          }}
          description="Created a web application for funding campaigns for nonprofit marketing projects. Created the front-end using ReactJS. Includes an authorization API, payment API and content editor. The back-end REST API uses ExpressJS, NodeJS and MySQL."
        />
        <ProjectCard
          heading="SimeonSmith.me"
          link={{
            site: {
              text: 'www.simeonsmith.me',
              href: 'https://www.simeonsmith.me',
            },
            github: [
              {
                text: 'Site Repo',
                href: 'https://github.com/ssmith-wombatweb/simeonsmith.me',
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
      <div id="grid">
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
        <WorkCard
          heading="Wombat Web Design"
          title="Owner / Web Designer"
          dates={[
            'Sept. 2014 - Current',
          ]}
          city="Spokane, WA"
          description="Freelance work producing websites for clients."
        />
        <WorkCard
          heading="Purrfect Logos"
          title="General Manager"
          dates={[
            'Jan. 2013 - Aug. 2013',
            'May 2011 - Jan. 2013 (Previous position)',
          ]}
          city="Spokane Valley, WA"
          description="Managed daily operations. Performed purchasing, bookkeeping, and collections."
        />
      </div>
    </section>
    <section id="education">
      <H1>
        {'Education'}
      </H1>
      <ExternalLink
        href={Transcript}
        target="_blank"
      >
        <FontAwesomeIcon alt="Transcript" icon={faExternalLink} />
        <span className="text">
          {'Transcript'}
        </span>
        <span className="url">
          {`Transcript: https://resume.simeonsmith.me${Transcript}`}
        </span>
      </ExternalLink>
      <div id="grid">
        <EduCard
          heading="Interior Distance Education of Alaska (IDEA)"
          program="High School Diploma"
          dates={[
            '2003-2007',
          ]}
        />
        <EduCard
          heading="Full Sail University"
          program="Web Design & Development Bachelors of Science"
          dates={[
            '2014 - 2017',
          ]}
          description="Graduated Valedictorian with a 3.93 GPA."
        />
      </div>
    </section>
    <section id="myTech">
      <H1>
        {'Technologies'}
      </H1>
      <div id="grid">
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
              'HTML 4 & 5',
              {
                main: 'JavaScript',
                subItems: [
                  'ECMA Script 6',
                  'jQuery',
                ],
              },
            ]
        }
        />
        <ExpCard
          heading="Front End Frameworks"
          list={
            [
              'Angular 1',
              'Bootstrap',
              'Foundation',
              'PreactJS',
              'ReactJS',
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
          heading="Back End Frameworks"
          list={
            [
              'EmberJS',
              'ExpressJS',
              'Flask',
            ]
        }
        />
        <ExpCard
          heading="Back End Languages"
          list={
            [
              'NodeJS',
              'PHP 6',
              'Python 2',
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
  </main>
);

export default IndexPage;
