import * as React from 'react'
import P from '../components/P'
import H1 from '../components/Titles/H1'
import Link from '../components/Link'
import H2 from '../components/Titles/H2'
import H3 from '../components/Titles/H3'
import Page from '../layouts/Page'

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
      <Link external href="https://transitapp.com">
        Transit
      </Link>{' '}
      as a Data engineer. I graduated from EPITECH in Computer Science,
      specializing in backend development. My tools of choice are Node.js, Ruby,
      and Python.
    </P>
    <H2>Resume</H2>
    <H3>Skills</H3>
    <ul>
      <li>
        <b>JavaScript -</b> Node.js, Feathers, Next.js, React
      </li>
      <li>
        <b>Python -</b> Apache Beam, Airflow
      </li>
      <li>
        <b>Ruby - </b> Sinatra
      </li>
      <li>
        <b>Linux -</b> Command line, scripting
      </li>
      <li>
        <b>Databases -</b> MySQL, MongoDB, Redis
      </li>
      <li>
        <b>Google Cloud -</b> Dataflow, PubSub, BigQuery, Firebase, Datastore
      </li>
      <li>
        <b>AWS -</b> SNS, SQS, S3, Lambda, DynamoDB
      </li>
    </ul>
    <H3>Work Experiences</H3>
    <ul>
      <li>
        <b>Feb. 2021 - now -</b> Data Engineer at{' '}
        <Link external href={'https://transitapp.com'}>
          Transit
        </Link>
        , Paris - Montreal
      </li>
      <li>
        <b>Sept. 2018 - Nov. 2020 -</b> Software Engineer at{' '}
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
