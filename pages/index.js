import * as React from 'react'
import P from '../components/P'
import H1 from '../components/Titles/H1'
import Link from '../components/Link'
import H2 from '../components/Titles/H2'
import H3 from '../components/Titles/H3'
import HR from '../components/HR'
import Page from '../layouts/Page'
import Menu from '../components/Menu'

const IndexPage = () => (
  <Page url="/">
    <H1>Welcome</H1>
    <P>
      I'm a Software Developer from{' '}
      <Link external href="https://en.wikipedia.org/wiki/Strasbourg">
        Strasbourg, France.
      </Link>
    </P>
    <P>
      This is my personal website where you can find some projects I worked on,
      my open source activity and some info about me.
    </P>
    <H2>About me</H2>
    <P>
      I am currently working at{' '}
      <Link external href="https://aircall.io">
        Aircall
      </Link>{' '}
      as a backend engineer on telephony-related projects. I graduated from
      EPITECH in Computer Science, specializing in backend development. My tools
      of choice are Node.js, Ruby and Go.
      <br />
      I'm interested in personal development and a strong beliver in the Open
      Web!
    </P>
    <P>
      I play the piano and make{' '}
      <Link external href="https://soundcloud.com/anakrose">
        music
      </Link>{' '}
      with my computer.
      <br />
      Besides computing I enjoy traveling lightly, get lost in nature and a cold
      beer while watching the sunset.
    </P>
    <HR />
    <H2>Resume</H2>
    <H3>Skills</H3>
    <ul>
      <li>
        <b>JavaScript -</b> Node.js, Feathers, React
      </li>
      <li>
        <b>Ruby - </b> Sinatra
      </li>
      <li>
        <b>Go -</b> Web services, Gin
      </li>
      <li>
        <b>Linux -</b> Command line, scripting
      </li>
      <li>
        <b>Databases -</b> MongoDB, MySQL, Redis
      </li>
      <li>
        <b>Google Cloud -</b> Firebase, Datastore, BigQuery
      </li>
      <li>
        <b>AWS -</b> SNS, SQS, S3, DynamoDB
      </li>
    </ul>
    <H3>Work Experiences</H3>
    <ul>
      <li>
        <b>Sept. 2018 - now -</b> Software Engineer at{' '}
        <Link external href={'https://aircall.io'}>
          Aircall
        </Link>
        , Paris
      </li>
      <li>
        <b>Sept. 2017 - July 2018 -</b> RealTime backend developer at{' '}
        <Link external href={'https://transit.app'}>
          Transit
        </Link>
        , Montreal
      </li>
      <li>
        <b>Oct. 2016 - July 2017 -</b> FullStack developer at{' '}
        <Link external href={'https://schlouk-map.com'}>
          Schlouk Map
        </Link>
        , Strasbourg
      </li>
      <li>
        <b>Apr. 2015 - July 2015 -</b> Web developer at FD Canada, Quebec City
      </li>
    </ul>
    <H3>Public Speaking</H3>
    <ul>
      <li>
        <b>Mar. 2018 -</b> Building <i>fast</i> web apps using Web Workers.
        @Montreal js{' '}
        <Link
          external
          href="https://docs.google.com/presentation/d/1Ue0o2LboorM5ptsPN3FGvbqDuBKJp2wQYbqOu30wVmM/edit?usp=sharing"
        >
          Slides
        </Link>
      </li>
    </ul>

    <H3>Prizes</H3>
    <ul>
      <li>
        <b>Nov. 2016 -</b> Won Startup Weekend Strasbourg with{' '}
        <Link href="https://ethikey.com/" external>
          Ethikey
        </Link>
      </li>
    </ul>
    <H3>Education</H3>
    <ul>
      <li>
        <b>2015-2019 -</b> EPITECH Strasbourg, Master degree in Computer Science
      </li>
      <li>
        <b>2017-2018 -</b> Concordia University Montreal, student exchange
      </li>
      <li>
        <b>2013-2015 -</b> IUT Robert Schumann, 2 years Computer Science degree
      </li>
    </ul>
  </Page>
)

export default IndexPage
