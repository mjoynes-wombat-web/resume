import type { NextPage } from 'next'
import Head from 'next/head'

import TextElements from '../components/TextElements'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import WorkCard from '../components/WorkCard'
import EducationCard from '../components/EducationCard'
import ContactCard from '../components/ContactCard'

import FaLinkedIn from '../font-awesome/free/brands/linkedin-in.svg'
import FaExternalLink from '../font-awesome/pro/solid/external-link-square.svg'

import '../scss/index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marwynn Joynes&apos; Resume</title>
        {/* TODO: Improve meta */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        <h1 id="siteHeading">{'Who Am I?'}</h1>
        <p>
          {
            "I have been a graphic designer for a decade. I love stunning visuals that make it easy to find information. The technical portions of my work have always been attractive to me. For this reason I chose to pursue a career in web design and development. It turns out that it's a perfect fit that excites and intrigues me."
          }
        </p>
        <section id="mySkills">
          <h1>{'Skills'}</h1>
          <div className="grid">
            <ExperienceCard
              heading="Web Design"
              list={['Desktop', 'User Experience', 'Mobile']}
            />
            <ExperienceCard
              heading="Web Development"
              list={[
                'Database Management',
                'REST/GraphQL APIs',
                'Server Management',
              ]}
            />
            <ExperienceCard
              heading="DevOps"
              list={['AWS', 'CI Pipelines', 'Terraform']}
            />
            <ExperienceCard
              heading="AWS"
              list={[
                'CloudFormation',
                'Serverless Architecture',
                'Load Balanced Server Architecture',
              ]}
            />
            <ExperienceCard
              heading="Graphic Design"
              list={['Printing', 'Garments', 'Digital']}
            />
          </div>
        </section>
        <section id="projects">
          <h1>{'Projects'}</h1>
          <TextElements.ExternalLink
            href="https://www.marwynn.net/my-work"
            target="_blank"
            display="block"
          >
            <FaExternalLink alt="Portfolio" />
            <span className="text">{'Portfolio'}</span>
            <span className="url">
              {'Portfolio: https://www.marwynn.net/my-work'}
            </span>
          </TextElements.ExternalLink>
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
                    href: 'https://github.com/mjoynes-wombat-web/marwynn.net',
                  },
                ],
              }}
              description="My personal portfolio site. It's a static site created using Gatsby, ReactJS and NodeJS."
            />
          </div>
        </section>
        <section id="employment">
          <h1>{'Recent Employment'}</h1>
          <TextElements.ExternalLink
            href="https://www.linkedin.com/in/tofieldya/#experience"
            target="_blank"
            display="block"
          >
            <FaLinkedIn atl="LinkedIn" />
            <span className="text">{'Full History'}</span>
            <span className="url">
              {
                'Full History: https://www.linkedin.com/in/tofieldya/#experience'
              }
            </span>
          </TextElements.ExternalLink>
          <div className="grid">
            <WorkCard
              heading="14Four"
              title="Senior Developer / Team Captain"
              dates={['Dec. 2022 - Current']}
              city="Spokane, WA"
              description="Development of high traffic marketing campaign sites on AWS infrastructre. Technical mentor and advisor for both frontend and backend developers."
            />
            <WorkCard
              heading="Uxiliary"
              title="Creative/Full Stack Developer"
              dates={['Oct. 2018 - Dec. 2020']}
              city="Spokane, WA"
              description="Development of various websites from e-commerce to marketing sites."
            />
            <WorkCard
              heading="K-L Mfg. Co."
              title="Graphic Designer"
              dates={['Aug. 2015 - Current', 'Aug. 2013 - Nov. 2014']}
              city="Spokane, WA"
              description="Design, layout, and print of custom athletic apparel for companies like Nike, Castelli, and Terry."
            />
          </div>
        </section>
        <section id="education">
          <h1>{'Education'}</h1>
          <div className="grid">
            {/* <EducationCard
          heading="Interior Distance Education of Alaska (IDEA)"
          program="High School Diploma"
          dates={[
            '2003-2007',
          ]}
        /> */}
            <EducationCard
              heading="Full Sail University"
              program="Bachelors of Science in Web Design & Development"
              dates={['2014 - 2017']}
              transcript="/docs/official-transcript.pdf"
              description="Graduated Valedictorian."
            />
          </div>
        </section>
        <section id="myTech">
          <h1>{'Technologies'}</h1>
          <div className="grid">
            <ExperienceCard
              heading="Front End Languages"
              list={[
                {
                  main: 'CSS 3',
                  subItems: ['SASS'],
                },
                'HTML',
                {
                  main: 'JavaScript',
                  subItems: ['Modern ECMA Script', 'jQuery', 'TypeScript'],
                },
              ]}
            />
            <ExperienceCard
              heading="Front End Frameworks"
              list={[
                {
                  main: 'Design Frameworks',
                  subItems: ['Foundation', 'Tailwind', 'Bootstrap'],
                },
                'PreactJS',
                {
                  main: 'ReactJS',
                  subItems: ['NextJS', 'Gatsby'],
                },
                {
                  main: 'VueJS',
                  subItems: ['NuxtJS'],
                },
              ]}
            />
            <ExperienceCard
              heading="Code Editors"
              list={['Atom', 'Notepad ++', 'Visual Studio Code', 'WebStorm']}
            />
            <ExperienceCard
              heading="Back End Systems"
              list={[
                'ExpressJS',
                'Flask',
                'Apollo GraphQL',
                'CraftCMS',
                'Ruby on Rails',
                'Wordpress',
                'StrapiCMS',
              ]}
            />
            <ExperienceCard
              heading="Back End Languages"
              list={['NodeJS', 'PHP', 'Python', 'Ruby', 'GoLang']}
            />
            <ExperienceCard
              heading="Server"
              list={[
                {
                  main: 'Ubuntu/Debian Linux',
                  subItems: ['Apache 2', 'Nginx', 'PM2'],
                },
                {
                  main: 'MS Server 2008 R2',
                  subItems: ['IIS7'],
                },
              ]}
            />
            <ExperienceCard
              heading="Databases"
              list={['MySQL', 'SQL Lite', 'PostgreSQL', 'DynamoDB']}
            />
            <ExperienceCard
              heading="Development"
              list={['Docker', 'Heroku', 'Vagrant']}
            />
            <ExperienceCard
              heading="Version Control"
              list={[
                {
                  main: 'Git',
                  subItems: ['BitBucket', 'GitHub'],
                },
              ]}
            />
            <ExperienceCard heading="Testing" list={['Mocha with Chai']} />
            <ExperienceCard
              heading="Design"
              list={['Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD']}
            />
          </div>
        </section>
        <p className="resume-link">
          {'An updated online version of this resume can be found at '}
          <TextElements.ExternalLink href="https://resume.marwynn.net">
            {'https://resume.marwynn.net'}
          </TextElements.ExternalLink>
          {'.'}
        </p>
      </main>
    </>
  )
}

export default Home
