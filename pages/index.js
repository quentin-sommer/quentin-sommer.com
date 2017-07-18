import * as React from 'react'
import P from '../components/P'
import H1 from '../components/Titles/H1'
import Link from '../components/Link'
import H2 from '../components/Titles/H2'
import H3 from '../components/Titles/H3'
import HR from '../components/HR'
import Page from '../layouts/Page'
import Menu from '../components/Menu'

const IndexPage = () =>
  <Page>
    <H1>Welcome</H1>
    <P>
      I'm a Software Developer and a computer science student from Strasbourg,
      France.
    </P>
    <P>
      This is my personal website where you can find some projects I worked on,
      my open source activity, and some info about me.
    </P>
    <H2>About me</H2>
    <P>
      I am currently studying Computer Science at EPITECH and working at{' '}
      <Link external href="https://www.schlouk-map.com">
        Schlouk Map
      </Link>.<br />
      Interested in personal development and happiness research. Adhere to the
      Startup Entrepreneur mindset and the importance of good work/life balance
      principle.
    </P>
    <P>
      I play the piano and make{' '}
      <Link external href="https://soundcloud.com/anakrose">
        music
      </Link>{' '}
      with my computer. Strong believer in the Open Web and enjoy functional
      programming.<br />
      Besides computing I enjoy discussing psychology and science in general.
    </P>
    <HR />
    <H2>Resume</H2>
    <H3>Skills</H3>
    <ul>
      <li>
        <b>JavaScript -</b> React, Node.js, functional programming
      </li>
      <li>
        <b>Golang -</b> Web services
      </li>
      <li>
        <b>Linux -</b> Command line, scripting
      </li>
    </ul>
    <H3>Work Experiences</H3>
    <ul>
      <li>
        <b>Oct. 2016 - July 2017 -</b> FullStack software developer at Schlouk
        Map, Strasbourg
      </li>
      <li>
        <b>Apr. 2015 - July 2015 -</b> Web developer at FD Canada, Quebec
      </li>
    </ul>
    <H3>Education</H3>
    <ul>
      <li>
        <b>2015-2019 -</b> EPITECH Strasbourg, Master degree in Computer Science
      </li>
      <li>
        <b>2013-2015 -</b> IUT Robert Schumann, 2 years Computer Science degree
      </li>
    </ul>
  </Page>

export default IndexPage
