import * as React from 'react'
import Page from '../layouts/Page'
import ProjectList from '../components/ProjectList'
import H1 from '../components/Titles/H1'
import P from '../components/P'

const projects = [
  {
    name: 'Weather-QSMR',
    description:
      'Simple "no-bs" material-design weather forecast webapp. Free & without ads',
    date: '16 June 2018',
    url: 'https://weather-qsmr.now.sh',
  },
  {
    name: 'CSV-Explorer',
    description:
      'Web-based tool to explore large (millions of lines) CSV files.',
    date: '5 November 2017',
    url: 'https://csv-explorer.netlify.com',
  },
  {
    name: 'Strasbourg Loyer',
    description: 'Visualisation and stats of scrapped Strasbourg housing data',
    date: '11 March 2017',
    url: 'https://www.strasbourg-loyer.fr/',
  },
  {
    name: 'Game Of Life',
    description:
      'Game of life implementation using the DOM with infernojs to stress test the framework. (hard to use on mobile)',
    date: '16 December 2016',
    url: 'https://lifegame.surge.sh',
  },
  {
    name: 'Beautiful New Tab',
    description:
      'A lightweight chrome extension that displays a random Unsplash image on your new tab page',
    date: '18 August 2016',
    url:
      'https://chrome.google.com/webstore/detail/beautiful-new-tab/kojfjmoaofonodapbhpnmcbnanbhckon',
  },
]

const WorkPage = () => (
  <Page url="/work">
    <H1>Projects</H1>
    <P>
      <b>sort by</b> date <b>desc</b>
    </P>
    <ProjectList projects={projects} />
  </Page>
)

export default WorkPage
