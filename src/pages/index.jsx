import React from 'react';

import {
  H1, SubH1, H2, H3, H4, P, ExternalLink,
} from '../components/textElements';
import ExpCard from '../components/experienceCard';

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
              'Nodepad ++',
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
  </div>
);

export default IndexPage;
