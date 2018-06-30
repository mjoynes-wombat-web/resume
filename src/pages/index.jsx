import React from 'react';

import {
  H1, P, ExternalLink,
} from '../components/textElements';
import ExpCard from '../components/experienceCard';
import ProjectCard from '../components/projectCard';
import WorkCard from '../components/workCard';
import EduCard from '../components/educationCard';

const IndexPage = () => (
  <div>
    <H1>
      {'Who Am I?'}
    </H1>
    <P>
      {'I have been a graphic designer for a decade and have a love for creating stunning visuals that make it easy for people to get the information they are searching for. The technical portions of my work have always been an attraction to me. For this reason I chose to pursue a career in web design and development. It turns out that it\'s a perfect fit that excites and intrigues me.'}
    </P>
    <section id="mySkills">
      <H1>
        {'My Skills'}
      </H1>
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
        heading="Garment Design"
        list={
            [
              'Screen Printing',
              'Sublimation',
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
        heading="Other Design"
        list={
            [
              'Signage',
              'Displays',
            ]
        }
      />
    </section>
    <section id="myTech">
      <H1>
            My Technologies
      </H1>
      <ExpCard
        heading="Bak End Frameworks"
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
        heading="Testing"
        list={
            [
              'Mocha with Chai',
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
        heading="Design"
        list={
            [
              'Animate',
              'Illustrator',
              'Photoshop',
              'XD',
            ]
        }
      />
    </section>
    <section id="projects">
      <H1>
        {'Projects'}
      </H1>
      <ExternalLink href="https://www.simeonsmith.me/my-work">
        {'Portfolio'}
      </ExternalLink>
      <ProjectCard
        heading="Design Bright"
        link={{
          text: 'www.designbright.org',
          href: 'https://www.designbright.org',
        }}
        description="Created a web application for funding campaigns for nonprofit marketing projects. Created the front-end using ReactJS. Includes an authorization API, payment API and content editor. The back-end REST API uses ExpressJS, NodeJS and MySQL."
      />
      <ProjectCard
        heading="SimeonSmith.me"
        link={{
          text: 'www.simeonsmith.me',
          href: 'https://www.simeonsmith.me',
        }}
        description="My personal portfolio site. It's a static site created using Gatsby, ReactJS and NodeJS."
      />
    </section>
    <section id="employment">
      <H1>
        {'Recent Employment History'}
      </H1>
      <WorkCard
        heading="K-l Mfg. Co."
        title="Graphic Designer"
        dates={[
          'Aug. 2015 - Current',
          'Aug. 2013 - Nov. 2014',
        ]}
        city="Spokane, WA"
        description="Design, layout, and print of custom athletic sports apparel for companies like Nike, Castelli, and Terry."
      />
      <WorkCard
        heading="Wombat Web Design"
        title="Owner / Web Designer"
        dates={[
          'Sept. 2014 - Current',
        ]}
        city="Ellensburg, WA"
        description="Freelance work producing websites for clients."
      />
      <WorkCard
        heading="Purrfect Logos"
        title="General Manger"
        dates={[
          'Jan. 2013 - Aug. 2013',
          'May 2011 - Jan. 2013 (Previous position.)',
        ]}
        city="Spokane Valley, WA"
        description="Managed daily operations. Performed purchasing, bookkeeping, and collections."
      />
    </section>
    <section id="education">
      <H1>
        {'Education'}
      </H1>
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
        description="Graduated Valedictorian."
      />
    </section>
  </div>
);

export default IndexPage;
